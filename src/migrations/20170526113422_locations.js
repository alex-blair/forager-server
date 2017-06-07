exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('locations', function (table) {
    table.increments('id').primary()
    table.integer('resourceId').references('resources.id')
    table.decimal('lat', 18, 6)
    table.decimal('long', 18, 6)
    table.string('timestamp')
    table.string('edited')
    table.integer('accessibility')
    table.integer('size')
    table.string('description')
    table.string('image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('locations')
}
