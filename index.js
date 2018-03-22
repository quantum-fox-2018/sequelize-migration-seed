"use strict"
const Controller = require('./controller');
const argv = process.argv;
const input = {
    argv1: argv[3],
    argv2: argv[4],
    argv3: argv[5],
    argv4: argv[6],
};

switch (argv[2]) {
    case 'contacts:list':
    Controller.showListContact();
    break;
    case 'contacts:add':
    Controller.addContact(input.argv1, input.argv2, input.argv3);
    break;
    case 'contacts:update':
    Controller.updateContact(input.argv1, input.argv2, input.argv3);
    break;
    case 'contacts:delete':
    Controller.deleteContact(input.argv1);
    break;
    case 'addresses:list':
    Controller.showListAddress();
    break;
    case 'addresses:add':
    Controller.addAddress(input.argv1, input.argv2, input.argv3);
    break;
    case 'addresses:update':
    Controller.updateAddress(input.argv1, input.argv2, input.argv3);
    break;
    case 'addresses:delete':
    Controller.deleteAddress(input.argv1);
    break;
}