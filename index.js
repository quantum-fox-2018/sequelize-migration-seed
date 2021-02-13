const Controller = require('./controllers/index')

const argv = process.argv
const syntax = argv[2]
const value = argv.slice(3)
const value1 = value[0]
const value2 = value[1]
const value3 = value[2]

// console.log(syntax, value1, value2, value3)
Controller.checkSyntax(syntax, value)