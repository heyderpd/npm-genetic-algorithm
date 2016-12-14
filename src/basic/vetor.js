
import mathLab from './../lib/math-lab'

class vetor {
  constructor (value, range) {
    this.range = range

    switch(value.constructor.name) {
      case 'binary':
        this.binary = value
        break

      case 'number':
        this.number = value
        break

      case 'simple':
        this.simple = value
        break

      default:
        throw new Error('unexpected object type');
    }

    switch(value.constructor.name) {
      case 'binary':
        this.number = mathLab.fromBinary.createNumber(this.binary)

      case 'number':
        this.simple = mathLab.fromNumber.createSimple(this.number)

      case 'simple':
        this.simple = this.range.limit(value)
        this.spread(this.simple)
        break

      default:
        throw new Error('unexpected object type')
    }
  }
  
  spread(value) {
    switch(value.constructor.name) {
      case 'simple':
        this.simple = value
        this.number = mathLab.fromSimple.createNumber(this.simple)
        this.binary = mathLab.fromNumber.createBinary(this.number)
        break

      case 'number':
        this.number = value
        this.simple = mathLab.fromNumber.createSimple(this.number)
        this.binary = mathLab.fromNumber.createBinary(this.number)
        break

      case 'binary':
        this.binary = value
        this.number = mathLab.fromBinary.createNumber(this.binary)
        this.simple = mathLab.fromNumber.createSimple(this.number)
        break

      default:
        throw new Error('unexpected object type')
    }
  }
}

export default vetor
