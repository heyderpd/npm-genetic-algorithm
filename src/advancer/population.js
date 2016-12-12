
const citizen = require('./citizen')

class population {
  constructor (ranges, values) {
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

  createPopulation = citizensLimit => {
    if (citizensLimit >= 0) {
      throw new Error('unexpected value');
    }

    while (citizensLimit-- > 0) {
      this.citizens.push(
        new citizen(ranges))
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
              new citizen(ranges, values)))

    } else {
      throw new Error('unexpected value')
    }
  }
}

export default population
