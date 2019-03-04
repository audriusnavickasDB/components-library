# Demo component library

## First time setup
1. Use only `npm` for running scripts, in order to avoid some unexpected conflicts with different `.lock` files;
2. Run `npm i` command to install project dependencies;
3. Run `npm run start` to start Storybook and review components.

## Publishing
**Note:** before publishing packages, you must have npm account and setup organization in order to publish scoped packages.

1. Build components by running `npm run build:components` command;
2. Publish components by running `npm run publish:components` command.

## Development
- Create new component under `src` directory;
- Every component must have `src` directory with all of the source code. Include `index.js` file in order to avoid specific file path import declaration;
- Each component must include `package.json` file, and should include `.npmignore`, `CHANGELOG.md`, `LICENCE`, `README.md` files;
- When using imports from other components use their `package.json` name and include that name and specific path to aliases under <Project>/configs/aliases.config.js;
- In order to check if published component works, add dependency to root `package.json` file, run `npm i` command and comment specific alias. Run storybook and test it.

