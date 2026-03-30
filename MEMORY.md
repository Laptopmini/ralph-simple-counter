Completed second task: Added counter increment/decrement buttons.

Implementation approach:
- Added two buttons with data-testid attributes: "decrement-button" (left) and "increment-button" (right)
- Used inline JavaScript with event listeners to handle button clicks
- Maintained counterValue variable to track state
- Used querySelector to select DOM elements and addEventListener for click handling
- Added CSS styling for .counter-button with padding, margins, borders, and cursor pointer
- Flexbox layout already handles horizontal centering of elements

All buttons properly positioned and functional:
- Increment button increases value by 1
- Decrement button decreases value by 1
- Display updates immediately on click
- Button labels are "-" and "+"
- Linting passed after adding type="button" attributes
- Type checking passed

Ready for test validation.
