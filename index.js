const argv = process.argv
const Controller = require("./controller/controller.js");

let table = argv[2];
let command = argv[3]
let input = argv.slice(4)

Controller.getCommand(table, command, input)
