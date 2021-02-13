const View = require('../views')
const Models = require('../models');

class Controller {

    static routes(argv_data) {
        let command = argv_data[0];
        let input_data = argv_data.splice(1);

        switch(command) {
            case 'help': this.help(); break;
            case 'contacts:list': this.contactslist(); break;
            case 'contacts:add': this.contactsadd(input_data); break;
            case 'contacts:update': this.contactsupdate(input_data); break;
            case 'contacts:delete': this.contactsdelete(input_data); break;
            default: this.help();
        }
    }

    static help() {
        View.help();
    }

    static contactslist() {
        Models.Contact.findAll({raw:true}).then(contacts_data => {
            View.contactslist(contacts_data)
            process.exit();
        })
    }

    static contactsadd(input_data) {
        let name = input_data[0];
        let email = input_data[1];
        let phone = input_data[2];
        let createdAt = new Date();
        let updatedAt = new Date();

        Models.Contact.create({ name:name,email:email,phone:phone,createdAt:createdAt,updatedAt:updatedAt })
        .then(new_data => {
            View.contactsadd(new_data.dataValues);
            process.exit();
        }); 
    }

    static contactsupdate(input_data) {
        let id = input_data[0];
        let column = input_data[1];
        let value = input_data[2];
        
        Models.Contact.update({[column]:value},{where: {id:id}})
        .then(() => {
            View.contactsadd(id);
            process.exit();
        });   
    }

    static contactsdelete(input_data) {
        let id = input_data[0]

        Models.Contact.destroy({where:{id:id}})
        .then(() => {
            View.deleteadd(id);
            process.exit();
        })
    }


}

module.exports = Controller;