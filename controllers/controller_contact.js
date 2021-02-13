const {Contact} = require('../models/')
const ViewContact = require('../views/view_contact')
const Chalk = require('chalk')

class ContactController {
    constructor() {
        
    }

    static showContact(){
        Contact.findAll({raw:true})
        .then(dataContact => {
            ViewContact.showContact(dataContact)
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    static addContact(name, email, phone){
        Contact.create({
            name: name,
            email: email,
            phone: phone
        })
        .then((dataContact) => {
            let arrContact = []
            arrContact.push(dataContact)
            ViewContact.showContact(arrContact)
            console.log(Chalk.red('ADD CONTACT SUCCESS!!!!'))
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
    }

    static updateContact(option){
        var dataid = option[0]
        var column = option[1]
        var value = option[2]
        // console.log(id, column, value)
        Contact.update({
            [column]: value
        }, {
            where: {
                id: dataid
            }
        })
        .then(() => {
            console.log(Chalk.red(`UPDATE CONTACT WITH ID "${dataid}" SUCCESS!!!!`))
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
    }

    static deleteContact(contactId){
        Contact.destroy({
            where: {
                id: contactId
            }
        })
        .then(()=>{
            console.log(Chalk.red(`DATA ID "${contactId}" HAS BEEN DELETED!!!!`))
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
    }

}

// ContactController.showContact()
module.exports = ContactController