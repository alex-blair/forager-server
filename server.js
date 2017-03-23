const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

const resources = require('./routes/resources')

server.use(bodyParser.json())
server.use(express.static('public'))
// server.use(express.static(path.join(__dirname, './public')))

server.use('/resources', resources)

module.exports = server
