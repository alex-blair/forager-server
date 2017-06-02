import { makeExecutableSchema } from 'graphql-tools'
import deepmerge from 'deepmerge'

import * as resources from '../resolvers/resources.gql'

const rootTypeDefs = `
  type Viewer {
    resources: [Resource]
  }

  type Query {
    viewer: Viewer
  }

  schema {
    query: Query
  }
`

const rootResolver = {
  Query: {
    viewer: () => {
      return {}
    }
  }
}

const resolvers = deepmerge.all([
  rootResolver,
  resources.resolvers
])

const schema = {
  typeDefs: [
    rootTypeDefs,
    resources.typeDefs
  ],
  resolvers
}

export default makeExecutableSchema(schema)
