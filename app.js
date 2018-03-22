let argv = process.argv;

const ControllerContact = require('./controller/contact.js')

let splitSemicolon = argv[2].split(':')

let table = splitSemicolon[0];
let action = splitSemicolon[1];
let value = argv.slice(3)


if(table == 'contact'){
    if(action == 'list'){
        ControllerContact.list()
    } else if(action == 'add'){
        ControllerContact.add(value[0],value[1],value[2])
    } else if(action == 'edit'){
        ControllerContact.update(value[0],value[1],value[2],value[3])
    } else if(action == 'delete'){
        ControllerContact.destroy(value[0])
    }
}