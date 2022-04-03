---
id: k08pcudz0wxte08kot3ocbf
title: Dendron
desc: ''
updated: 1649013206678
created: 1649013206678
stub: false
isDir: false
---

> Dendron is a tool for creating and managing a codebase of documents.

[Website](https://www.dendron.so/)

## VS Code Extension

Dendron provides a VS Code extension. After the installation, a tutorial is provided to explain the basic usage.

![](/assets/2022-04-03-20-33-13-00vxo7ybhjav.png)

## Dendron CLI

`npm install @dendronhq/dendron-cli@latest`

## Migrate from OneNote to Dendron

1. Download and extract OneNote Md Exporter ([Download](https://github.com/alxnbl/onenote-md-exporter))
1. Install PanDoc ([Download](https://pandoc.org/installing.html))
1. Start OneNote and open notebooks which should be exported to markdown
1. Run `OneNoteMdExporter.exe` from the extracted OneNoteMdExporter folder
1. Start export by pressing enter
1. Select the notebook(s) you want to export
1. Choose Markdown as the export format
1. type `yes` to modify settings
1. change ResourceFolderName to `assets`
1. Save the settings and close the window. The export starts automatically.
1. Open VS Code
1. ``Dendron: Initialize Workspace``
1. Choose Code Workspace and follow the instructions
1. ``Dendron: Import Pod``
1. Choose ``dendron.markdown``
1. If not already configured, the config.import.yml gets opened
1. Set the name of your newly created vault as vault name and the path of the exported Markdown files as src (on Windows you can copy the path from explorer)
1. Save the config.import.yml and close the window. The import starts automatically.

[Source](https://wiki.dendron.so/notes/f9b4fc21-7613-4c8a-9257-cec4c06b67f9/#onenote)
