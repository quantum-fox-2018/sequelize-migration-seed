"use strict"
const Model = require('./models');
const View = require('./view');

class Controller {
    // CRUD Contacts
    static showListContact() {
        Model.Contact.findAll({
            raw: true
        })
        .then((data) => {
        View.showData(data)
        })
        .catch((err) => {
        View.showErrorMessage(err)
      });
    }

    static addContact(name, email, phone) {
        Model.Contact.create({
            raw: true
        }, {
            name: name,
            email: email,
            phone: phone,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then((data) => {
            View.showData(data);
        })
        .catch((err) => {
            View.showErrorMessage(err);
        });
    }

    static updateContact(id, column, value) {
        let newData;
        switch(column) {
            case 'name':
            newData = {name: value};
            break;
            case 'email':
            newData = {email: value};
            break;
            case 'phone':
            newData = {phone: value};
            break;
        }

        Model.Contact.update(newData, {where: {id: id} })
        .then((data) => {
            View.showData(data);
        })
        .catch((err) => {
            View.showErrorMessage(err);
        });
    }

    static deleteContact(id) {
        Model.Contact.destroy({where: {id: id} })
        .then((data) => {
            View.showData(data);
        })
        .catch((err) => {
            View.showErrorMessage(err);
        });
    }

    // CRUD Addresses
    static showListAddress() {
        Model.Adress.findAll({
            raw: true
        })
        .then((data) => {
        View.showData(data)
        })
        .catch((err) => {
        View.showErrorMessage(err)
      });
    }

    static addAddress(street, city, zip_code) {
        Model.Adress.create({
            raw: true
        }, {
            street: street,
            city: city,
            zip_code: zip_code,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then((data) => {
            View.showData(data);
        })
        .catch((err) => {
            View.showErrorMessage(err);
        });
    }

    static updateAddress(id, column, value) {
        let newData;
        switch(column) {
            case 'street':
            newData = {street: value};
            break;
            case 'city':
            newData = {city: value};
            break;
            case 'zip_code':
            newData = {zip_code: value};
            break;
        }

        Model.Adress.update(newData, {where: {id: id} })
        .then((data) => {
            View.showData(data);
        })
        .catch((err) => {
            View.showErrorMessage(err);
        });
    }

    static deleteAddress(id) {
        Model.Adress.destroy({where: {id: id} })
        .then((data) => {
            View.showData(data);
        })
        .catch((err) => {
            View.showErrorMessage(err);
        });
    }
    
}

module.exports = Controller;