exports.seed = function (knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {type: 'Fruit', resource: 'Apples', variety: 'unknown', availabilityNorth: 'August-October', availabilitySouth: 'February-April'},
        {type: 'Fruit', resource: 'Lemons', variety: 'unknown', availabilityNorth: 'Summer', availabilitySouth: 'Summer'}
      ])
    })
}
