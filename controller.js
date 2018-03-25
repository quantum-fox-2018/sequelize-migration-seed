const Models = require('./models')
const View = require('./view.js')

class Controller {

    static contactList() {

        Models.Contact.findAll({raw:true}).then(data => {
            View.display(data)

            process.exit()  
        })
    }

    static addContact(name, email, phone) {

        Models.Contact.create(
            {name:name,email:email,phone:phone}
        ).then(() => {
            
            View.display('Success')
            process.exit()
        })
        .catch(err => {console.log(err);
        })
    }

    static updateContact(idUser, column, value) {

        Models.Contact.update({
            [column]:value
        }, {
            where:{id:idUser}
        }).then(info => {
            if(info == 1) {

                View.display('Update success')
            } else {

                View.display(err)
            }
            process.exit()
        })
    }

    static removeContact(idUser) {

        Models.Contact.destroy({
            where: {id:idUser}
        }).then(info => {

            if(info == 1){

            View.display('Delete Success')
            } else {

                View.display(err)
            }

            process.exit()
        })
    }

    static addressList() {

        Models.Address.findAll({raw:true}).then(data => {
            View.display(data)

            process.exit()  
        })
    }

    static addAddress(streetNew, cityNew, zip_codeNew) {

        Models.Address.create(
            {street:streetNew,city:cityNew,zip_code:zip_codeNew}
        ).then(() => {
            
            View.display('Success')
            process.exit()
        })
        .catch(err => {console.log(err);
        })
    }

    static updateAddress(idAddress, column, value) {

        Models.Address.update({
            [column]:value
        }, {
            where:{id:idAddress}
        }).then(info => {
            if(info == 1) {

                View.display('Update success')
            } else {

                View.display(err)
            }
            process.exit()
        })
    }

    static removeAddress(idAddress) {

        Models.Address.destroy({
            where: {id:idAddress}
        }).then(info => {

            if(info == 1){

            View.display('Delete Success')
            } else {

                View.display(err)
            }

            process.exit()
        })
    }
}
module.exports = Controller