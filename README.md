# THE MARKETS

THE MARKETS is a food delivery and restaurant management system being developed as a B.Tech CSE group project.

The current milestone is a **static HTML5 and CSS3 prototype**. It intentionally contains no JavaScript, backend, database, authentication, payment, or API integration. The page structure and naming are being prepared so that the project can later evolve into a full-stack application.

## Product roles

- Public visitor — discover food, restaurants, offers, and help resources.
- Customer — browse, order, track deliveries, and manage their account.
- Restaurant employee — manage a restaurant, menu, orders, and offers.
- Delivery partner — receive, update, and complete delivery assignments.
- Root admin — supervise users, restaurants, orders, payments, and system activity.

## Current repository status

The inherited prototype is kept in place during the architecture phase so no useful work is lost. It will be incrementally migrated from the current flat `pages/` layout into role-based page folders; see [docs/architecture.md](docs/architecture.md).

## Static-phase rules

- Use only HTML5 and CSS3.
- Use semantic HTML, reusable component classes, and CSS custom properties.
- Do not add JavaScript, frameworks, package managers, APIs, databases, or fake authentication.
- Keep all UI data fictional and suitable for later API replacement.

## Team workflow

`main` stays stable and documentation-only initially. Create feature branches from it:

```text
main
├── feature/lead
├── feature/member-2
├── feature/member-3
└── feature/member-4
```

Do not make implementation commits directly on `main`. Use Conventional Commits, for example `feat: add public restaurant listing` or `docs: add project architecture`.

Detailed branch, commit, and pull-request guidance is in [docs/contribution-guide.md](docs/contribution-guide.md).

## Documentation

- [Architecture](docs/architecture.md)
- [Page map](docs/page-map.md)
- [Roles](docs/roles.md)
- [UI guidelines](docs/ui-guidelines.md)
- [Future backend migration](docs/future-backend.md)
- [Contribution guide](docs/contribution-guide.md)

## Running the static prototype

Open `index.html` in a modern browser, or serve the project folder with any static web server. No installation step is required.



## Frontend demo login

See `docs/demo-login.md` for the available Customer, Staff, Delivery Partner, and Admin demo accounts. The current login/cart behavior is frontend-only and is intended for prototype/demo use.
