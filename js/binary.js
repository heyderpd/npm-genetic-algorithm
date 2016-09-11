
function main() {
  this.value = null
}

main.get = () => {
  return this.value
}

main.set = (value) => {
  this.value = value
}

module.exports = main
