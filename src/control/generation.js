
const fs = require('fs-extra')
const population = require('./../advancer/population')
const simple = require('./../basic/simple')
const range = require('./../basic/range')

class generation {
  constructor (ranges, limit, population) {
    this.ranges = ranges
    this.limit = limit
    this.year = 0
    this.population = population

  }
}

export default generation
