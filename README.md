# React Project - Dont-throw-repair

## 1. Project Overview

**Application Name:** Dont-throw-repair

**Application Category / Topic:** Social Network / Community platform for repairing and reusing old things.

**Main Purpose:**
Many people throw away things that could be fixed with a little help. In Dont-throw-repair users publish their broken or old items with a photo and a description, and other users give advice on how to repair them. If the owner does not want to repair an item, they can give it away to someone who will fix it. This way fewer things end up in the trash and people help each other.

## 2. User Access & Permissions

### Guest (Not Authenticated)

Describe what an unauthenticated user can access:

- Available pages / routes:
- Public data shown:

### Authenticated User

Describe what a logged-in user can access:

- Main sections / pages:
- Details pages:
- Create / Edit / Delete actions:

## 3. Authentication & Session Handling

### Authentication Flow

Explain step-by-step:

- What happens when the app loads
- How authentication status is checked
- What happens on successful login or registration
- What happens on logout

### Session Persistence

- How is the user session stored? (e.g. Context, localStorage, cookies)
- How is automatic login handled after a page refresh?

## 4. Routing Structure

### Route Guards Logic

- How is routing split between guest-only and private routes?

### Main Routes

Describe the main route structure:

- Number and type of top-level pages

### Nested & Parameterized Routes

- Is there nested routing (e.g. a layout route with child routes)?
- Which routes use URL parameters (e.g. /catalog/:id)?

## 5. List → Details Flow

### Catalog / List Page

- What data is displayed?
- How does the user interact with the list (filter / sort / search)?

### Details Page

- How is navigation triggered (Link / useNavigate)?
- What data is received via route parameters?

## 6. Data Source & Backend

### Backend Type

- Real backend (Firebase, or custom Node.js/Express + MongoDB)

## 7. Data Operations (CRUD)

All four operations — Create, Read, Update, and Delete — are required for the collection described in the Technical Requirements (see CRUD Operations, 10 pts). Describe how each one is implemented:

### Create (POST)

- How does the user create new data?

### Read (GET)

- Where is data fetched and displayed?

### Update (PUT/PATCH)

- How does the author edit an existing record?
- How is the UI updated after the change?

### Delete

- How does the author delete an existing record?
- How is the UI updated after the change?

## 8. Forms & Validation

### Forms Used

List all forms in the application:

### Validation Rules

Describe at least three validated fields:

- Field name and rules:
- Field name and rules:
- Field name with multiple validation rules:

## 9. React-Specific Techniques

### Hooks & Component Lifecycle

- Which hooks are used, and where? (useState, useEffect, custom hooks…)
- Give one example of mount / update / unmount behavior in your app.

### Context API

- What state/data is shared through Context, and which components consume it?

### Component Styling

- How are components styled? (CSS files, CSS Modules, styling library)

## 10. Typical User Flow

Describe a normal user journey through the app:

1.
2.
3.
4.

## 11. Error & Edge Case Handling

Describe how the app handles:

- Authentication errors
- Network or data errors
- Empty or missing data states
