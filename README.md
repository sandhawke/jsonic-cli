# jsonic-cli
[![NPM version][npm-image]][npm-url]

simple shell command to call jsonic

## Install

```terminal
$ npm i -g jsonic-cli
```

## Examples

```terminal
$ echo '[{a:b}]' | jsonic --json
[
  {
    "a": "b"
  }
]
$ echo '[{a:b}]' | jsonic --compact
[{"a":"b"}]
$ echo '[{a:b}]' | jsonic --jsonic
[{a:b}]
$ echo '[{a:b}]' | jsonic --console
[ { a: 'b' } ]
```

Default is --console style, which is probably color-coded when output
is a tty.

## Note

I'm not associated with the author of jsonic.  I just wanted a cli for it.

[npm-image]: https://img.shields.io/npm/v/jsonic-cli.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jsonic-cli
