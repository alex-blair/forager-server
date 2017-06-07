'use strict';

var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];
var knex = require('knex')(config);

function getResources() {
  return knex('resources');
}

function getLocations() {
  return knex('locations');
}

module.exports = {
  getResources: getResources,
  getLocations: getLocations
};