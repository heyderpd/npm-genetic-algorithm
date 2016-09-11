
function main(value, padding, decimal) {
  this.value = value,
  this.padding = padding,
  this.decimal = decimal
}

main.get = () => {
  return this.value
}

main.set = (value) => {
  this.value = value
}

main.padding.get = () => {
  return this.padding
}

main.decimal.get = () => {
  return this.decimal
}

main.decimal.set = (value) => {
  this.decimal = value
}

module.exports = main
