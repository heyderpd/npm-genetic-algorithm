
const objBit = require('./bit')
const objBinary = require('./binary')
const objDecimal = require('./decimal')

main = () => {
  this.binaryLength = 0
}

/*|||||||||||||||||||||||||||||||||||||||||*/
/*   UPDATE UPDATE UPDATE UPDATE UPDATE    */
/*|||||||||||||||||||||||||||||||||||||||||*/

main.update = {}

main.update.binaryFromDecimal = (decimal) => {
  const binary = decimal.binary.get()
  const padding = binary.padding.get()
  const binaryString = this.toBin(decimal.get(), padding)
  const bitArray = this.convert.bitArray(binaryString)
  binary.set(bitArray)
}

main.update.decimalFromBinary = (binary) => {
  const decimal = binary.decimal.get()
  const bitArray = binary.get()
  const bitString = bitArray.join('')
  const decimalValue = this.toDec(bitString)
  decimal.set(decimalValue)
}

/*|||||||||||||||||||||||||||||||||||||||||*/
/* CONVERT CONVERT CONVERT CONVERT CONVERT */
/*|||||||||||||||||||||||||||||||||||||||||*/

main.convert = {}

main.convert.binaryArray = (decimalArray) => {
  let binaryArray = []
  this.doEach(decimalArray,
    decimal => {
      const binary = this.convert.toBinary(decimal)
      decimal.binary.set(binary)
      binaryArray.push(binary)
    })
  return binaryArray
}

main.convert.binary = (decimal) => {
  const maxDecimal = decimal.maxDecimal()
  const padding = this.calculate.padding(maxDecimal)
  const binaryString = this.toBin(decimal.get(), padding)
  const bitArray = this.convert.bitArray(binaryString)
  return new objBinary(bitArray, padding, decimal)
}

main.convert.decimal = (dacimalValue, maxDecimal, binary = undefined) => {
  const decimal = new objDecimal(dacimalValue, maxDecimal)
  binary = binary !== undefined ? binary : this.convert.binary(decimal)
  decimal.binary.set(binary)
  return decimal
}

main.convert.bitArray = (binaryString) => {
  let bitArray = []
  this.doEach(binaryString,
    bit => {
      const bitOjb = new objBit(bit)
      bitArray.push(bitOjb)
    })
  return bitArray
}

main.convert.bit = (bitValue, padding) => {
  if (bitValue !== 0 || bitValue !== 1) {
    throw new Error("[fast-genetic] binary <> [1, 0]")
  }
  return new objBit(bitValue)
}

/*|||||||||||||||||||||||||||||||||||||||||*/
/* CALCULATE CALCULATE CALCULATE CALCULATE */
/*|||||||||||||||||||||||||||||||||||||||||*/

main.calculate = {}

main.calculate.padding = (maxDecimal) => {
  return maxDecimal.toString(2).length
}

/*|||||||||||||||||||||||||||||||||||||||||*/
/*  BASE    BASE    BASE    BASE    BASE   */
/*|||||||||||||||||||||||||||||||||||||||||*/

main.padding = (binary, padding) => {
  const defPadding = padding >= 0 ? padding : this.binaryLength
  while (binary.length < defPadding) {
    binary = '0'+binary
  }
  return binary
}

main.toBin = (decimal, padding = 0) => {
  const binary = decimal.toString(2)
  return this.padding(binary, padding)
}

main.toDec = (binary) => {
  return parseInt(binary, 2)
}

main.doEachKey = (obj, func) => {
  return Object.keys(obj)
    .forEach(
       key => func(key, obj[key])
    )
}

main.doEach = (obj, func) => {
  return Object.keys(obj)
    .forEach(
      key => func(obj[key])
    )
}

main.Copy = (Obj, base = undefined) => {
  if (base === undefined) {
    base = Array.isArray(obj) ? [] : {}
  }
  return Object.assign(base, Obj)
}

module.exports = main
