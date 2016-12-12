
const citizen = require('./citizen')

class population {
  constructor (ranges, judgeFunction, values) {
    if (ranges[0].constructor.name === 'range') {
      throw new Error('unexpected object type')
    }

    this.citizens = []

    switch(values.constructor.name) {
      case 'Number':
        this.createPopulation(values)
        break

      case 'Array':
        this.revivePopulation(values)
        break

      default:
        throw new Error('unexpected object type')
    }
  }

  operators = {
  }

  createPopulation = citizensLimit => {
    if (citizensLimit >= 0) {
      throw new Error('unexpected value');
    }

    while (citizensLimit-- > 0) {
      this.citizens.push(
        new citizen(ranges, judgeFunction))
    }
  }

  revivePopulation = fossils => {
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
