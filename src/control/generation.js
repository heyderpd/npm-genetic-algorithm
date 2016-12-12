
const fs = require('fs-extra')
const population = require('./../advancer/population')
const simple = require('./../basic/simple')
const range = require('./../basic/range')

class generation {
  constructor (population, limit) {
    this.population = population
    this.limit = limit
    this.year = 0

    while (this.limit-- > 0) {
      this.population.beOld()
    }
  }
}

export default generation
