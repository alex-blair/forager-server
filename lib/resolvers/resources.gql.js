'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
var db = require('../db/')

var typeDefs = '\n  type Resource {\n    id: Int\n    category: String\n    item: String\n    variety: String\n    availabilityNorth: String\n    availabilitySouth: String\n  }\n'

var resolvers = {
  Viewer: {
    resources: function resources () {
      return db.getResources()
    }
  }
}

exports.typeDefs = typeDefs
exports.resolvers = resolvers
