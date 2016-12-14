
import fs from 'fs-extra'
import population from './../advancer/population'
import simple from './../basic/simple'
import range from './../basic/range'

class generation {
  constructor (population, ageLimit, popLimit, surviver) {
    this.population = population
    this.surviver = surviver
    this.limit = ageLimit
    this.pop = popLimit
    this.year = 0
  }

  execute() {
    this.population.order()
    let groups, limit = this.limit
    while (limit-- > 0) {
      groups = this.population.split(this.surviver)
      this.population.populate(groups.bests)
      this.population.order()
      groups = this.population.split(this.pop)
      this.population.kill(groups.worsts)
      console.log(`generation ${limit}`)
    }
  }

  resume() {
    const best = this.population.pop()
    console.log('best fitness:', best.fitness)
    this.population
      .map(
        citizen => console.log(citizen))
  }
}

export default generation
