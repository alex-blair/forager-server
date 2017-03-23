
exports.seed = function(knex, Promise) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert([
        {id: 1, type: 'Apple Tree', lat:'-36.886900', long:'174.760750', timestamp:'1490220611', notes:'Lovely sour apples'},
        {id: 2, type: 'Lemon Tree', lat:'--36.862365', long:'174.761512', timestamp:'1490220611', notes:'Kind of hard to get too, but lots of lemons!'},
        {id: 3, type: 'Feijoa Tree', lat:'-36.867336', long:'174.759657', timestamp:'1490220611', notes:'A huge tree overhanging a fence'}
      ])
    })
}
