#!/usr/bin/env node
const jsonic = require('jsonic')
const streamString = require('stream-string')
const fs = require('fs')
const yargs = require('yargs')

yargs
  .help()
  .usage('$0 [options] < input_stream > output_stream')
  .option('json', {
    alias: 'j',
    describe: 'output indented JSON'
  })
  .option('console', {
    alias: 'l',
    describe: 'output like console.log'
  })
  .option('compact', {
    alias: 'c',
    describe: 'output compact one-line JSON'
  })
  .option('jsonic', {
    alias: 's',
    describe: 'use jsonic.stringify for output'
  })
  .argv
const argv = yargs.argv

async function main() {
  let str,obj
  let source = process.stdin
  let filename = argv._.shift()
  if (filename) {
    source = fs.createReadStream(filename)
  }

  try {
    str = await streamString(source)
  } catch (e) {
    console.error('Error reading input:', e)
    return
  }
  
  try {
    obj = await jsonic(str)
  } catch (e) {
    console.error('jsonic error: ', e)
    return
  }
  
  let out
  if (argv.jsonic) {
    out = jsonic.stringify(obj)
  } else if (argv.compact || argv.json) {
    out = JSON.stringify(obj, null, argv.compact ? 0 : 2)
  }
  if (out) {
    process.stdout.write(out)
    process.stdout.write('\n')
  } else {
    console.log('%O', obj)
  }
}

main()
