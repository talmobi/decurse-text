#  decurse-text
Untransform t̛͚̖̾eͫͥ̏̓x̱ͩ̽͡t̺́͂͟ ̥̬̍͠l̻̯̝͑ḯ̭͙̟k̴̰͘͟e̢̜̻̲ ̮͔ͩ̕ť̡̳̓h̩̮̺̒i̥̅̐͜s̜̻̍ͦ -> text like this

Also known as [zalgo text](https://en.wikipedia.org/wiki/Combining_character#Zalgo_text)

## Easy to use

#### CLI usage
```javascript
echo 'hͫeͬlͯl̊o̸' | decurse-text
```
```
hello
```

#### Module usage
```javascript
const decurse = require( 'decurse-text' )
console.log( decurse( 'hͫeͬlͯl̊o̸' ) )
```
```
hello
```

## About
Trań͓̻̾sform text like this cu̷̵̽ͦrsed/de̖̋ͦ͛m̟̜̟̊onic/z̿̔͑͟a̫̾̿͞l̢̞̅̇ǧ͒ͯ͢o̫ͥ́ͅ ͓ͣ̿̍ṫ͗ͦͅext.

Into normal/blessed non cursed/demonic/zalgo text.

## Why
Although there are zalgo text transformers on npm already they
don't support a CLI and won't be found if you're looking for
demonic or cursed text as zalgo is also commonly known as.

This module is basically a thin wrapper on already existing
modules with a few opinionated defaults to make common usage
simpler.

Basically intended as an easy to use alias for existing zalgo
transformers:

[zalgo-js](https://github.com/casieber/zalgo-js)

[unzalgo](https://github.com/kdex/unzalgo)

## For who?

## How
There are already good existing npm modules that do this. We
will primarily use them.

[zalgo-js](https://github.com/casieber/zalgo-js)

[unzalgo](https://github.com/kdex/unzalgo)

## Alternatives
[zalgo-js](https://github.com/casieber/zalgo-js)

[unzalgo](https://github.com/kdex/unzalgo)

## Test
```
npm test
```

