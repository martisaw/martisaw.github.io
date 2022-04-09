# martisaw.github.io

This is the code for [env42day.com](https://env42day.com).

## Getting started

1. `npm install`
2. We use conventional commit messages. Hit `npx husky install`. Activate the husky hook with `npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`. For more information see [here](https://github.com/conventional-changelog/commitlint).
3. We also use vite. To start developing use `npm run dev`.

## Deploy

You can use the script `npm run deploy`.

## Known Issues

* Commitlint: Make sure that the `commitlint.config.js` file is saved as UTF-8.
