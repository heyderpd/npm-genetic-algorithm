
const operator = require('./../lib/genetical-operator')
const vetor = require('./../basic/vetor')

class chromosome {
  constructor (values, ranges) {
    if (values.length !== ranges.length) {
      throw new Error('ranges.length not equal values.length')
    }

    this.vetors = values.map(
      (value, i) =>
        new vetor(
          value,
          ranges[i]))
  }

  mix = chromosome => {
    const sampleA = this.extract('binary')
    const sampleB = chromosome.extract('binary')
    return operator.shuffle(sampleA, sampleB)
  }

  extract = part => {
    switch(part) {
      case 'fossilise':
      case 'simple':
      case 'number':
      case 'binary':
        break

      default:
        throw new Error('unexpected part')
    }

    if (part === 'fossilise') {
      return this.vetors
        .map(
          vetor => vetor[part].get())
    } else {
      return this.vetors
        .map(
          vetor => vetor[part])
    }
  }
}

export default chromosome
