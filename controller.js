const View = require('./view.js');
const model = require('./models');

class Controller{

    static main(argv){
        let target = argv[2];
        let command = argv[3];

        if(target == 'contact'){
            if(command == 'showAllContacts'){
                model.Contact.findAll({raw:true})
                .then(function(contactData){
                    View.showMessage(contactData);
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'add'){
                let name = argv[4];
                let email = argv[5];
                let phone = argv[6];

                model.Contact.build({
                    name: name,
                    email: email,
                    phone: phone
                }).save()
                .catch(err =>{
                    View.showMessage(err);
                })
            }else if(command == 'update'){
                let id = argv[4];
                let name = argv[5];

                model.Contact.findById(id)
                .then(function(obj){
                    obj.update({name: name})
                    .then(function(result){
                        View.showMessage('Berhasil Update!');
                    })
                    .catch(function(err){
                        View.showMessage(err);
                    })
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'delete'){
                let id = argv[4];
                model.Contact.destroy({
                    where: {
                        id: id
                    }
                })
                .then(function(result){
                    View.showMessage(result);
                })
                .catch(function(err){
                    View.showMessage(err)
                })
            }
        }else if(target == 'address'){
            if(command == 'showAllContacts'){
                model.Address.findAll({raw:true})
                .then(function(contactData){
                    View.showMessage(contactData);
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            }else if(command == 'add'){
                let street = argv[4];
                let city = argv[5];
                let zip_code = argv[6];

                model.Contact.build({
                    street: street,
                    city: city,
                    zip_code: zip_code
                }).save()
                .catch(err =>{
                    View.showMessage(err);
                })
            }
        }else if(command == 'update'){
            let id = argv[4];
            let city = argv[5];

            model.Contact.findById(id)
            .then(function(obj){
                obj.update({city: city})
                .then(function(result){
                    View.showMessage('Berhasil Update!');
                })
                .catch(function(err){
                    View.showMessage(err);
                })
            })
            .catch(function(err){
                View.showMessage(err);
            })
        }else if(command == 'delete'){
            let id = argv[4];
            model.Address.destroy({
                where: {
                    id: id
                }
            })
            .then(function(result){
                View.showMessage(result);
            })
            .catch(function(err){
                View.showMessage(err)
            })
        }
    }
}

module.exports = Controller;