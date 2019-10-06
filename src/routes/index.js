var express = require('express')
var router = express.Router()
var { models } = require('../models')

/* GET home page. */
router.post('/', function (req, res, next) {
  const body = req.body
  try {
    var objects = models.Record.findByDateAndCounts(body.startDate, body.endDate, body.minCount, body.maxCount)
  } catch (err) {
    console.log(err)
  }
  objects.then(
    res.send.bind(res)
  )
})

module.exports = router
