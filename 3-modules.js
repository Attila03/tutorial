
const names = require('./4-names')
const sayHello = require('./5-utils')
const data = require('./6-alternative-export')

require('./7-program')

sayHello("Aditya")
sayHello(names.john)
sayHello(names.peter)

console.log(data);