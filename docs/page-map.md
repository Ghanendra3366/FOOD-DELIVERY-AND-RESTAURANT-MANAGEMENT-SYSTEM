# Page map

## Current inherited pages

| Page | Current path | Intended destination | Status |
| --- | --- | --- | --- |
| Home | `index.html` | `index.html` | Preserve and rebrand |
| About | `pages/about.html` | `pages/public/about.html` | Migrate |
| Contact/support | `pages/contact.html` | `pages/public/contact.html` | Migrate |
| Restaurants | `pages/restaurants.html` | `pages/public/restaurants.html` | Migrate |
| Restaurant detail | `pages/restaurant-detail.html` | `pages/public/restaurant-details.html` | Migrate |
| Food detail | `pages/food-detail.html` | `pages/public/food-details.html` | Migrate |
| Login/register | `pages/login.html`, `pages/register.html` | `pages/public/` | Replace with role-aware UI |
| Cart/checkout | `pages/cart.html`, `pages/order.html` | `pages/customer/` | Migrate |
| Order confirmation | `pages/order-success.html` | `pages/customer/order-details.html` | Replace |
| Profile | `pages/profile.html` | `pages/customer/profile.html` | Replace |
| Restaurant dashboard/menu | `pages/restaurant-dashboard.html`, `pages/restaurant-menu.html` | `pages/employee/` | Replace |
| Delivery | `pages/delivery.html` | `pages/delivery/dashboard.html` | Replace |
| Admin dashboard | `pages/admin-dashboard.html` | `pages/admin/dashboard.html` | Replace |

## Target page ownership

### Public

Home, restaurants, restaurant details, categories, food details, offers, about, contact, help, login, and register.

### Customer

Dashboard, restaurants, search, categories, food details, cart, checkout, orders, order details, tracking, wishlist, reviews, offers, addresses, profile, notifications, and support.

### Employee

Dashboard, restaurant, categories, food, orders, inventory, offers, reviews, customers, analytics, notifications, and settings.

### Delivery

Dashboard, available deliveries, assigned orders, pickup, delivery progress, completed, failed, earnings, history, profile, and notifications.

### Root admin

Dashboard, users, customers, employees, delivery partners, restaurants, categories, food, orders, payments, deliveries, offers, coupons, reviews, reports, analytics, notifications, support, settings, and audit logs.

## Key navigation flows

```text
Public home → Restaurants → Restaurant details → Food details → Cart → Checkout
Login → Role-specific dashboard
Customer orders → Order details → Track order
Employee dashboard → Food / Orders / Analytics
Delivery dashboard → Assigned order → Pickup → Delivery progress
Admin dashboard → Users / Restaurants / Orders / Reports
```

