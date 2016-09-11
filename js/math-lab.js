
const objBinary = require('./binary')

main = () => {
  this.binaryLength = 0
}

main.convertObj = {}

main.convertObj.Bin = (binary) => {
  return new objBinary(binary)
}

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
