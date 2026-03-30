# PRD: Create Over-Engineered Counter

## Objective

We want to update the homepage to present a basic counter input which allows the user to increment, decrement or reset the value, while giving a visual feedback about the value being positive or negative.

## Context

- The counter should be rendered on the homepage `src/index.html`.

## Constraints

- Only modify (or create) HTML & CSS source files found `src/` directory.
- All test files must pass on first execution.

## Tasks

- [x] Update the homepage. Remove the "Hello World" header already present. Make sure the page renders a number value starting with value `0`. This value should be centered in the page both vertically and horizontally, using a bold weight and `2rem` font size. The value should be rendered in a nice box with rounded corners. `[test: npx playwright test tests/e2e/shows-counter-value.spec.ts]`

- [x] Add counter buttons. On the homepage, add a `-` and `+` button to the left and right respectively of the existing `0` counter value. When `-` is clicked, the value rendered is decreased by 1. When `+` is clicked, the value rendered is increased by 1. `[test: npx playwright test tests/e2e/counter-modifiers.spec.ts]`

- [x] Add reset button. On the homepage, add a reset button below the counter and its modifiers. When the reset button is clicked, the counter value rendered is reset back to `0`. `[test: npx playwright test tests/e2e/counter-reset.spec.ts]`

- [x] Set the color of the value based on its sign. Declare the necessary color palette in `src/style.css`, make sure to use these values in the HTML definition. When the value of the counter is negative, make sure the number is colored in red. When the value of the counter is positive, make sure the number is green. If the value is `0`, make sure the number is black. `[test: npx jest tests/unit/homepage.test.ts]`
