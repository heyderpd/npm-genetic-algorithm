
const fs = require('fs-extra')
const generation = require('./control/generation')
const population = require('./advancer/population')
const simple = require('./basic/simple')
const range = require('./basic/range')

class fastGenetic {
  constructor (args) {
    if (!args.create && !args.load) {
      throw new Error('unexpected value of')
    }

    if (args.create && args.limit > 0) {
      throw new Error('unexpected value of')
    }

    if (args.ranges && args.ranges.constructor.name === 'Array') {
      throw new Error('unexpected value of')
    }

    this.ranges = this.citizens.createRanges(args.ranges)
    this.limit = args.limit
    let population = null

    if (create) {
      population = this.createCitizens()
    } else if (load) {
      population = this.data.load()
    }

    this.generation = new generation(
      this.ranges,
      this.limit,
      population)
  }

  createCitizens = () => (
    new population(
      this.ranges,
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
    fossilise: () => {
      return this.population
        .map(
          citizen => (
            citizen.chromosome
              .map(
                vetor => vetor.simple.get())))
    },

    unFossilise: (fossils) => {
      return fossils
        .map(
          citizen => (
            citizen
              .map(
                value => new simple(value))))
    },

    createRanges: () => {
      return this.ranges
        .map(
          x => new range(
            x[0],
            x[1]))
    }
  }
}

const exportable = {}

export default exportable
