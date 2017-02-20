[![travis-build-status](https://travis-ci.org/christian-fei/require-as-template-string.svg?branch=master)](https://travis-ci.org/christian-fei/require-as-template-string)
[![npm-dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=flat-square&colorB=44CC11)](package.json)
[![standard-js](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![npm-node-version](https://img.shields.io/badge/node-6%2B-blue.svg?style=flat-square)](https://nodejs.org/docs/v6.0.0/api)
[![npm-version](https://img.shields.io/npm/v/require-as-template-string.svg?style=flat-square&colorB=007EC6)](https://www.npmjs.com/package/require-as-template-string)
[![license](https://img.shields.io/npm/l/require-as-template-string.svg?style=flat-square&colorB=007EC6)](https://spdx.org/licenses/MIT)

`require-as-template-string` is an experiment in leveraging some features of the JavaScript language to make `require` a lil' bit less of a burden.

# usage

set the "module to preload" via the `--require` option.
(see `node --help` for more info.)

```
node --require require-as-template-string index.js
```

*index.js*

```
const url = r`url`
const [url,net] = r`url,net`
```

### `rr` as alternative api for requiring multiple modules

```
rr`url,net` === r`url,net`
```

# todo

- experiment with object destructuring when requiring multiple modules.
