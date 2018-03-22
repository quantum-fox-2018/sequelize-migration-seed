const Controller = require('./controller/controller.js');

let input = process.argv;
let command = input[2];

switch (command) {
  case 'contacts:list':
    Controller.list();
    break;
  case 'contacts:add':
    Controller.add(input[3], input[4], input[5]);
    break;
  case 'contacts:update':
    Controller.update(input[3], input[4]);
    break;
  case 'contacts:delete':
    Controller.delete(input[3]);
    break;
  default:
}
