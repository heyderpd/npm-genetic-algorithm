
import mathLab from './../lib/math-lab'

class number {
  constructor (value) {
    switch(value.constructor.name) {
      case 'simple':
        this = mathLab.fromSimple.createNumber(value)
        break

      case 'binary':
        this = mathLab.fromBinary.createNumber(value)
        break

      default:
        throw new Error('unexpected object type')
    }
  }
}

export default number
