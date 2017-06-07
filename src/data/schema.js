import { makeExecutableSchema } from 'graphql-tools'
import deepmerge from 'deepmerge'

import * as resources from '../resolvers/resources.gql'
import * as locations from '../resolvers/locations.gql'

const rootTypeDefs = `
  type Viewer {
    resources: [Resource]
    locations: [Location]
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
  resources.resolvers,
  locations.resolvers
])

const schema = {
  typeDefs: [
    rootTypeDefs,
    resources.typeDefs,
    locations.typeDefs
  ],
  resolvers
}

export default makeExecutableSchema(schema)

// const rootTypeDefs = `
//   type Viewer {
//     foo: String
//   }
//
//   type Query {
//     viewer: Viewer
//     resources: [Resource]
//   }
//
//   schema {
//     query: Query
//   }
// `
