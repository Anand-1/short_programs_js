# Short Programs JS

> A practical JavaScript playground for interview prep, core concepts, data structures, algorithms, polyfills, promises, design patterns, and everyday problem solving.

This repository is a collection of short, focused JavaScript programs. Each file is meant to be easy to open, read, run, tweak, and revisit while practicing for frontend, JavaScript, and problem-solving interviews.

## What Is Inside

| Area | Content |
| --- | --- |
| Core JavaScript | Scope, closures, callbacks, prototypes, `this`, arrays, strings, errors, generators |
| ES6 Features | Arrow functions, spread/rest, `Map`, `Set`, common array methods |
| Promises | Promise basics, tricky promise behavior, async/await, task scheduling, parallel limits |
| Polyfills | Custom implementations for `map`, `filter`, `reduce`, `forEach`, `call`, `apply`, `bind`, debounce, throttle, memoize, promises |
| Data Structures | Queue, priority queue, linked list, graph, bracket balancing, anagrams, checksum zero |
| Algorithms | Sorting, recursion, binary search, subsets, palindrome checks, array rotation, missing number, longest substring |
| Interview Practice | Common coding questions, string and array problems, Sudoku validation, object filtering, currying |
| Design Patterns | Singleton, factory, prototype, observer, and exercise files for creational, structural, and behavioral patterns |
| SOLID | SRP, OCP, LSP, ISP, DIP examples |
| OOP and Classes | Class usage, public/private patterns, polymorphism |
| Tricky JS | Edge cases and behavior-focused examples |

## Repository Map

```text
short_programs_js/
|-- CoreConcepts/        # JavaScript fundamentals and behavior
|-- Polyfills/           # Hand-written JS polyfills
|-- Promise/             # Promise, async, and scheduling examples
|-- DS/                  # Data structures and related problems
|-- Interview/           # Interview-style coding questions
|-- Recursion/           # Recursive problem solving
|-- Sorting/             # Sorting algorithms
|-- DesignPatterns/      # Pattern examples and course exercise files
|-- SOLID/               # SOLID principle examples
|-- ES6Features/         # Modern JavaScript feature examples
|-- Classes/             # Class and OOP examples
|-- StringManipulation/  # String-focused programs
|-- TimeOut/             # Debounce and throttle examples
`-- HackerRank/          # Practice problems inspired by coding platforms
```

## How To Run

Most files are standalone JavaScript programs and can be run directly with Node.js.

```bash
node Sorting/bubblesort.js
node Polyfills/map.js
node Promise/asyncawait.js
```

Some examples are intended mainly for reading, editing, and experimenting. Open the file, change the inputs near the bottom, then run it again.

## Suggested Practice Path

1. Start with `CoreConcepts/` to refresh JavaScript behavior.
2. Move into `ES6Features/` and `Classes/` for modern syntax and OOP.
3. Practice `Polyfills/` to understand built-in methods deeply.
4. Work through `DS/`, `Sorting/`, and `Recursion/` for problem-solving basics.
5. Use `Interview/`, `HackerRank/`, and `Tricky/` for interview drills.
6. Explore `SOLID/` and `DesignPatterns/` for design and architecture concepts.

## Highlights

- Small files with focused examples
- Useful for quick revision before interviews
- Covers both JavaScript fundamentals and algorithm practice
- Includes custom implementations of common built-in methods
- Mixes conceptual examples with hands-on coding problems

## Requirements

- Node.js installed locally
- A code editor
- Curiosity and a little patience

Check your Node.js version:

```bash
node --version
```

## Notes

This repo is intentionally practice-oriented. Some files may contain multiple experiments, rough notes, or alternate approaches. The goal is learning by reading, running, breaking, and rebuilding.

## License

This project includes a `LICENSE` file. Please review it before reusing the code.
