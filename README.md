# Readme

Showcase for QFS relevant topics around Node.js/npm/JavaScript/TypeScript...

## Getting started

```console
npm i
npm run start
```

## Initialisation

```console
npm init && git init
```

## Dependencies

### buntstift

Makes the CLI colorful.
Powered by [the native web.](https://thenativeweb.io)

**buntstift** on [GitHub](https://github.com/thenativeweb/buntstift)

```console
npm i buntstift
```

### ESLint

Linter for JS/TS. There are multiple ways to configure ESLint (see [Configuring ESLint](https://eslint.org/docs/user-guide/configuring/))

[**ESLint**](https://eslint.org) Website

```console
npm i -g eslint
```

### flaschenpost

Logger for node applications.
Powered by [the native web.](https://thenativeweb.io)

**flaschenpost** on [GitHub](https://github.com/thenativeweb/flaschenpost)

```console
npm i flaschenpost
```

### roboter

npm plugin to streamline software development by automating tasks and enforcing conventions.
Powered by [the native web.](https://thenativeweb.io)

**roboter** on [GitHub](https://github.com/thenativeweb/roboter#readme)

```console
npm i roboter
```

### Nodemon

Nodemon enables on-the-fly transpiling from TypeScript to JavaScript with browser reloading included.

```console
npm i nodemon --save-dev
```

## (Config) Files

### .eslintrc.json

Config file for ESLint.

### .gitignore

Definition:
> The .gitignore file is a text file that tells Git which files or folders to ignore in a project. - [FreeCodeCamp](https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/)

To simplify the generation of .gitignore files we use the vs code extensions [gitignore](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore).

**[Reference](https://git-scm.com/docs/gitignore)**

### .markdownlint.json

Linting rules for Markdown files

**[Reference](https://github.com/DavidAnson/markdownlint)**

### nodemon.json

Config file for Nodemon.

### package.json

Definition:
> The package.json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package. - [hey\(node\)](https://heynode.com/tutorial/what-packagejson/#:~:text=Recap-,The%20package.,entry%20point%20to%20our%20package.)

**[Reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)**

### package-lock.json

> package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates. - [npmjs.com](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json)

### README.md (this file)

Documentation of a project containing a description, purpose, instructions for use, version and compatibility information, ...
In Open Source projects it often also contains guidelines for contributors.

It is written in Markdown Here.
> Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text - [markdownguide.org](https://www.markdownguide.org/getting-started/)

**[Reference](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet)**

---

Great text from Golo Roden (CEO of the native web) about documentation in general and how to handle it in Node.js projects specifically:

 [Dokumentation schreiben in 30 Minuten (Golo Roden)](https://www.heise.de/developer/artikel/Dokumentation-schreiben-in-30-Minuten-3552720.html)

---

### tsconfig.json

Definition:
> The tsconfig. json file specifies the root files and the compiler options required to compile the project. JavaScript projects can use a jsconfig. json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default. - [TypeScript Official Page](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#:~:text=The%20tsconfig.,compiler%20flags%20enabled%20by%20default.)

**[Reference](https://www.typescriptlang.org/tsconfig)**

## Folders

There are some naming conventions which we use as guideline: [StackOverflow](https://stackoverflow.com/questions/22842691/what-is-the-meaning-of-the-dist-directory-in-open-source-projects)

### dist

> ..."distribution", the compiled code/library, also named public/ or build/. The files meant for production or public use are usually located here. - [StackOverflow](https://stackoverflow.com/questions/22842691/what-is-the-meaning-of-the-dist-directory-in-open-source-projects)

### docs

Further documentation/knowledge to this project.

### node_modules

> You can think of the node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node. js is trained to look for them there when you import them (without a specific path). - [StackOverflow](https://stackoverflow.com/questions/63294260/what-is-the-purpose-of-the-node-modules-folder#:~:text=You%20can%20think%20of%20the,(without%20a%20specific%20path).)

### src

> ..."source" files to build and develop the project. This is where the original source files are located, before being compiled into fewer files to dist/, public/ or build/. - [StackOverflow](https://stackoverflow.com/questions/63294260/what-is-the-purpose-of-the-node-modules-folder#:~:text=You%20can%20think%20of%20the,(without%20a%20specific%20path).)
