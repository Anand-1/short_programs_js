/*
 * Closures in JavaScript: Advanced Examples
 *
 * Closures are functions that have access to variables from their scope chain,
 * even after the outer function has finished executing.
 *
 * This file demonstrates practical uses of closures with increasing complexity.
 */

// Example 1: Button Props Factory
// Creates a function that generates button properties with a fixed borderRadius
console.log("=== Example 1: Button Props Factory ===");

const buttonProps = (borderRadius) => {
  // Inner function has access to borderRadius from outer scope
  const createVariants = (variant, color) => {
    const newProps = {
      borderRadius,
      variant,
      color,
    };
    return newProps;
  };
  return createVariants;
};

// Usage
const primaryButtonFactory = buttonProps("8px");
console.log("Primary button factory function:", primaryButtonFactory);

const primaryButtonProps = primaryButtonFactory("primary", "red");
console.log("Primary button props:", primaryButtonProps);

// Example 2: Fetch Utility with Closures
// Demonstrates closures for API configuration and request creation
console.log("\n=== Example 2: Fetch Utility with Closures ===");

const fetchUtility = (baseUrl, headers = {}) => {
  // Inner function captures baseUrl and headers
  const createFetchInstances = (route, requestMethod, data = null) => {
    const request = new Request(`${baseUrl}${route}`, {
      method: requestMethod,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: data,
    });
    return [fetch, request];
  };
  return createFetchInstances;
};

// Usage
const apiFetcher = fetchUtility("https://jsonplaceholder.typicode.com");
console.log("API fetcher function:", apiFetcher);

// GET request
const [getFunc, getReq] = apiFetcher("/todos/1", "GET");
console.log("GET request:", getReq);

getFunc(getReq)
  .then((res) => res.json())
  .then((data) => {
    console.log("GET response:", data);
  })
  .catch((err) => console.error("GET error:", err));

// POST request
const [postFunc, postReq] = apiFetcher(
  "/posts",
  "POST",
  JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  })
);
console.log("POST request:", postReq);

postFunc(postReq)
  .then((resp) => resp.json())
  .then((data) => console.log("POST response:", data))
  .catch((err) => console.error("POST error:", err));

// Example 3: Private Counter (Encapsulation)
// Closures can create private variables
console.log("\n=== Example 3: Private Counter ===");

const createCounter = () => {
  let count = 0; // Private variable, accessible only through closure

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
    reset: () => { count = 0; return count; }
  };
};

const counter1 = createCounter();
const counter2 = createCounter();

console.log("Counter1 increment:", counter1.increment()); // 1
console.log("Counter1 increment:", counter1.increment()); // 2
console.log("Counter2 increment:", counter2.increment()); // 1 (separate instance)
console.log("Counter1 count:", counter1.getCount()); // 2
console.log("Counter1 reset:", counter1.reset()); // 0

// Example 4: Event Handler with Closures
// Common in UI libraries for maintaining state
console.log("\n=== Example 4: Event Handler with Closures ===");

const createEventHandler = (elementId, initialValue) => {
  let value = initialValue;

  const updateValue = (newValue) => {
    value = newValue;
    console.log(`Element ${elementId} updated to: ${value}`);
  };

  const getValue = () => value;

  return { updateValue, getValue };
};

// Simulate event handlers for different elements
const handler1 = createEventHandler("button1", "initial");
const handler2 = createEventHandler("button2", "default");

handler1.updateValue("clicked");
handler2.updateValue("pressed");
console.log("Handler1 value:", handler1.getValue());

// Example 5: Currying with Closures
// Partial application using closures
console.log("\n=== Example 5: Currying with Closures ===");

const multiply = (a) => (b) => (c) => a * b * c;

const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);
const result = multiplyBy2And3(4);

console.log("Curried multiplication result (2 * 3 * 4):", result);

// Example 6: setTimeout with Closures (Common Pitfall)
// Demonstrates how closures capture variables by reference
console.log("\n=== Example 6: setTimeout with Closures ===");

const createDelayedLogger = (message, delay) => {
  setTimeout(() => {
    console.log(`Delayed message: ${message}`);
  }, delay);
};

createDelayedLogger("First", 100);
createDelayedLogger("Second", 200);
createDelayedLogger("Third", 50);

// Example 7: Module Pattern
// Using closures for encapsulation
console.log("\n=== Example 7: Module Pattern ===");

const calculatorModule = (() => {
  let memory = 0; // Private

  const add = (x) => memory += x;
  const subtract = (x) => memory -= x;
  const getMemory = () => memory;
  const clearMemory = () => { memory = 0; };

  return {
    add,
    subtract,
    getMemory,
    clearMemory
  };
})();

calculatorModule.add(10);
calculatorModule.subtract(3);
console.log("Calculator memory:", calculatorModule.getMemory()); // 7
calculatorModule.clearMemory();
console.log("After clear:", calculatorModule.getMemory()); // 0

// Example 8: Memoization with Closures
// Caching results using closure scope
console.log("\n=== Example 8: Memoization with Closures ===");

const memoize = (fn) => {
  const cache = {}; // Private cache

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Returning cached result for:", args);
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const expensiveFunction = (n) => {
  console.log(`Computing expensive function for ${n}`);
  return n * n;
};

const memoizedExpensive = memoize(expensiveFunction);

console.log("First call:", memoizedExpensive(5)); // Computes
console.log("Second call:", memoizedExpensive(5)); // Cached
console.log("Third call:", memoizedExpensive(3)); // Computes
