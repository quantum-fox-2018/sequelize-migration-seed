const models = require('./models');
const Controller = require('./controller.js');

// models.Contact.findById(1).then(value => {
let argv = process.argv
Controller.input(argv[2], argv.slice(3))
