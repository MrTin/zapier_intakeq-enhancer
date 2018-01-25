global.fetch = require('node-fetch')
global.inputData = require('./config.json')

console.log("Using test configuration:")
console.log(inputData)
console.log("")

global.callback = function(error, outputData) {
  console.log("\nResult from invoking custom code:")
  console.log(outputData)
}

require('./index.js')
