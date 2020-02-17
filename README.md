# 🐝 endemiq

> *endemiq* is an open-source and non-profit project to promote local products. Eating local is good, eating organic is good, but eating local and organic is ideal to reduce our impact on the planet.

*endemiq* is based on ⚛️ [React](https://reactjs.org/) and [Next](https://nextjs.org/). It uses 💄 [Emotion](https://emotion.sh/) and [Tailwind](https://tailwindcss.com/) for styling, 📝 [Storybook](https://storybook.js.org/) for documentation and ✅ [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) for testing.

## Installation

First of all, you need to have the following tools installed globally on your environment:
- [📗 NodeJS **11**](https://nodejs.org/en/) - JavaScript runtime used to build and run the project
- [🐈 Yarn](https://yarnpkg.com/lang/en/) - Dependency manager built on top of the NPM registry

To install the project:

```bash
$ yarn
```

## Usage

Those are the main commands to use:

### 💻 Development

```bash
# Copy .env.sample file and complete it.
$ cp .env.sample .env

# Start dev mode
$ yarn dev

# Start production mode
$ yarn build
$ yarn start

# Clean project (remove .next directory)
$ yarn clean
```

### 🧱 Add a new component

All our best practices are summarised inside the `./components/Blank` component. If you need to create a new component, use the following command:

```bash
# Start generact
$ yarn new
```

### 💄 Styles

Our style system is based on [TailwindCSS](https://tailwindcss.com/) and [babel-plugin-tailwind](https://github.com/andrewdelprete/babel-plugin-tailwind/) to allow using it in CSS-in-JS. But because this Babel plugin uses a generated `tailwind.custom.css` to establish Tailwind's styles, we need to generate it, based on the [standard configuration](https://tailwindcss.com/docs/configuration) located in `src/styles/tailwind.config.js`. It's automatically done *before both `yarn dev` and `yarn build` commands, but to do it manually:

```bash
# Generate base (preflight) styles
$ yarn tailwind:base

# Generate utils styles
$ yarn tailwind:utils

# Generate all Tailwind styles
$ yarn tailwind:build
```

*⚠️ If the configuration changes, you'll need to rebuild or restart the dev server.


### ⚠️ Linters

Thanks to [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), our linters are automatically fired when a commit is attempted. To fire them manually:

```bash
# Lint Styles
$ yarn lint:css

# Lint JavaScript
$ yarn lint:js
```

### ✅ Tests

```bash
# Open Cypress app for live dev/testing
$ yarn cy:open

# Start unit tests
$ yarn test:unit

# Start E2E tests
$ yarn test:e2e
```

### 📝 Storybook

```bash
# Start Storybook server
$ yarn storybook:start

# Deploy Storybook on our gh-pages
$ yarn storybook:deploy
```

## Contribute

The project is using the **Gitflow workflow**. It defines a strict branching model designed around the project release.

You can learn more on the following resources :
- [Vincent Driessen's post](http://nvie.com/posts/a-successful-git-branching-model/)
- [Gitflow Workflow guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
