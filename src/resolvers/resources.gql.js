const db = require('../db/')

const typeDefs = `
  type Resource {
    id: Int
    category: String
    item: String
    variety: String
    availabilityNorth: String
    availabilitySouth: String
  }
`

const resolvers = {
  Viewer: {
    resources: () => db.getResources()
  }
}

export {
  typeDefs,
  resolvers
}
