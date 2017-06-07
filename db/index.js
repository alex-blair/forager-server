const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

function getResources () {
  return knex('resources')
}

function getLocations () {
  return knex('locations')
}

module.exports = {
  getResources: getResources,
  getLocations: getLocations
}
