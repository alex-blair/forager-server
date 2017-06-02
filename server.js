import express from 'express'

import schema from './data/schema'

import { apolloExpress, graphiqlExpress } from 'apollo-server'
import bodyParser from 'body-parser'

const server = express()

server.use('/graphql', bodyParser.json(), apolloExpress({
  schema,
  context: {}
}))

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

server.use(bodyParser.json())
server.use(express.static('public'))

module.exports = server
