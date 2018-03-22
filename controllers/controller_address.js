const {Address} = require('../models/')
const ViewAddress = require('../views/view_address')
const Chalk = require('chalk')

class AddressController {
    constructor() {
        
    }

    static showAddress(){
        Address.findAll({raw:true})
        .then(dataAddress => {
            ViewAddress.showAddress(dataAddress)
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    static addAddress(street, city, zip_code){
        Address.create({
            street: street,
            city: city,
            zip_code: zip_code
        })
        .then((dataAddress) => {
            let arrAddress = []
            arrAddress.push(dataAddress)
            ViewAddress.showAddress(arrAddress)
            console.log(Chalk.red('ADD Address SUCCESS!!!!'))
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
    }

    static updateAddress(option){
        var dataid = option[0]
        var column = option[1]
        var value = option[2]
        // console.log(id, column, value)
        Address.update({
            [column]: value
        }, {
            where: {
                id: dataid
            }
        })
        .then(() => {
            console.log(Chalk.red(`UPDATE Address WITH ID "${dataid}" SUCCESS!!!!`))
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
    }

    static deleteAddress(AddressId){
        Address.destroy({
            where: {
                id: AddressId
            }
        })
        .then(()=>{
            console.log(Chalk.red(`DATA ID "${AddressId}" HAS BEEN DELETED!!!!`))
            process.exit()
        })
        .catch(err => {
            console.log(err)
        })
    }

}

// AddressController.showAddress()
module.exports = AddressController