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

/* cos(PI *x *0.1) *(-x) */
const judgeFunction = arr => Math.cos(Math.PI *x *0.1) *(-x)

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
ALL iteration's in 0.007 ms.
fitness		solution
65.11835969170436 [ 68.93573423944555 ]
65.19099551929884 [ 68.94478743800887 ]
65.77195202302018 [ 71.25710472679006 ]
67.50139866974438 [ 71.00396523220074 ]
69.27864002694919 [ 70.62179929912244 ]
69.8367909764697  [ 70.40450223415675 ]
69.90342086322786 [ 69.92357436806229 ]
70.01023010902847 [ 70.27790648541554 ]
73.45228783104494 [ 92.0595593424834  ]
74.87380584444584 [ 91.97236049316011 ]
76.3179795228995  [ 88.3210963708698  ]
78.32890017238718 [ 88.46154555567718 ]
84.87742558575691 [ 89.02459183196798 ]
87.28634855185229 [ 89.31953231880507 ]
87.67800696140547 [ 89.37815318418288 ]
best fitness: 89.83938532391883 citizens: 15
solution: [ 90.33287266519253 ]
*/
```
