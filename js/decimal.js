
const mathLab = require('./math-lab')

function main(value, maxDecimal, binary = null) {
  this.value = value,
  this.maxDecimal = maxDecimal,
  this.binary = binary
}

main.get = () => {
  return this.value
}

main.set = (value) => {
  this.value = value
}

main.binary.get = () => {
  return this.binary
}

main.binary.set = (value) => {
  this.binary = value
}

main.maxDecimal = () => {
  return this.maxDecimal.get()
}

main.update = {}

main.update.fromBinary = () => {
  return mathLab.update.decimalFromBinary(this.binary)
}

module.exports = main
