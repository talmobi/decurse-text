const test = require( 'tape' )

const decurse = require( '../main.js' )

const execa = require( 'execa' )

const path = require( 'path' )
const CLI_PATH = path.resolve( __dirname, '../cli.js' )

test( 'api: basic zalgos', function ( t ) {
  t.plan( 1 )

  const zalgo = 'h̶̡͎͉̟̝̲̝̩͓͖̹̜̲̓̊͗̍̈́̃̇̓̐̍é̴̛̫̤̀͛̑͌͑͌͒̅̀̿͛̕l̶̡̙̤͎͎̖̯̳̜͉͑͐́̂̔͐̀̐̄́̌̔͗͠ļ̵͔̲̜̼̮̭̠̪̭̑̓̎͆̃̅̾͗̌̐̕ͅǫ̶̘͇͚̜͕̣̘͈̈́͛̅̉̐̓̐̀̒̊̈̚͠ ̷̟̻̟̙̥̹̰̽̆́̌͛̏̉̀͗͋́̓͑̈́͝w̵̢̛͉͂͛̀̓̋̈̀̏̋̊̊́̄̕o̴̱̒̇͌͑r̸͈͓̩̈́̀͘l̴̨̪̫̅̀̎̉̐̋̈̽̓͋͘͜d̸͎̜̺̗̈́̑̊̒̐'
  t.equal( decurse( zalgo ), 'hello world' )
} )

test( 'api: false isZalgo', function ( t ) {
  t.plan( 1 )

  const text = 'thiŝ te̅xt unchanged, since some lângûaĝes aĉtuallŷ uŝe thêse sŷmbo̅ls'

  t.equal( decurse.isZalgo( text ), false )
} )

test( 'api: false zalgo 1', function ( t ) {
  t.plan( 1 )

  const text = 'thiŝ te̅xt unchanged, since some lângûaĝes aĉtuallŷ uŝe thêse sŷmbo̅ls'

  t.equal( decurse( text ), text )
} )

test( 'api: false zalgo 2', function ( t ) {
  t.plan( 1 )

  const text = 'Z nich ovšem pouze předposlední sdílí s výše uvedenou větou příliš žluťoučký kůň úpěl'
  t.equal( decurse( text ), text )
} )

test( 'cli: basic zalgo', async function ( t ) {
  t.plan( 1 )

  const echo = execa( 'echo', [ 'h̶̡͎͉̟̝̲̝̩͓͖̹̜̲̓̊͗̍̈́̃̇̓̐̍é̴̛̫̤̀͛̑͌͑͌͒̅̀̿͛̕l̶̡̙̤͎͎̖̯̳̜͉͑͐́̂̔͐̀̐̄́̌̔͗͠ļ̵͔̲̜̼̮̭̠̪̭̑̓̎͆̃̅̾͗̌̐̕ͅǫ̶̘͇͚̜͕̣̘͈̈́͛̅̉̐̓̐̀̒̊̈̚͠ ̷̟̻̟̙̥̹̰̽̆́̌͛̏̉̀͗͋́̓͑̈́͝w̵̢̛͉͂͛̀̓̋̈̀̏̋̊̊́̄̕o̴̱̒̇͌͑r̸͈͓̩̈́̀͘l̴̨̪̫̅̀̎̉̐̋̈̽̓͋͘͜d̸͎̜̺̗̈́̑̊̒̐' ] )
  const cli = execa( CLI_PATH )
  echo.stdout.pipe( cli.stdin )

  let buffer = ''
  cli.stdout.on( 'data', function ( chunk ) {
    buffer += chunk
  } )

  cli.stdout.on( 'end', function ( chunk ) {
    t.equal( decurse( buffer ), 'hello world' )
  } )

  cli.stdout.on( 'error', function ( err ) {
    throw error
  } )
} )

test( 'cli: basic false zalgo 1', async function ( t ) {
  t.plan( 1 )

  const text = 'thiŝ te̅xt unchanged, since some lângûaĝes aĉtuallŷ uŝe thêse sŷmbo̅ls'

  const echo = execa( 'echo', [ text ] )
  const cli = execa( CLI_PATH )
  echo.stdout.pipe( cli.stdin )

  let buffer = ''
  cli.stdout.on( 'data', function ( chunk ) {
    buffer += chunk
  } )

  cli.stdout.on( 'end', function ( chunk ) {
    t.equal( decurse( buffer ), text )
  } )

  cli.stdout.on( 'error', function ( err ) {
    throw error
  } )
} )

test( 'cli: basic false zalgo 2', async function ( t ) {
  t.plan( 1 )

  const text = 'Z nich ovšem pouze předposlední sdílí s výše uvedenou větou příliš žluťoučký kůň úpěl'

  const echo = execa( 'echo', [ text ] )
  const cli = execa( CLI_PATH )
  echo.stdout.pipe( cli.stdin )

  let buffer = ''
  cli.stdout.on( 'data', function ( chunk ) {
    buffer += chunk
  } )

  cli.stdout.on( 'end', function ( chunk ) {
    t.equal( decurse( buffer ), text )
  } )

  cli.stdout.on( 'error', function ( err ) {
    throw error
  } )
} )
