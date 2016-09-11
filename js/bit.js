
function main(value) {
  this.value = value
}

main.get = () => {
  return this.value
}

main.set = (value) => {
  this.value = value
}

module.exports = main
