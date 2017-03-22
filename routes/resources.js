const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', function (req, res) {
  db.getResources()
  .then(function (resources) {
    console.log(resources)
    res.send({resources: resources})
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
