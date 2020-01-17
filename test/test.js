const test = require( 'tape' )

const decurse = require( '../main.js' )

test( 'basic zalgos', function ( t ) {
  t.plan( 1 )

  const zalgo = 'h̶̡͎͉̟̝̲̝̩͓͖̹̜̲̓̊͗̍̈́̃̇̓̐̍é̴̛̫̤̀͛̑͌͑͌͒̅̀̿͛̕l̶̡̙̤͎͎̖̯̳̜͉͑͐́̂̔͐̀̐̄́̌̔͗͠ļ̵͔̲̜̼̮̭̠̪̭̑̓̎͆̃̅̾͗̌̐̕ͅǫ̶̘͇͚̜͕̣̘͈̈́͛̅̉̐̓̐̀̒̊̈̚͠ ̷̟̻̟̙̥̹̰̽̆́̌͛̏̉̀͗͋́̓͑̈́͝w̵̢̛͉͂͛̀̓̋̈̀̏̋̊̊́̄̕o̴̱̒̇͌͑r̸͈͓̩̈́̀͘l̴̨̪̫̅̀̎̉̐̋̈̽̓͋͘͜d̸͎̜̺̗̈́̑̊̒̐'
  t.equal( decurse( zalgo ), 'hello world' )
} )

test( 'false isZalgo', function ( t ) {
  t.plan( 1 )

  const text = 'thiŝ te̅xt unchanged, since some lângûaĝes aĉtuallŷ uŝe thêse sŷmbo̅ls'

  t.equal( decurse.isZalgo( text ), false )
} )

test( 'false zalgo 1', function ( t ) {
  t.plan( 1 )

  const text = 'thiŝ te̅xt unchanged, since some lângûaĝes aĉtuallŷ uŝe thêse sŷmbo̅ls'.normalize( 'NFC' )

  t.equal( decurse( text ), text )
} )

test( 'false-zalgo not the same when normalized', function ( t ) {
  t.plan( 1 )

  const text = 'thiŝ te̅xt unchanged, since some lângûaĝes aĉtuallŷ uŝe thêse sŷmbo̅ls'

  t.notEqual( decurse( text ), text )
} )

test( 'false zalgo 2', function ( t ) {
  t.plan( 1 )

  const text = 'Z nich ovšem pouze předposlední sdílí s výše uvedenou větou příliš žluťoučký kůň úpěl'
  t.equal( decurse( text ), text )
} )
