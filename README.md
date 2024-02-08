# Mini Web Games

> Monorepo of all React TypeScript games

## Introduction

In a search for a single-page application (SPA) that routes to different games within this larger project, Nx was decided to be use, because it is a puplar extensbile dev tools for monorepos.

### 1. Setting up Nx Workspace

> If haven't already installed `Nx` globally, then run `npm install -g nx`

Create Nx Workspace

```bash
npx create-nx-workspace@latest mini-web-games
```

During this set up, these are options that is selected

### Vite

- Fast Development Experience: Vite provides an extremely fast development experience by leveraging native ES modules.
- Hot Module Replacement (HMR): Vite offers very efficient HMR.
- Less Configuration: Generally requires less configuration than Webpack.
- Plugin Ecosystem: Has a growing plugin ecosystem.
- Use Case: Great choice for projects where development speed and simplicity are priorities.

**Reason to choose Vite:**

- Speed is a Priority: It is known for its speed in development builds. Vite offers fast build times and an efficient development experience which can be beneficial for your gaming project.

### Cypress

**Reason to choose Cypress:**

Cypress is known for its ease of use and interactive test runner, making it a great choice for simpler applications or teams new to testing

**Pros**:

- Rich, Interactive Test Runner: Offers a highly interactive and user-friendly test runner that makes debugging easier.
- Real-Time Reloads: Automatically reloads tests upon code changes.
- Native Access: Provides native access to the window, document, and DOM.

**Cons**:

- Browser Support: Historically limited to Chrome, Firefox, and Edge, but no support for Safari (as of my last update in April 2023).
- Multi-Tab Testing: Does not support testing scenarios that involve multiple tabs or multiple browsers at the same time.
- Mobile Testing: Limited support for mobile browser testing.

## Package

Temporary take out of `nx.json`

```json
"namedInputs": {
  "default": ["{projectRoot}/**/*", "sharedGlobals"],
  "production": [
    "default",
    "!{projectRoot}/**/?(*.)+(spec|test).[jt]s?(x)?(.snap)",
    "!{projectRoot}/tsconfig.spec.json",
    "!{projectRoot}/.eslintrc.json",
    "!{projectRoot}/eslint.config.js",
    "!{projectRoot}/cypress/**/*",
    "!{projectRoot}/**/*.cy.[jt]s?(x)",
    "!{projectRoot}/cypress.config.[jt]s"
  ],
  "sharedGlobals": []
},
```
