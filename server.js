const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const server = express()

const resources = require('./routes/resources')

let schema = buildSchema(`
  type Query {
    hello: String
  }
`)

let root = {
  hello: () => {
    return 'Hello world!'
  }
}

server.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))
server.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')

server.use(bodyParser.json())
server.use(express.static('public'))
// server.use(express.static(path.join(__dirname, './public')))

server.use('/resources', resources)

module.exports = server
