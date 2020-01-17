// https://github.com/kdex/unzalgo
const { clean, isZalgo } = require( 'unzalgo' )

// ref: https://github.com/kdex/unzalgo#threshold
const DEFAULT_THRESHOLD = 0.45

function decurseText ( text, t ) {
  if ( t == null ) t = DEFAULT_THRESHOLD
  return clean( text, t )
}

decurseText.isZalgo = function ( text, t ) {
  if ( t == null ) t = DEFAULT_THRESHOLD
  return isZalgo( text, t )
}

module.exports = decurseText
