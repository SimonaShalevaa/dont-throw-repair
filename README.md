# React Project - Dont-throw-repair

**Live demo:** https://dont-throw-repair.netlify.app

**Test account:** reviewer@test.com / reviewer123 (or register a new one)

**Backend:** Supabase (free plan). If the data does not load, see the note in section 6.

## Setup

1. Clone the repository and open the folder:
   ```
   git clone https://github.com/SimonaShalevaa/dont-throw-repair.git
   cd dont-throw-repair
   ```
2. Install the packages:
   ```
   npm install
   ```
3. Copy `.env` as `.env.local` and put your Supabase publishable key in `VITE_API_KEY`.
4. Start the app:
   ```
   npm run dev
   ```
   The browser opens on http://localhost:5173.

Other commands: `npm run build` (makes the `dist` folder that Netlify publishes), `npm run preview` (shows the build).

**Technologies:** React 19, Vite, React Router, Supabase (database and authentication, used with `fetch`), deployed on Netlify, plain CSS (template Lumen Eighty by TemplateMo, changed to a beige and brown palette).

**Documentation:** see [ARCHITECTURE.md](ARCHITECTURE.md) for folders, routes, database and state.

# Functional Guide

## 1. Project Overview

**Application Name:** Dont-throw-repair

**Application Category / Topic:** Social Network / Community platform for repairing and reusing old things.

**Main Purpose:**
Many people throw away things that could be fixed with a little help. In Dont-throw-repair users publish their broken or old items with a photo and a description, and other users give advice on how to repair them. If the owner does not want to repair an item, they can give it away to someone who will fix it. This way fewer things end up in the trash and people help each other.

## 2. User Access & Permissions

### Guest (Not Authenticated)

- **Available pages / routes:** Home (`/`), Catalog (`/catalog`, also with a category filter, e.g. `/catalog?category=Furniture`), Repair Tips (`/repair-tips`), item details (`/items/:itemId`), user profile (`/users/:userId`), Login (`/login`), Register (`/register`).
- **Public data shown:** all items with photo, title, category, city and status; the offers under every item with the author's name; the items of every user on their profile; the community numbers on Repair Tips (items posted, fixed, given away, offers).
- A guest cannot create items or offers. If a guest opens `/create` or `/items/:itemId/edit`, they are sent to Login.

### Authenticated User

- **Main sections / pages:** everything a guest sees, plus "Share an item" (`/create`) and "My profile" (`/users/<own id>`). Login and Register are hidden and their routes redirect to Home.
- **Details pages:** on items of other users, the user can write an offer (advice or "I want to take it"). The author of an offer can delete it.
- **Create / Edit / Delete actions:**
  - Any logged-in user can create an item.
  - Only the owner of an item sees the Edit and Delete buttons and can open `/items/:itemId/edit`.
  - The owner can mark one offer as "This helped" (the item becomes "Fixed") or "Give to this person" (the item becomes "Given away").

## 3. Authentication & Session Handling

### Authentication Flow

- **When the app loads:** `App.jsx` reads the saved session from localStorage (in the first `useState`). If there is a session and it is not expired, the user is logged in.
- **How authentication status is checked:** `isAuthenticated` in `AuthContext` is `true` when there is a session. The header menus, the route guards, Details and the create/edit pages read it with the custom hook `useAuth()`.
- **On successful login or registration:** Supabase returns an access token, a refresh token, the expiry time and the user. The app saves them in state and in localStorage and navigates to Home. On registration the username is sent as user metadata, and a database trigger creates a row in the `profiles` table.
- **On logout:** the `/logout` route sends a logout request to Supabase, then clears the session from state and localStorage and redirects to Home. The session is cleared even if the request fails.

### Session Persistence

- **How is the session stored?** In React state in `App.jsx`, shared with all components through `AuthContext`, and saved in localStorage under the key `auth`.
- **Automatic login after refresh:** the first `useState` reads localStorage, so after F5 the user is still logged in. If `expiresAt` is in the past, the session is ignored and the user is a guest.

## 4. Routing Structure

### Route Guards Logic

- **`PrivateRoute`:** if the user is not logged in, redirects to `/login`; otherwise shows the child route with `<Outlet />`. Used for `/create` and `/items/:itemId/edit`.
- **`GuestRoute`:** if the user is logged in, redirects to `/`. Used for `/login` and `/register`.
- Both use `<Navigate replace />`, so the browser "Back" button does not go back to the blocked page.
- The Edit page also checks that the logged-in user is the owner of the item; if not, it redirects to the details page.
- The database protects the data too (Row Level Security): even a manual request cannot change or delete someone else's item or offer.

### Main Routes

11 routes:

| Route | Page | Access |
| --- | --- | --- |
| `/` | Home | everyone |
| `/catalog` | Catalog | everyone |
| `/repair-tips` | Repair Tips | everyone |
| `/items/:itemId` | Item details | everyone |
| `/users/:userId` | User profile | everyone |
| `/create` | Share an item | logged in |
| `/items/:itemId/edit` | Edit item | logged in, owner only |
| `/login` | Login | guests |
| `/register` | Register | guests |
| `/logout` | Logout | logged in |
| `*` | Not Found | everyone |

Pages with data from the server: Home, Catalog, Details, Profile, Edit, Repair Tips (community numbers).

### Nested & Parameterized Routes

- **Nested routing:** yes. `PrivateRoute` and `GuestRoute` are layout routes, and the protected pages are their child routes.
- **URL parameters:** `/items/:itemId`, `/items/:itemId/edit` and `/users/:userId` (read with `useParams`).
- **Query string and hash:** `/catalog?category=...` (read with `useSearchParams`) and `/repair-tips#section` (read with `useLocation`).

## 5. List → Details Flow

### Catalog / List Page

- **What data is displayed:** a card for every item with photo, title, category, city and status ("Needs help", "Free to take", "Fixed", "Given away"). Newest items are first.
- **How does the user interact with the list:** filter by category from the Catalog menu (Furniture, Electronics, Textiles & clothes, Free to take). The category is in the address (`?category=...`), so "Back" and "Forward" work and the link can be shared. "Show all items" removes the filter. Clicking a card opens its details.

### Details Page

- **How is navigation triggered:** with `<Link to={`/items/${id}`}>` on every card. After create, edit and delete the app uses `useNavigate`.
- **What data is received via route parameters:** `itemId`, read with `useParams()`. The page uses it to load the item with the owner's name, and the offers for this item.

## 6. Data Source & Backend

### Backend Type

- **Real backend: Supabase** (PostgreSQL database + authentication).
- Requests are made with `fetch` through one helper (`src/utils/request.js`) that adds the API key; functions for each table are in `src/api/` (`auth-api.js`, `items-api.js`, `offers-api.js`).
- Tables: `profiles`, `items`, `offers`. Row Level Security: everyone can read; only the logged-in owner can create, change or delete their own items and offers.
- **Hosting and availability:** the frontend is on Netlify and the database is on Supabase (cloud). Both are always online – there is no separate server that needs to "wake up". All data is stored in the Supabase database, so it stays the same between visits.
- **Note about the free plan:** Supabase may pause a free project after about a week without any activity. If the items do not load, the project is probably paused (the data is not lost). Please contact me and I will restore it.

## 7. Data Operations (CRUD)

### Create (POST)

- A logged-in user opens "Share an item", fills in the form (title, category, city, image URL, description, "Repair it myself" or "Give it away") and clicks "Share item". The app sends a POST to `items` and opens the new item.
- Offers are created from the form under an item (POST to `offers`); the new offer appears in the list at once.

### Read (GET)

- Home – the latest 3 items. Catalog – all items (with filter). Details – one item with the owner's name and its offers. Profile – the user and their items. Repair Tips – the counts of items and offers.

### Update (PATCH)

- **How does the author edit:** the owner clicks Edit on the details page. The same form as Create opens, already filled in. "Save changes" sends a PATCH with the changed fields.
- **How is the UI updated:** the app navigates back to the details page, which loads the new data. When the owner marks an offer as helpful, the status is changed with PATCH and the page shows "Fixed ✓" / "Given away ✓" at once (state is updated from the response).

### Delete

- **How does the author delete:** the owner clicks Delete and confirms in a dialog. The app sends a DELETE.
- **How is the UI updated:** the app navigates to the Catalog, where the item is no longer shown. Its offers are deleted too (cascade in the database). An author who deletes an offer sees it disappear from the list at once (removed from state).

## 8. Forms & Validation

### Forms Used

- Login, Register, Create item and Edit item (one shared `ItemForm` component), Offer form.
- All forms are controlled (`value` + `onChange`, values in `useState`) and use `onSubmit` with `e.preventDefault()`.

### Validation Rules

- **Title:** 3 to 60 characters.
- **Image URL:** must start with `http` (so `http://` and `https://`).
- **Description:** at least 10 characters.
- **City:** required.
- **Username:** 3 to 20 characters.
- **Email (Login and Register):** must be a valid email address.
- **Password – multiple rules (Register):** at least 6 characters, and "Repeat password" must be the same.
- **Offer:** 3 to 500 characters.

Errors are shown in red under each field. While a request is running, the submit button is disabled and shows "Saving..." / "Sending...". Server errors in the item form are shown above the form.

## 9. React-Specific Techniques

### Hooks & Component Lifecycle

- **`useState`** – form values, loaded data, loading and error states, open menus.
- **`useEffect`** – loading data from Supabase, scrolling to a section, scrolling to the top on page change.
- **`useContext`** – reading the logged-in user from `AuthContext`, inside the custom hook below.
- **Custom hook `useAuth`** (`src/hooks/useAuth.js`) – returns `useContext(AuthContext)`, so components get the auth data with one short call: `const { user } = useAuth();`.
- **React Router hooks:** `useParams`, `useNavigate`, `useSearchParams`, `useLocation`.
- **Mount:** Catalog loads all items once (`useEffect` with `[]`).
- **Update:** Details loads the item and its offers again when `itemId` in the URL changes (`useEffect` with `[itemId]`); Repair Tips scrolls to a new section when the `#hash` changes.
- **Unmount:** Home cancels its request with `AbortController` in the cleanup function, if the user leaves the page before the data comes.

### Context API

- **`AuthContext`** shares `user`, `accessToken`, `isAuthenticated`, `register`, `login` and `logout`. The Provider is in `App.jsx`.
- **Used by** (through `useAuth()`): Header, MobileNavigation, PrivateRoute, GuestRoute, Logout, Inquire (create), Edit, Details.

### Component Styling

- One main external CSS file, `src/styles/template.css` (from the Lumen Eighty template), imported once in `main.jsx`. The colors are CSS variables, so the whole site uses one palette.
- Styles for a single component are in a CSS file next to it: `repair-tips.css`, `catalogue.css`, `details.css`, `header.css`, `mobile-navigation.css`.
- The site works on mobile: a menu button opens the mobile navigation.

## 10. Typical User Flow

1. A guest opens Home, sees the latest items and opens the Catalog, filtered by "Electronics".
2. The guest registers and is logged in automatically.
3. The user clicks "+ Share an item", fills in the form for a broken lamp and publishes it.
4. Another user opens the lamp and writes an offer: "Change the switch, it costs about 5 euro."
5. The owner clicks "This helped", and the item is shown as "Fixed".
6. The owner edits or deletes the item and logs out.

## 11. Error & Edge Case Handling

- **Authentication errors:** wrong email or password shows the message from Supabase ("Invalid login credentials"). Invalid form values are shown under the fields before any request. Private pages redirect guests to Login; Edit redirects users who are not the owner.
- **Network or data errors:** lists (Home, Catalog, Profile) show the error message on the page; the item form shows server errors above the form; the app does not crash.
- **Empty or missing data states:** "Loading..." while waiting; "No items yet" for an empty list or category; "No offers yet" under an item without offers; "Item not found" / "User not found" for a wrong id; the Not Found page for a wrong address.
