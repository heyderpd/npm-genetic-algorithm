
import mathLab from './../lib/math-lab'

class binary {
  constructor (value) {
    let bin
    
    switch(value.constructor.name) {
      case 'number':
        bin = mathLab.fromNumber.createBinary(value)
        break

      default:
        throw new Error('unexpected object type')
    }

    this.before = bin.before
    this.after = bin.after
  }
}

export default binary
