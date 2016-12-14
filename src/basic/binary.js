
import mathLab from './../lib/math-lab'

class binary {
  constructor (value) {
    switch(value.constructor.name) {
      case 'number':
        this = mathLab.fromNumber.createBinary(value)
        break

      default:
        throw new Error('unexpected object type')
    }
  }
}

export default binary
