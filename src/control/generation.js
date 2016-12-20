
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
    console.log(`generations`)
    this.population.order()
    let groups, limit = this.limit
    while (limit-- > 0) {
      groups = this.population.split(this.surviver)
      this.population.populate(groups.bests)
      this.population.order()
      groups = this.population.split(this.pop)
      this.population.selection(groups)
      console.log(`${this.limit -limit}º`)
    }
    this.population.order()
  }

  resume() {
    const best = this.population.citizens.pop()
    this.population.citizens
      .map(
        citizen => console.log(citizen.fitness, citizen.chromosome.extract('fossilise')))
    console.log('best fitness:', best.fitness, 'citizens:', this.population.citizens.length)
    const bestFossil = best.chromosome.extract('fossilise')
    console.log('params:', bestFossil)
    return bestFossil[0]
  }
}

export default generation
