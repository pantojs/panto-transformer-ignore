# panto-transformer-ignore
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Ignore transformer for panto.

```js
panto.loadTransformer('ignore');

panto.pick('**/*').ignore({
    pattern: ['**/*.md', '**/bower.json']
}).read();
```

## options

Same as [panto-transformer-filter](https://github.com/pantojs/panto-transformer-filter).

[npm-url]: https://npmjs.org/package/panto-transformer-ignore
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-ignore.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-ignore.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-ignore
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-ignore.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-ignore
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-ignore.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-ignore#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-ignore/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-ignore/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-ignore?branch=master
