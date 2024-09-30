const sqliteConnection = require('../../sqlite')
const { createFoods } = require('./createFoods') 
const { createUsers } = require('./createUsers') 
const { createOrders } = require('./createOrders') 
const { createOrderItems } = require('./createOrderItems') 



async function migrationsRun(){
  const schemas = [
    createFoods,
    createUsers,
    createOrders,
    createOrderItems
    
  ].join(''); 

  sqliteConnection()
    .then(db => db.exec(schemas))
    .catch(error => console.error(error))
}

module.exports = migrationsRun
