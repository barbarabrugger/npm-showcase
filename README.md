# Readme

Showcase for QFS relevant topics around Node.js/npm/JavaScript/TypeScript...

## Initialisation

```console
npm init && git init
```

## Dependencies

### ESLint

Linter for JS/TS. There are multiple ways to configure ESLint (see [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/))

[**ESLint**](https://eslint.org) Website

### flaschenpost

Logger for node applications.
Powered by [the native web.](https://thenativeweb.io)

**flaschenpost** on [GitHub](https://github.com/thenativeweb/flaschenpost)

### roboter

npm plugin to streamline software development by automating tasks and enforcing conventions.
Powered by [the native web.](https://thenativeweb.io)

**roboter** on [GitHub](https://github.com/thenativeweb/roboter#readme)

### Nodemon

Nodemon enables on-the-fly transpiling from TypeScript to JavaScript with browser reloading included.

```console
npm i nodemon --save-dev
```

## Config files

### .eslintrc.json

Config file for ESLint.

### .gitignore

Definition:
> The .gitignore file is a text file that tells Git which files or folders to ignore in a project. *(definition from [FreeCodeCamp](https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/))*

**[Reference](https://git-scm.com/docs/gitignore)**

To simplify the generation of .gitignore files we use the vs code extensions [gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore).

### nodemon.json

Config file for Nodemon.

### package.json

Definition:
> The package.json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package. *(definition from [hey\(node\)](https://heynode.com/tutorial/what-packagejson/#:~:text=Recap-,The%20package.,entry%20point%20to%20our%20package.))*

**[Reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)**

### tsconfig.json

Definition:
> The tsconfig. json file specifies the root files and the compiler options required to compile the project. JavaScript projects can use a jsconfig. json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default. *(definition from [TypeScript Official Page](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#:~:text=The%20tsconfig.,compiler%20flags%20enabled%20by%20default.))*

**[Reference](https://www.typescriptlang.org/tsconfig)**

## Folders

### node_modules

> You can think of the node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node. js is trained to look for them there when you import them (without a specific path). *(definition from [StackOverflow](https://stackoverflow.com/questions/63294260/what-is-the-purpose-of-the-node-modules-folder#:~:text=You%20can%20think%20of%20the,(without%20a%20specific%20path).))*
