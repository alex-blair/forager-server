const db = require('../db/')

const typeDefs = `
  type Resource {
    variety: String
    type: String
    resource: String
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
