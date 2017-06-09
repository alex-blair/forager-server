const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getResources: getResources,
  getLocations: getLocations
}

function getResources (testDb) {
  const db = testDb || connection
  return db('resources').select()
}

function getLocations (testDb) {
  const db = testDb || connection
  return db('locations').select()
}
