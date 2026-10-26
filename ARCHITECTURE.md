# Architecture

## Folders

- `src/api` – functions for the requests to Supabase: `auth-api.js` (register, login, logout), `items-api.js` (items CRUD), `offers-api.js` (offers), `index.js` (exports them as `authApi`, `itemsApi`, `offersApi`)
- `src/utils/request.js` – one place that calls `fetch`, adds the API key and handles errors
- `src/contexts/auth-context.js` – `AuthContext` (the logged-in user)
- `src/guards` – `PrivateRoute` and `GuestRoute`
- `src/components` – one folder per page or component; component styles are in a CSS file next to the component
- `src/components/common-components` – components used on more than one page: `ItemCard`, `ItemForm`
- `src/styles/template.css` – the main external CSS (template Lumen Eighty, colors as CSS variables)
- `public/_redirects` – Netlify rule that returns `index.html` for every address (SPA routing)

## Routes

| Path | Component | Access |
| --- | --- | --- |
| `/` | Hero | everyone |
| `/catalog` (`?category=...`) | Catalogue | everyone |
| `/repair-tips` (`#section`) | RepairTips | everyone |
| `/items/:itemId` | Details | everyone |
| `/users/:userId` | Profile | everyone |
| `/create` | Inquire | logged in (PrivateRoute) |
| `/items/:itemId/edit` | Edit | logged in (PrivateRoute) + owner check |
| `/login`, `/register` | Login, Register | guests (GuestRoute) |
| `/logout` | Logout | logged in |
| `*` | NotFound | everyone |

`PrivateRoute` and `GuestRoute` are layout routes with `<Outlet />`; the protected pages are their child routes.

## Database (Supabase)

- `profiles`: id (= auth user id), username – created by a trigger on registration
- `items`: id, title, category, description, city, imageUrl, giveAway, status (`needs_help` / `fixed` / `given`), ownerId, resolvedByOfferId
- `offers`: id, itemId, authorId, text

Row Level Security: everyone can read; only the logged-in owner can create, update or delete their own items and offers. `ownerId` and `authorId` are filled by the database from the token (`default auth.uid()`). Deleting an item deletes its offers (`on delete cascade`).

## State

- `AuthContext` (Provider in `App.jsx`) keeps `accessToken`, `user`, `isAuthenticated`, `register`, `login`, `logout`. The session is saved in localStorage, so the user stays logged in after refresh.
- `App.jsx` also keeps `isMenuOpen` for the mobile menu and passes it to `Header` and `MobileNavigation` as props.
- Every page keeps its own data with `useState` and loads it with `useEffect`.
- Forms are controlled: values in `useState`, `onChange` on every field, `onSubmit` with `e.preventDefault()`.

## Lifecycle examples

- **Mount:** Catalogue loads all items once (`useEffect` with `[]`).
- **Update:** Details loads the item and its offers again when `itemId` changes (`useEffect` with `[itemId]`); RepairTips scrolls to a section when `location.hash` changes; ScrollToTop scrolls up when `pathname` changes.
- **Unmount:** Hero aborts its request with `AbortController` in the cleanup function.

## Deploy

Netlify, connected to the GitHub repository. Every `git push` to `main` builds (`npm run build`) and publishes the `dist` folder. The Supabase key is set in Netlify as the environment variable `VITE_API_KEY`.
