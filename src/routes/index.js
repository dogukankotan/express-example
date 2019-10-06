var express = require('express')
var router = express.Router()
const { check, validationResult } = require('express-validator')
var { models } = require('../models')

// https://stackoverflow.com/questions/47056283/typeerror-req-checkbody-optional-isdate-is-not-a-function
function isValidDate (value) {
  if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false

  const date = new Date(value)
  if (!date.getTime()) return false
  return date.toISOString().slice(0, 10) === value
}

/* POST home page method. */
router.post('/', [
  check('startDate').custom(isValidDate).withMessage('the startDate must be valid'),
  check('endDate').custom(isValidDate).withMessage('the endDate must be valid'),
  check('minCount').isNumeric(),
  check('maxCount').isNumeric()
], function (req, res, next) {
  // get request body
  const body = req.body
  // create default response
  const response = {
    code: 200,
    msg: 'Success',
    records: [
    ],
    errors: [

    ]
  }
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    response.msg = 'Bad Request: Please check errors'
    response.code = 400
    response.errors = errors.array()
    res.status(400).send(response)
    return
  }

  try {
    // get filtered data from db
    var objects = models.Record.findByDateAndCounts(body.startDate, body.endDate, body.minCount, body.maxCount)
  } catch (err) {
    console.log(err)
    // return the error user
    response.msg = 'Database Fetching Error: ' + err
    response.code = 500
    res.status(500).send(response)
    return
  }

  // fetch objects
  objects.then(
    function (val) {
      // check is there any object
      if (val.length < 1) {
        response.msg = 'Not Found'
        response.code = 404
        res.status(404).send(response)
        return
      }
      // send the objects
      response.records = val
      res.send(response)
    }
  )
})

module.exports = router
