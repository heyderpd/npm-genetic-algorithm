// requided's

const assert = require('assert')

import fastGenetic from '../src/main'
// import fastGenetic from '../npm/index'

// start test
describe('genetic', function() {
  const ranges = [
    [0, 100]
  ]
  const judgeFunction = x => x /8

  it('simple', function() {
    const FG = new fastGenetic({
      create: true,
      ranges: ranges,
      /*ageLimit: 2,
      popLimit: 5,
      surviver: 3,*/
      ageLimit: 15,
      popLimit: 10,
      surviver: 4,
      judgeFunction: judgeFunction,
    })
    assert.equal(
      FG.execute()  > 95,
      true)
  })
})
