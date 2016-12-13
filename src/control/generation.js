
const fs = require('fs-extra')
const population = require('./../advancer/population')
const simple = require('./../basic/simple')
const range = require('./../basic/range')

class generation {
  constructor (population, ageLimit, popLimit, surviver) {
    this.population = population
    this.surviver = surviver
    this.limit = ageLimit
    this.pop = popLimit
    this.year = 0
  }

  execute = () => {
    this.population.order()
    let limit = this.limit
    while (limit-- > 0) {
      groups = this.population.split(this.surviver)
      this.population.populate(groups.bests)
      this.population.order()
      groups = this.population.split(this.pop)
      this.population.kill(groups.worsts)
      console.log(`generation ${limit}`)
    }
  }

  resume = () => {
    const best = this.population[0]
    console.log('best fitness:', best.fitness)
    this.population
      .map(
        citizen => console.log(citizen))
  }
}

export default generation
