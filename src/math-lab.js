
class mathLab {

  fromSimple = {
    toInt: number => parseInt(number),

    toDecimal: number => parseInt(number, 2),

    toBinary: number => afcoma.toString(2),

    createNumber: simple => {
      const splited = String(simple)
        .split('.')
        .map(x => this.fromSimple.toInt(x))
      const beforeComma = splited[0]
      const afterComma  = splited[1]
      return {
        before: beforeComma,
        after:  afterComma
      }
    }
  }

  fromNumber = {
    createSimple: number => this.fromSimple.toInt(`${number.before}.${number.after}`),

    createBinary: number => {
      const beforeComma = this.fromSimple.toBinary(number.before)
      const afterComma  = this.fromSimple.toBinary(number.after)
      return {
        before: beforeComma,
        after:  afterComma
      }
    }
  }

  fromBinary = {
    createNumber: binary => {
      const beforeComma = this.fromSimple.toDecimal(binary.before)
      const afterComma  = this.fromSimple.toDecimal(binary.after)
      return {
        before: beforeComma,
        after:  afterComma
      }
    }
  }

}

export default mathLab
