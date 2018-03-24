const model = require('../models/index.js');
const view = require('../view/view.js');

class Controller {
  constructor() {

  }

  static getCommand(table, command, input){

    if (table == 'contact') {

      switch (command) {

        case 'list': {model.Contact.findAll({raw: true}).then(projects => {view.show(projects)}); break;}

        case 'add' :{ model.Contact.create({

                        name: input[0],
                        email: input[1],
                        phone: input[2],
                        createdAt: new Date,
                        updatedAt: new Date

                        }).then(newUser => {

                          view.show(`New user ${newUser.name}, with id ${newUser.id} has been created.`);

                      }); break;}

        case 'update':{ if (input[1] == 'name'){

                        model.Contact.findOne({ where: {id: input[0]} }).then(project => {

                          project.updateAttributes({

                            name: String(input.slice(2).join(' '))

                          });

                        })

                      }

                      if (input[1] == 'email') {

                        model.Contact.findOne({ where: {id: input[0]} }).then(project => {

                          project.updateAttributes({

                            email: String(input.slice(2).join(' '))

                          });

                        })

                      }

                      if (input[1] == 'phone') {

                        model.Contact.findOne({ where: {id: input[0]} }).then(project => {

                          project.updateAttributes({

                            phone: String(input.slice(2).join(' '))

                          });

                        })

                      };break;}

        case 'delete':{ model.Contact.destroy({ where: { id: input } }).then(projects => {

                        view.show(`Contact with id ${input} is deleted !`);

                      }) ;break;}

        default: {view.show(`ex: node index.js contact add name email phone`)}

      }

    }

    if (table == 'address') {

      switch (command) {

        case 'list':{ model.Address.findAll({raw: true}).then(projects => {

                      view.show(projects);

                    }) ;break;}

        case 'add':{ model.Address.create({

                      street: input[0],
                      city: input[1],
                      zip_code: input[2],
                      createdAt: new Date,
                      updatedAt: new Date

                     }).then(newUser => {

                        view.show(`New user ${newUser.name}, with id ${newUser.id} has been created.`);

                    }); break;}

        case 'update':{ if (input[1] == 'street'){

                        model.Address.findOne({ where: {id: input[0]} }).then(project => {

                          project.updateAttributes({

                            street: String(input.slice(2).join(' '))

                          });

                        })

                      }

                      if (input[1] == 'city') {

                        model.Address.findOne({ where: {id: input[0]} }).then(project => {

                          project.updateAttributes({

                            city: String(input.slice(2).join(' '))

                          });

                        })

                      }

                      if (input[1] == 'zip_code') {

                        model.Address.findOne({ where: {id: input[0]} }).then(project => {

                          project.updateAttributes({

                            zip_code: +(input.slice(2).join(' '))

                          });

                        })

                      }; break;}

        case 'delete':{ model.Address.destroy({ where: { id: 10 }}).then(projects => {

                        view.show(`Address with id ${input} is deleted !`);

                      }); break;}

        default: {view.show(`ex: node index.js address add street city zip_code`)}

      }

    } else {

      view.show(`node index.js [table] [command] [optional[input]]`)

    }

  }

}

module.exports = Controller;
