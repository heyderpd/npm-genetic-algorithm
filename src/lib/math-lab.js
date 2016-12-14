
import tendentious from 'random-tendentious'

const mathLab = {
  random: (min, max) => {
    return tendentious({
      l: [
        min,
        max]})
  },

  fromSimple: {
    toInt: number => parseInt(number),

    toDecimal: number => parseInt(number, 2),

    toBinary: number => number.toString(2),

    createNumber: simple => {
      const splited = String(simple.get())
        .split('.')
        .map(x => mathLab.fromSimple.toInt(x))
      const beforeComma = splited[0]
      const afterComma  = splited[1]
      return {
        before: beforeComma,
        after:  afterComma
      }
    }
  },

  fromNumber: {
    createSimple: number => mathLab.fromSimple.toInt(`${number.before}.${number.after}`),

    createBinary: number => {
      const beforeComma = mathLab.fromSimple.toBinary(number.before)
      const afterComma  = mathLab.fromSimple.toBinary(number.after)
      return {
        before: beforeComma,
        after:  afterComma
      }
    }
  },

  fromBinary: {
    createNumber: binary => {
      const beforeComma = mathLab.fromSimple.toDecimal(binary.before)
      const afterComma  = mathLab.fromSimple.toDecimal(binary.after)
      return {
        before: beforeComma,
        after:  afterComma
      }
    }
  },

  citizens: {
    fossilise: citizen => citizen.chromosome.extract('fossilise'),

    unFossilise: citizen => citizen.map(
      value => new simple(value))
  }
}

export default mathLab
