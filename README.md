# create-charada

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Scaffold your first project

With NPM:

```bash
npm create charada@latest
```

With Yarn:

```bash
yarn create charada
```

With PNPM:

```bash
pnpm create charada
```

With Bun:

```bash
bun create charada
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Angular project, run:

```bash
# npm 7+, extra double-dash is needed:
npm create charada@latest my-angular-app -- --template angular-vite

# yarn
yarn create charada my-angular-app --template angular-vite

# pnpm
pnpm create charada my-angular-app --template angular-vite

# Bun
bun create charada my-angular-app --template angular-vite
```

Currently supported template presets include:

- `lib-angular-vite`
- `angular-vite`
- `angular-tailwind`

You can use `.` for the project name to scaffold in the current directory.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/create-charada?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/create-charada
[npm-downloads-src]: https://img.shields.io/npm/dm/create-charada?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/create-charada
[bundle-src]: https://img.shields.io/bundlephobia/minzip/create-charada?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=create-charada
[license-src]: https://img.shields.io/github/license/adrian-ub/create-charada.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/adrian-ub/create-charada/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/create-charada
