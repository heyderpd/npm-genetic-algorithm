import assert from 'assert'

import fastGenetic from '../dist/index'

// start test
describe('genetic', function() {
  const ranges = [
    [0, 100]
  ]

  it('simple', function() {
    const FG = new fastGenetic({
      debug: true,
      create: true,
      ranges: ranges,
      ageLimit: 30,
      popLimit: 12,
      surviver: 4,
      judgeFunction: x => x /8
    })
    assert.equal(
      FG.execute()  > 95,
      true)
  })

  it('complex', function() {
    const FG = new fastGenetic({
      debug: true,
      create: true,
      ranges: ranges,
      ageLimit: 30,
      popLimit: 16,
      surviver: 4,
      judgeFunction: x => Math.cos(Math.PI *x *0.1) *(-x)
    })
    const res = FG.execute()
    assert.equal(
      90 < res && res < 91,
      true)
  })
})
