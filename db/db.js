const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getResources: getResources
}

function getResources () {
  return knex ('resources')
}
