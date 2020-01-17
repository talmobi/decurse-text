#!/usr/bin/env node

const decurse = require( './main.js' )

const args = process.argv.slice( 2 )

let _threshold = 0.5

if ( args[ 0 ] ) {
  const n = Number( args[ 0 ] )

  if ( typeof n !== 'number' ) {
    console.log( 'argument has to be a decimal number between 0 and 1' )
    process.exit( 1 )
  }

  if ( Number.isNaN( n ) ) {
    console.log( 'argument has to be a decimal number between 0 and 1' )
    process.exit( 1 )
  }

  _threshold = n
}

let buffer = ''
process.stdin.on( 'data', function ( chunk ) {
  buffer += chunk
} )

process.stdin.on( 'end', function () {
  process.stdout.write( decurse( buffer ) )
} )

