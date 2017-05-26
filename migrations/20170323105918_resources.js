exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('resources', function (table) {
    table.increments('id').primary()
    table.string('type')
    table.string('resource')
    table.string('variety')
    table.string('availabilityNorth')
    table.string('availabilitySouth')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('resources')
}
