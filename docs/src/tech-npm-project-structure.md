# NPM Project structure

## Files

| Name               | Description                      | Links                                                                                                        |
|--------------------|----------------------------------|--------------------------------------------------------------------------------------------------------------|
| .eslintrc.json     | Config file for ESLint Plugin    | [ESLint Website](https://eslint.org)                                                                         |
| .gitignore         | File to ignore files in Git      | [GIT Website](https://git-scm.com/)<br />[Reference](https://git-scm.com/docs/gitignore)                     |
| .markdownlint.json | Linting rules for Markdown files | [Markdownguide](https://www.markdownguide.org/)<br />[Reference](https://github.com/DavidAnson/markdownlint) |
| nodemon.json       | Config file for nodemon          | [Website](https://nodemon.io/)                                                                               |
| package.json       | File to define project           | [Website](https://npmjs.com/)<br />[Reference](https://docs.npmjs.com/cli/v8/configuring-npm/)               |
| package-lock.json  | Automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.|
| README.md          | Description of a project         | [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) |
| tsconfig.json      | Config file for TypeScript       | [TypeScript Website](https://www.typescriptlang.org/)                                                                                                 |

## Folders

There are some naming conventions which we use as guideline: [StackOverflow](https://stackoverflow.com/questions/22842691/what-is-the-meaning-of-the-dist-directory-in-open-source-projects)

### dist

The compiled code/library, also named public/ or build/. The files meant for production or public use are usually located here. - [StackOverflow](https://stackoverflow.com/questions/22842691/what-is-the-meaning-of-the-dist-directory-in-open-source-projects)

### node_modules

> You can think of the node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node. js is trained to look for them there when you import them (without a specific path). - [StackOverflow](https://stackoverflow.com/questions/63294260/what-is-the-purpose-of-the-node-modules-folder#:~:text=You%20can%20think%20of%20the,(without%20a%20specific%20path).)

### src

> ..."source" files to build and develop the project. This is where the original source files are located, before being compiled into fewer files to dist/, public/ or build/. - [StackOverflow](https://stackoverflow.com/questions/63294260/what-is-the-purpose-of-the-node-modules-folder#:~:text=You%20can%20think%20of%20the,(without%20a%20specific%20path).)

## Node backend

## React
