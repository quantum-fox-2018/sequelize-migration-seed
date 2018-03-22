const Models = require('../models/index')
const Views = require('../views/contact')

class ControllerContact {
    static list(){
        Models.Contact.findAll({raw:true})
        .then(dataContact => {
            Views.list(dataContact)
        })
    }

    static add(name,email,phone){
        Models.Contact.create({
            name: name,
            email: email,
            phone: phone,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then(row =>{
            Views.notifAdd(`Data ${row.dataValues.id}, ${row.dataValues.name} berhasil ditambahkan !`)
        })
    }

    static update(id,column,value){
        Models.Contact.update({
            [column]: value,
            updatedAt: new Date()
        },{
            where: { id: id }
        })
        .then(() =>{
            Views.notifUpdate(`Data ${id}, ${value} berhasil di update !`)
        })
    }

    static destroy(id){

        Models.Contact.destroy({
            where: {
              id: id
            }
        })
        .then(() =>{
            Views.notifDestroy(`Data ${id} berhasil terhapus !`)
        })
    }
}

module.exports = ControllerContact;