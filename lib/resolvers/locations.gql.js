'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
var db = require('../db/')

var typeDefs = '\n  type Location {\n    id: Int\n    resourceId: Int\n    lat: Float\n    long: Float\n    timestamp: String\n    edited: String\n    accessibility: Int\n    size: Int\n    description: String\n    image: String\n  }\n'

var resolvers = {
  Viewer: {
    locations: function locations () {
      return db.getLocations()
    }
  }
}

exports.typeDefs = typeDefs
exports.resolvers = resolvers
