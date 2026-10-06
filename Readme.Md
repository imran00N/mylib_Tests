# Unit Testing

A JavaScript arithmetic library with a shared-shopping demonstration
and 14 unit tests using Mocha and Chai.

## Requirements

- Node.js 24
- npm, included with Node.js

## Installation

Open a terminal in the project folder and run:

```bash
npm ci
```

## Run the demonstration

```bash
npm start
```

The program calculates a shopping bill using multiplication, addition,
subtraction and division. The final amount is EUR 5.00 per person.

## Run the tests separately

```bash
npm test
```

Expected result: 14 passing tests.

The tests import the library directly and do not execute main.js.

## Project files

- mylib.js: the four arithmetic functions.
- main.js: the shopping-bill demonstration.
- tests/mylib.test.js: unit tests and before/after hooks.
- package.json: project settings, dependencies and run commands.
- package-lock.json: dependency versions for reproducible installation.
- .gitignore: excludes dependencies and local files from Git.

## What is tested?

- Normal results for all four operations.
- Negative numbers and zero.
- Decimal addition using a small rounding tolerance.
- Errors when dividing by 0 or -0, including 0 divided by 0.

The before hook runs once before the tests.
The after hook runs once after the tests.

## Limitations

The library expects finite JavaScript numbers and does not validate
input types. Decimal arithmetic may produce small rounding differences.
The shopping example demonstrates arithmetic; it is not intended for
financial accounting.

## References

- Mocha: https://mochajs.org/features/hooks/
- Chai: https://www.chaijs.com/api/bdd/
- Node.js: https://nodejs.org/api/esm.html