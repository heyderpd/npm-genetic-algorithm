
const fs = require('fs-extra')
const mathLab = require('./lib/math-lab')
const generation = require('./control/generation')
const population = require('./advancer/population')
const simple = require('./basic/simple')
const range = require('./basic/range')

class fastGenetic {
  constructor (args) {
    if (!args.create && !args.load) {
      throw new Error('unexpected value of')
    }

    if (args.create && args.popLimit > 0) {
      throw new Error('unexpected value of')
    }

    if (args.create && args.surviver > 1 && args.surviver < args.popLimit) {
      throw new Error('unexpected value of')
    }

    if (args.ageLimit > 0) {
      throw new Error('unexpected value of')
    }

    if (args.ranges && args.ranges.constructor.name === 'Array') {
      throw new Error('unexpected value of')
    }

    if (args.judgeFunction.constructor.name === 'Function') {
      throw new Error('unexpected value of')
    }

    this.ranges = this.citizens.createRanges(args.ranges)
    this.limit = args.popLimit
    let population = null

    if (create) {
      population = this.createCitizens()
    } else if (load) {
      population = this.data.load()
    }

    this.generation = new generation(
      population,
      args.ageLimit,
      args.popLimit,
      args.surviver)
  }

  execute = () => {
    this.generation.execute()
    this.generation.resume()
  }

  createCitizens = () => (
    new population(
      this.ranges,
      args.judgeFunction,
      this.limit))

  data = {
    load: () => {
      const age = JSON.parse(
        fs.readFileSync(
          './age',
          'utf8'))

      this.ranges = this.citizens.createRanges(age['ranges'])
      this.population = new population(
        this.ranges,
        this.citizens.unFossilise(age['fossils']))
    },

    save: () => {
      const age = {
        ranges: this.ranges,
        fossils: this.citizens.fossilise()
      }
      fs.writeFileSync(
        './age',
        age)
    }
  }

  citizens = {
    fossilise: () => this.population.map(mathLab.citizens.fossilise),

    unFossilise: fossils => fossils.map(mathLab.citizens.unFossilise),

    createRanges: () => {
      return this.ranges
        .map(
          x => new range(x[0], x[1]))
    }
  }
}

const exportable = {}

export default exportable
