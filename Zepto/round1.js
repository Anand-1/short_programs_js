function sum(a, b) {
    return a + b;
}
// Explain all concepts involved in the below code snippet

function infiniteCurry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs);
            }
        }
    }
}

const curriedSum = infiniteCurry(sum);

console.log(curriedSum(1)(2)); // Output: 3
console.log(curriedSum(1, 2)); // Output: 3
console.log(curriedSum(1)(2)(3)); // Output: 6 (if sum is modified to handle more than 2 arguments) 




// Implement a deep compare function to compare two objects for equality, including nested objects and arrays.

function deepCompare(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

// Example usage:
const objA = { name: "Alice", age: 30, hobbies: ["reading", "gaming"] };
const objB = { name: "Alice", age: 30, hobbies: ["reading", "gaming"] };
const objC = { name: "Alice", age: 30, hobbies: ["reading", "traveling"] };

console.log(deepCompare(objA, objB)); // Output: true
console.log(deepCompare(objA, objC)); // Output: false      

// Implement a polyfill of Promise.all and Promise.allSettled

Promise.allPolyfill = function (promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
};

Promise.allSettledPolyfill = function (promises) {
    return new Promise((resolve) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = { status: 'fulfilled', value };
                })
                .catch(error => {
                    results[index] = { status: 'rejected', reason: error };
                })
                .       finally(() => {
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
};

// Example usage:
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject('Error');
const promise3 = Promise.resolve(3);

Promise.allPolyfill([promise1, promise2, promise3])
    .then(results => console.log('All results:', results))
    .catch(error => console.log('Error:', error));

Promise.allSettledPolyfill([promise1, promise2, promise3])
    .then(results => console.log('All Settled results:', results)); 

// Closure -implement once() and memoize with cache limit
function once(fn) {
    let called = false;
    let result;
    return function (...args) {
        if (!called) {
            result = fn.apply(this, args);
            called = true;
        }
        return result;
    }
}

function memoize(fn, cacheLimit = 5) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        if (cache.size > cacheLimit) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
        return result;
    }
}

// Example usage:
const add = (a, b) => a + b;
const memoizedAdd = memoize(add, 3);

console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (from cache)
console.log(memoizedAdd(2, 3)); // Output: 5
console.log(memoizedAdd(3, 4)); // Output: 7
console.log(memoizedAdd(4, 5)); // Output: 9
console.log(memoizedAdd(1, 2)); // Output: 3 (recomputed, as it was evicted from cache) 

//Implement a deeply nested object with circular reference and write a function to safely stringify it without throwing an error.

const circularObj = {};
circularObj.self = circularObj;

function safeStringify(obj, seen = new WeakSet()) {
    if (obj === null || typeof obj !== 'object') {
        return JSON.stringify(obj);
    }
    if (seen.has(obj)) {
        return '"[Circular]"';
    }
    seen.add(obj);
    const result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = safeStringify(obj[key], seen);
        }
    }   seen.delete(obj);   
    return JSON.stringify(result);
}

// Example usage:
console.log(safeStringify(circularObj)); // Output: {"self":"[Circular]"}   

// __proto__ and prototype chain - implement a simple version of Object.create and instanceof operator
function myObjectCreate(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}

function myInstanceOf(obj, constructor) {
    let proto = Object.getPrototypeOf(obj);
    while (proto !== null) {
        if (proto === constructor.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

// Example usage:
const parent = { name: "Parent" };
const child = myObjectCreate(parent);
console.log(child.name); // Output: "Parent"
console.log(myInstanceOf(child, Object)); // Output: true
console.log(myInstanceOf(child, Array)); // Output: false       