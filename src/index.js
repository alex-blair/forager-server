var server = require('./server')

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('GraphQL Server is now running on', PORT)
})
