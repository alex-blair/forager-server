const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', function (req, res) {
  db.getResources()
  .then(function (result) {
    console.log(result)
    res.send(result)
  })
})

module.exports = router
