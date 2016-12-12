
class range {
  constructor (min, max) {
    this.min = min
    this.max = max
  }

  limit = value => {
    if (value > max) {
      return this.max
    }
    if (value < min) {
      return this.min
    }
    return value
  }
}

export default range
