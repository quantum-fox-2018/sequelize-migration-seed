const {Contact, Address} = require('./controller/controller.js');

let input = process.argv;
let command = input[2];

switch (command) {
  case 'contacts:list':
    Contact.list();
    break;
  case 'contacts:add':
    Contact.add(input[3], input[4], input.slice(5).join(' '));
    break;
  case 'contacts:update':
    Contact.update(input[3], input[4], input.slice(5).join(' '));
    break;
  case 'contacts:delete':
    Contact.delete(input[3]);
    break;

  case 'addresses:list':
    Address.list();
    break;
  case 'addresses:add':
    Address.add(input[3], input[4], input.slice(5).join(' '));
    break;
  case 'addresses:update':
    Address.update(input[3], input[4], input.slice(5).join(' '));
    break;
  case 'addresses:delete':
    Address.delete(input[3]);
    break;
  default:
}
