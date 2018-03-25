const model = require('./models');

model.Address.findAll({raw:true}).then(projects => {
  console.log(projects);
})
