// const path = require('path')
const express = require('express')

const server = express()

const resources = require('./routes/resources')

server.use('/resources', resources)

module.exports = server
