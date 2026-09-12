# Future backend migration

## Intended stack

When the static UI has been approved, THE MARKETS can migrate in layers:

```text
HTML/CSS UI
  → React or Next.js components
  → REST API routes
  → Controllers
  → Services
  → Repositories
  → Prisma ORM
  → PostgreSQL
```

## Likely core entities

User, Role, CustomerProfile, EmployeeProfile, DeliveryPartner, Restaurant, RestaurantStaff, Category, FoodItem, FoodVariant, Cart, CartItem, Order, OrderItem, Payment, Address, Delivery, Review, Wishlist, Coupon, Offer, Notification, SupportTicket, and AuditLog.

## Migration order

1. Keep the design system and page information architecture intact.
2. Convert repeated static patterns to React components.
3. Create typed API contracts from the visible data fields.
4. Add authentication and server-side role authorization.
5. Add database schema and migrations with Prisma/PostgreSQL.
6. Connect customer ordering, employee management, delivery flow, and admin controls in small, tested increments.

## Important safeguards

- UI visibility is not authorization; backend permissions must be enforced per role.
- Payment collection, password handling, and personal data must never be simulated as production features in static HTML.
- Put business rules in services, not controllers or page components.
- Keep database access in repositories so the UI and services remain testable.

