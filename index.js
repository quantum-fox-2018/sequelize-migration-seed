const Controller = require('./controller/controller')

const argv = process.argv
Controller.routes(argv)