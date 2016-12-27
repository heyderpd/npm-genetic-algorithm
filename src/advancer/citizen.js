
import chromosome from './chromosome'

class citizen {
  constructor (ranges, judge, values = null) {
    if (ranges[0].constructor.name !== 'range') {
      throw new Error('unexpected object type')
    }

    this.couple = []
    this.judge = judge
    this.ranges = ranges
    this.fitness = undefined
    this.chromosome = null

    if (values === null) {
      values = ranges
        .map(
          x => x.new())
    }

    if (values.constructor.name === 'chromosome') {
      values = values.vetors
        .map(
          x => x.simple)
    }

    if (values[0].constructor.name === 'simple') {
      this.chromosome = new chromosome(values, ranges)
      this.fitness = this.getFitness()
    } else {
      throw new Error('unexpected object type')
    }
  }

  birth(father) {
    return this.chromosome.mix(father.chromosome)
  }

  getFitness() {
    let sum = 0
    const fossilise = this.chromosome.extract('fossilise')
    return this.judge(fossilise)
  }

  die() {
    delete this.couple
    delete this.judge
    delete this.ranges
    delete this.fitness
    delete this.chromosome
  }
}

export default citizen
