# UI guidelines

## Visual direction

THE MARKETS should feel contemporary, trustworthy, food-focused, and calm. Use a warm primary color paired with clear neutral surfaces and accessible text contrast. Avoid decorative overload, inconsistent corner radii, and dense dashboards.

## CSS rules

- Define repeatable colors, spacing, radii, shadows, typography, and breakpoints as custom properties in `variables.css`.
- Keep reset, base, layout, components, forms, tables, utilities, and responsive rules in separate files.
- Do not use inline `style` attributes.
- Use responsive Grid and Flexbox layouts; tables must scroll or adapt on small screens.
- Provide an obvious `:focus-visible` style for interactive elements.

## HTML rules

- Use `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` for structure.
- Associate every form control with a `label`.
- Use links for navigation and buttons for actions.
- Keep heading order logical; a page has one main `h1`.
- Give content images meaningful `alt` text. Decorative visuals use empty alt text.

## Data placeholders

Use fictional, realistic data and stable logical fields. A food card should consistently expose name, image, description, price, rating, category, availability, and restaurant. An order row should expose order ID, customer, restaurant, items, amount, payment status, order status, and date/time.

