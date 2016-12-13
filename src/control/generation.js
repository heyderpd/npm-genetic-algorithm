
const fs = require('fs-extra')
const population = require('./../advancer/population')
const simple = require('./../basic/simple')
const range = require('./../basic/range')

class generation {
  constructor (population, limit, surviver) {
    this.population = population
    this.surviver = surviver
    this.limit = limit
    this.year = 0
  }

  execute = () => {
    this.population.order()
    while (this.limit-- > 0) {
      groups = this.population.split(this.surviver)
      this.population.populate(groups.bests)
      this.population.order()
      groups = this.population.split(this.limit)
      this.population.kill(groups.worsts)
    }
  }
}

export default generation
