/*
Debouncing is a technique to delay the execution of a function until a certain amount
of time has passed since the last time it was called. This is useful for scenarios
where we want to avoid unnecessary or repeated function calls that might be expensive
or time-consuming, such as API calls on user input.
*/

// Debounce Example
// The action is performed only after the user pauses typing for the specified delay.

let count = 0;

/**
 * Function to be debounced - logs the input data and increments a counter.
 * @param {string} data - The input value from the event.
 */
const callDebounce = (data) => {
  console.log(data);
  console.log("Key up event count: " + count++);
};

/**
 * Higher-order function that creates a debounced version of the provided function.
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} - The debounced function.
 */
function debounce(func, delay) {
  // Timer variable scoped to the closure
  let timer;

  return function (...args) {
    // Clear the previous timer if a new call is made
    clearTimeout(timer);
    // Set a new timer to execute the function after the delay
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Create a debounced version of callDebounce with a 1000ms delay
const debouncedResult = debounce(callDebounce, 1000);

// Assuming there's an HTML input element with id "debounce"
const inputElement = document.getElementById("debounce");
if (inputElement) {
  inputElement.addEventListener("keyup", (e) => debouncedResult(e.target.value));
} else {
  console.warn("Element with id 'debounce' not found.");
} 
