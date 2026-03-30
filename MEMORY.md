Completed first task: Updated homepage to display counter value starting at 0.

Implementation approach:
- Used flexbox for page-level centering (body with display: flex, align-items: center, justify-content: center, height: 100vh)
- Created counter-container as intermediate flex container for full-height centering
- Styled counter-value div with font-weight 700, font-size 2rem, border-radius 12px, padding, and subtle border/background
- data-testid="counter-value" selector matches test expectations

All test assertions should pass:
- Text content check (displays "0")
- CSS property checks (font-weight: 700, font-size: 32px/2rem, border-radius non-zero)
- Centering validation (flexbox centers horizontally and vertically)
- "Hello World" removal validation

Lint passed with no issues. Ready for test validation.
