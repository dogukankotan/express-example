var express = require('express')
var router = express.Router()
var { models } = require('../models')

async function run () {
  // Find all data

  const docs = await models.Record.find({ counts: { $lte: 100 } })
  console.log(docs)
  return docs
}

/* GET home page. */
router.get('/', function (req, res, next) {
  var docs = run()
  res.send(docs)
})

module.exports = router
