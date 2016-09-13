
const mathLab = require('./math-lab')

function main(decimalArrayOrigin) {
  //algo esta muito ruim aqui tenho que rever tudo

  if (decimalArray === undefined) {
    throw new Error("[fast-genetic] decimalArray is undefined")
  }

  const decimalArray = mathLab.Copy(decimalArrayOrigin)
  const binaryArray = mathLab.update.Array_decimalFromBinary(decimalArray)
  
  this.decimal = decimalArray
  this.binary = binaryArray

  switch(type) {
    case 'decimalArrayOrigin':
      binaryArray = Array
      decimalArray = mathLab.update.Array_binaryFromDecimal(binaryArray)
      break;
    
    case 'decimalArray':
      decimalArray = Array
      binaryArray = mathLab.update.Array_decimalFromBinary(decimalArray)
      break;
    
    default:
      throw new Error("[fast-genetic] type not in [binaryArray, decimalArray]")
  }

  if (decimalArray !== undefined) {
    decimalArray
  } else if (binaryArray !== undefined) {

  } else {

  }


  this.decimal = decimalArray
  this.binary = binaryArray
}

main.prototype = {
  Aa: function () {}
}

module.exports = main


mathLab.update.Array_binaryFromDecimal(binaryArray)

main.update.Array_decimalFromBinary(decimalArray)