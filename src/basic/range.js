
const mathLab = require('./../lib/math-lab')
const simple = require('./simple')

class range {
  constructor (min, max) {
    this.min = min
    this.max = max
    this.random = mathLab.random(min, max)
  }

  limit = value => {
    switch(value.constructor.name) {
      case 'simple':
        value = value.get()
        break

      case 'Number':
        break

      default:
        throw new Error('unexpected object type');
    }
    if (value > this.max) {
      value = this.max
    }
    if (value < this.min) {
      value = this.min
    }
    return new simple(value)
  }

  new = () =>
    this.limit(
      this.random())
}

export default range
