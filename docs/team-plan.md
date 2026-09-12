# Team delivery plan

This plan creates clear ownership for four contributors while keeping main stable. Ownership means the member prepares the change on their own branch; it does not grant them permission to merge into main.

| Branch | Owner | Scope | Main deliverables |
| --- | --- | --- | --- |
| feature/lead | Team lead | Architecture, design system, public site, integration | CSS foundation, shared components, public pages, link review, merge decisions |
| feature/member-2 | Member 2 | Customer experience | Dashboard, cart, checkout, orders, tracking, profile and support views |
| feature/member-3 | Member 3 | Restaurant employee experience | Dashboard, restaurant profile, menu/food management, order board, inventory and analytics |
| feature/member-4 | Member 4 | Delivery and root admin experience | Delivery flow/mobile views plus root-admin dashboard and management pages |

## Dependency order

1. Lead finishes the CSS foundation before members style their role pages.
2. Public page patterns define shared header/footer/cards.
3. Role teams use the shared dashboard, table, badge, form, and empty-state patterns.
4. The lead checks paths and responsiveness, then merges one focused pull request at a time.

## Integration rules

- Do not rename or move shared CSS files without a discussion with the lead.
- Do not edit another member's role folder unless the team agrees first.
- Keep a pull request focused on one deliverable.
- Resolve conflicts in the feature branch, then request review again.
- Main is documentation-only until the lead explicitly decides that the first reviewed implementation is ready to merge.
