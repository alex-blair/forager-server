exports.seed = function (knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return knex('locations').insert([
        {resourceId: 1, lat: '-36.886900', long: '174.760750', timestamp: '1490220611', description: 'Lovely sour apples'},
        {resourceId: 2, lat: '-36.862365', long: '174.761512', timestamp: '1490220611', description: 'Kind of hard to get too, but lots of lemons!'}
      ])
    })
}
