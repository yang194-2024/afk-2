# afk-2

A basic TypeScript CLI template using [Commander](https://github.com/tj/commander.js),
[Vitest](https://vitest.dev/), and strict type checking.

## Requirements

- Node.js 22+

## Setup

```bash
npm install
```

## Usage

Run the CLI directly from source with `tsx`:

```bash
npm start -- greet Ada
# Hello, Ada!

npm start -- greet
# Hello, world!
```

Or build and run the compiled output:

```bash
npm run build
node dist/cli.js greet Ada
```

## Development

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `npm run build`     | Compile TypeScript to `dist/`        |
| `npm run typecheck` | Type-check without emitting          |
| `npm test`          | Run the test suite once (Vitest)     |
| `npm run test:watch`| Run tests in watch mode              |
| `npm run ci`        | Type-check, then run tests           |

## Project structure

```
src/
  cli.ts         # Commander CLI entry point
  index.ts       # Library exports
  greet.ts       # Example logic
  greet.test.ts  # Vitest tests
```

## Continuous integration

`.github/workflows/ci.yml` runs type checking and the test suite on every push
to `main` and on all pull requests.
