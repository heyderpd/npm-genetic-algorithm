
import mathLab from './../lib/math-lab'

class number {
  constructor (value) {
    let num

    switch(value.constructor.name) {
      case 'simple':
        num = mathLab.fromSimple.createNumber(value)
        break

      case 'binary':
        num = mathLab.fromBinary.createNumber(value)
        break

      default:
        throw new Error('unexpected object type')
    }

    this.before = num.before
    this.after = num.after
  }
}

export default number
