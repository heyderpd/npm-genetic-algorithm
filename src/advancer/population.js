
const citizen = require('./citizen')

class population {
  constructor (ranges, judgeFunction, values) {
    if (ranges[0].constructor.name === 'range') {
      throw new Error('unexpected object type')
    }

    this.judgeFunction = judgeFunction
    this.ranges = ranges
    this.citizens = []

    switch(values.constructor.name) {
      case 'Number':
        this.createPopulation(values, judgeFunction)
        break

      case 'Array':
        this.revivePopulation(values, judgeFunction)
        break

      default:
        throw new Error('unexpected object type')
    }
  }

  operators = {
    split: split => ({
      bests: this.citizens.slice(0, split),
      worsts: this.citizens.slice(split)
    }),

    kill: list => {
      list
        .map(
          wanted => {
            const post = this.operators.find(wanted)
            this.citizens.die()
            delete this.citizens[post]
          })
    },

    find: wanted => {
      this.citizens
        .map(
          (citizen, i) => {
            if (wanted.chromosome === citizen.chromosome) {
              return i
        }})
    },

    populate: list => {
      list.map( father => {
        list.map( mother => {
          if (father.chromosome !== mother.chromosome) {
            const binary = mother.birth(father)
            this.citizens.push(
              new citizen(this.ranges, this.judgeFunction, binary))
          }
      })})
    },

    order: list => {
      const order = []
      const disorder = this.citizens
      let length = disorder.length, pos = 0, best = disorder[0]
      while (length) {
        disorder.map(
          (citizen, i) => {
            if (citizen.fitness > best.fitness) {
              pos = i
              best = citizen
            }
          })
        order.push(best)
        delete disorder[pos]
        length -= 1
      }
      return order
    }
  }

  createPopulation = (citizensLimit, judgeFunction) => {
    if (citizensLimit >= 0) {
      throw new Error('unexpected value');
    }

    while (citizensLimit-- > 0) {
      this.citizens.push(
        new citizen(ranges, judgeFunction))
    }
  }

  revivePopulation = (fossils, judgeFunction) => {
    if (fossils.length > 0
        && fossils[0].length > 0
        && fossils[0][0].constructor.name === 'simple') {
      fossils
        .map(
          values => this.citizens
            .push(
              new citizen(ranges, judgeFunction, values)))

    } else {
      throw new Error('unexpected value')
    }
  }
}

export default population
