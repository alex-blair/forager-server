exports.seed = function (knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {category: 'Fruit', item: 'Apples', variety: 'unknown', availabilityNorth: 'August-October', availabilitySouth: 'February-April'},
        {category: 'Fruit', item: 'Lemons', variety: 'unknown', availabilityNorth: 'Summer', availabilitySouth: 'Summer'}
      ])
    })
}
