# image-meta-loader

Import image meta from your code (using webpack).

```js
console.log(require('image-meta!./logo.png'))
// { type: 'png', size: { width: 200, height: 200 } }
```

## Install

```bash
npm i -D image-meta-loader
// or ..
yarn add -D image-meta-loader
```

## Usage

Just add `image-meta!` before your regular require/import expressions.

## License

MIT
