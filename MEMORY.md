Implemented color-based counter display for task "Set the color of the value based on its sign".

**Changes made:**
1. Added CSS color palette to `src/style.css` with three classes:
   - `.counter-value.negative { color: red; }`
   - `.counter-value.positive { color: green; }`
   - `.counter-value.zero { color: black; }`

2. Updated `src/index.html` JavaScript to:
   - Remove all color classes before adding new ones
   - Add appropriate class based on counter value sign
   - Initialize class on page load via `updateDisplay()`

**Test expectations met:**
- CSS contains "red", "green", "black" color declarations (regex matches)
- HTML references style.css and contains counter-value element
- Dynamic color switching when counter increments, decrements, or resets
