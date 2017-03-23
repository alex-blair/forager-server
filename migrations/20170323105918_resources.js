
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('resources', function (table) {
    table.increments('id').primary()
    table.string('type')
    table.decimal(18,8)('lat')
    table.decimal(18,8)('long')
    table.integer('timestamp')
    table.string('notes')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resources')
}
