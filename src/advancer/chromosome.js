
const vetor = require('./../basic/vetor')

class chromosome {
  constructor (values, ranges) {
    if (values.length !== ranges.length) {
      throw new Error('ranges.length not equal values.length');
    }

    this.vetors = values.map(
      (value, i) =>
        new vetor(
          value,
          ranges[i]))
  }
}

export default chromosome
