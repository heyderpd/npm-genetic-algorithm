# FAST GENETIC ALGORITHM

## All process have a avg of 15 mileseconds!!!

## I will help if you have any difficulty =)
Contact me by [github:heyderpd](https://github.com/heyderpd). I'll be glad to help you.

## Thanks for [npm~lucasmreis](https://www.npmjs.com/~lucasmreis)
```javascript
npm install --save fast-genetic
```

npm install npm install fast-genetic

## Example:
```javascript
const ranges = [
  [0, 100]
]

const judgeFunction = x => x /8

const FG = new fastGenetic({
  debug: true,
  create: true,
  ranges: ranges,
  ageLimit: 30,
  popLimit: 12,
  surviver: 4,
  judgeFunction: judgeFunction
})

FG.execute()
/*
ALL iteration's in 0.014 ms.
fitness            solution
11.818765755798857 [ 94.55012604639086 ]
11.873912940448793 [ 94.99130352359035 ]
11.883900179398351 [ 95.07120143518681 ]
11.934724241693406 [ 95.47779393354725 ]
12.04071400860339 [ 96.32571206882712 ]
12.081032130053583 [ 96.64825704042866 ]
12.187503869559615 [ 97.50003095647692 ]
12.252636896041144 [ 98.02109516832915 ]
12.270125964774204 [ 98.16100771819363 ]
12.428041224173844 [ 99.42432979339075 ]
12.428881639443604 [ 99.43105311554883 ]
solution: [ 99.81946883144496 ]
*/
```
