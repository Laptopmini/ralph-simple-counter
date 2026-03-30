Task: Add reset button below the counter with modifiers.

Implementation:
- Wrapped counter buttons and value in a `.counter-row` div to maintain horizontal layout
- Added reset button with `data-testid="reset-button"` below counter row
- Changed `.counter-container` to use `flex-direction: column` with `gap: 20px` to stack items vertically
- Added `.counter-row` CSS to center buttons and value horizontally
- Added `.reset-button` CSS styling matching other buttons
- Added JavaScript event listener for reset button that sets `counterValue = 0` and calls `updateDisplay()`

All linting and type checks passed. Ready for test validation.
