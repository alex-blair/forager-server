const test = require('ava')
const knex = require('knex')

const config = require('../knexfile').test
const db = require('./db')

// Create a separate in-memory database before each test.
// In our tests, we can get at the database as `t.context.db`.
test.beforeEach(function (t) {
  t.context.db = knex(config)
  return t.context.db.migrate.latest()
    .then(function () {
      return t.context.db.seed.run()
    })
})

// Destroy the database connection after each test.
test.afterEach(function (t) {
  t.context.db.destroy()
})

test('getResources gets all the resources', function (t) {
  let expected = 2
  return db.getResources(t.context.db)
    .then(function (result) {
      let actual = result.length
      t.is(actual, expected)
    })
})
