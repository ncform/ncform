# ncform Contributing Guide

## Setup

```
$ npm i
$ npm run bootstrap
$ npm run build
```

## Develop

- ncform
```
$ cd packages/ncform
$ npm run dev
```

- ncform-common
```
cd packages/ncform-common
npm run watch-build
```

- ncform-theme-elementui
```
$ cd ncform-theme-elementui
$ npm run dev
```

## Running Tests

- ncform

First, start ncform dev server

```
$ cd packages/ncform
$ npm run dev
```

Then run the e2e server

```
$ cd packages/ncform-e2e
$ npm run test-ncform:ui
```

- ncform-theme-elementui

First, start ncform-show dev server

```
$ cd packages/ncform-e2e
$ npm run test-ncform:ui
```

Then run the e2e server

```
$ cd packages/ncform-e2e
$ npm run test-theme-elem:ui
```

## Pull Request Guidelines

- Checkout a topic branch from a base branch, e.g. main, and merge back against that branch.

- Add some e2e tests, and make sure tests pass!

- Submit your PR
