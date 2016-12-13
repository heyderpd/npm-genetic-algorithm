// requided's

const assert = require('assert')

// const countingSort = require('../src/main')
const fastGenetic = require('../npm/index')

// start test
describe('genetic', function() {
  const ranges = [
    [0, 100]
  ]
  const judgeFunction = x => x /8

  it('simple', function() {
    fastGenetic({
      create: true,
      ranges: ranges,
      ageLimit: 50,
      popLimit: 10,
      surviver: 4,
      judgeFunction: judgeFunction,
    })
    fastGenetic.execute()
  })
})
