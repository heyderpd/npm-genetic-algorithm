
const mathLab = require('./math-lab')

class chromosome {
  constructor (values, ranges) {
    if (values.length !== ranges.length) {
      throw new Error('ranges.length not equal values.length');
    }

    this.vetors = values.map((value, i) =>{
      range = ranges[i]
      return new vetor(value, range)
    })
  }
}

export default chromosome
