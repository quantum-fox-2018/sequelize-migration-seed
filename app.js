const argv = process.argv

const Controller = require('./controllers/Controller.js')

let execute = new Controller(argv[2],argv.slice(3))

execute.execute()
