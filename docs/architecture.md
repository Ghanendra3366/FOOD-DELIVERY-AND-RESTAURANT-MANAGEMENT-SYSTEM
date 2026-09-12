# Architecture

## Current phase: static UI

THE MARKETS currently contains presentation-only HTML and CSS. Static pages use realistic placeholder data, ordinary links, forms, tables, cards, and visible status states. No page makes a network request or stores data.

The inherited prototype remains under the existing root `index.html`, `pages/`, and `css/style.css` paths until its replacement is ready. This prevents the active prototype from breaking during the migration.

## Target static structure

```text
THE-MARKETS/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   ├── restaurants/
│   │   ├── food/
│   │   ├── categories/
│   │   ├── offers/
│   │   ├── users/
│   │   └── placeholders/
│   └── icons/
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── base.css
│   ├── typography.css
│   ├── layout.css
│   ├── components.css
│   ├── forms.css
│   ├── tables.css
│   ├── utilities.css
│   ├── responsive.css
│   └── main.css
├── pages/
│   ├── public/
│   ├── customer/
│   ├── employee/
│   ├── delivery/
│   └── admin/
└── docs/
```

`main.css` will be the single stylesheet referenced by pages and will import the modular CSS files in a predictable order. The existing `css/style.css` is legacy source and will be retired only after all migrated pages have been verified.

## UI component boundaries

Each page should be assembled from reusable visual patterns rather than page-specific markup:

- Public: site header, footer, search box, category card, restaurant card, food card, offer card.
- Customer: dashboard shell, sidebar item, order card, cart item, price summary, address card, tracking timeline.
- Employee and admin: dashboard shell, statistic card, filter bar, data table, status badge, empty state.
- Delivery: mobile-safe task card, route/status timeline, earnings card, delivery history row.

Classes follow kebab-case, with component children such as `.restaurant-card__image` and `.restaurant-card__content`.

## Future full-stack boundary

The UI will later be replaced or progressively rebuilt as reusable React/Next.js components. Static UI must not contain database identifiers, business rules, permissions checks, or authentication behavior. It should only present fields that map cleanly to future entities and API responses.

```text
UI → React/Next.js → API → Controller → Service → Repository → Prisma → PostgreSQL
```

See [future-backend.md](future-backend.md) for the migration plan.

