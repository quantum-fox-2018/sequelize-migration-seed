const ContactController = require('./controller_contact')
const AddressController = require('./controller_address')

class Controller {
    constructor() {
        
    }

    static checkSyntax(syntax, value){
        const value1 = value[0]
        const value2 = value[1]
        const value3 = value[2]
        if(syntax == 'contacts:list'){
            // console.log(value)
            ContactController.showContact()
        }
        else if(syntax == 'contacts:add'){
            ContactController.addContact(value1, value2, value3)
        }
        else if(syntax == 'contacts:update'){
            ContactController.updateContact(value)
        }
        else if(syntax == 'contacts:delete'){
            ContactController.deleteContact(value1)
        }
        else if(syntax == 'addresses:list'){
            AddressController.showAddress()
        }
        else if(syntax == 'addresses:add'){
            AddressController.addAddress(value1, value2, value3)
        }
        else if(syntax == 'addresses:update'){
            AddressController.updateAddress(value)
        }
        else if(syntax == 'addresses:delete'){
            AddressController.deleteAddress(value1)
        }
    }

}

module.exports = Controller