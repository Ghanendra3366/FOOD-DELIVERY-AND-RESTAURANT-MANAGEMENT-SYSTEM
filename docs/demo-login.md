# THE MARKETS — Frontend Demo Login

This project currently uses frontend-only demo authentication. It is not production security.

| Role | Email | Password | Dashboard |
|---|---|---|---|
| Customer | rahul@themarkets.test | demo123 | pages/customer/dashboard.html |
| Customer | priya@themarkets.test | demo123 | pages/customer/dashboard.html |
| Restaurant Staff | staff@themarkets.test | demo123 | pages/employee/dashboard.html |
| Delivery Partner | delivery@themarkets.test | demo123 | pages/delivery/dashboard.html |
| Admin | admin@themarkets.test | demo123 | pages/admin/dashboard.html |

## How it works

The login form stores a small demo user object in `sessionStorage`. The optional Remember Me setting stores the selected demo identity in `localStorage`.

Dashboard folders are role-protected by the frontend application layer in `js/app.js`.

The cart is stored separately per demo customer using a customer-specific localStorage key.

### Important limitation

There is no real authentication server, database, payment gateway, GPS service, or production security in this static frontend prototype. In the future, the frontend demo layer should be replaced with:

Frontend → API → Controller → Service → Repository → Prisma → PostgreSQL

Passwords must never be stored or validated this way in a production application.
