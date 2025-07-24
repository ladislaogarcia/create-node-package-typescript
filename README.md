# node-package-template-typescript
Template for develop a NodeJS package with Typescript.

## Requirements
* NodeJS: https://nodejs.org/en/
* npm: https://www.npmjs.com/
* Npmjs access token.
* Github secret defined.

### Npmjs & Github Authorization
It must be created a new Access Token into your Account section in [npmjs.com](https://www.npmjs.com/): 

[Manage your authentication tokens for your npm account](https://docs.npmjs.com/cli/v7/commands/npm-token)

Store it in Github browsing to the repository and click on 'Settings > Secrets & Variables > Actions > Repository Secrets ' and click on 'New repository secret' and follow the instructions.

[Using secrets in GitHub Actions](https://docs.github.com/es/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/using-secrets-in-github-actions)

### Token Name
*The token must be called* '**npm_token**'

Whether the token is not called this way or us not defined, the workflow will fail and will break abd finish the Github Actionwith an error state.

## Tools
### Linter: ESLint ( typescript-eslint )
#### Manage lint rules for Typescript, Javascript, JSON and Github Markdown
* eslint: https://www.npmjs.com/package/eslint
#### Typescript support
* typescript-eslint: https://www.npmjs.com/package/typescript-eslint
#### Javascript support
* @eslint/js: https://www.npmjs.com/package/@eslint/js
#### JSON support
* @eslint/json: https://www.npmjs.com/package/@eslint/json
#### Markdown support (for Github Markdown)
* @eslint/markdown: https://www.npmjs.com/package/@eslint/markdown
### Formatter: Prettier ( eslint-plugin-prettier )
#### Manage format rules
* prettier: https://prettier.io/
#### Deactivate conflictive and not compatible rules between ESLint and Prettier
* eslint-config-prettier: https://www.npmjs.com/package/eslint-config-prettier
#### Running Prettier with ESLint
* eslint-plugin-prettier: https://www.npmjs.com/package/eslint-plugin-prettier
### Unit Test: Jest
#### Creating and Running the unit tests
* jest: https://jestjs.io/
### Bundler: Tsup
#### Bundle Typescript easily
* tsup: https://tsup.egoist.dev/

## Install
```bash
npm i [package] [-D] [-S]
```

### How to use
```bash
import { [member] } from [package];

...more code here
```
