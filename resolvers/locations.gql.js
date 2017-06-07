const db = require('../db/')

const typeDefs = `
  type Location {
    id: Int
    resourceId: Int
    lat: Float
    long: Float
    timestamp: String
    edited: String
    accessibility: Int
    size: Int
    description: String
    image: String
  }
`

const resolvers = {
  Viewer: {
    locations: () => db.getLocations()
  }
}

export {
  typeDefs,
  resolvers
}
