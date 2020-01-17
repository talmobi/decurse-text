#!/usr/bin/env node

const decurse = require( './main.js' )

let buffer = ''
process.stdin.on( 'data', function ( chunk ) {
  buffer += chunk
} )

process.stdin.on( 'end', function () {
  process.stdout.write( decurse( buffer ) )
} )

