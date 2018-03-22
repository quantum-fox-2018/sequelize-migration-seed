const model = require('./models');

model.Contact.findAll({raw:true}).then(projects => {
  console.log(projects);
})
