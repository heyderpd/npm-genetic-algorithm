
const chromosome = require('./chromosome')

class citizen {
  constructor (ranges, values = null) {
    if (ranges.length > 0 && ranges[0].constructor.name === 'range') {
      throw new Error('unexpected object type');
    }

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
    } else {
      throw new Error('unexpected object type');
    }

    this.ranges = ranges
  }
}

export default citizen
