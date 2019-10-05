var express = require('express')
var router = express.Router()
var { models } = require('../models')

async function query(req) {
  const filteredRecords = await models.Record.aggregate([
    {
      "$project": {
        "key": 1,
        "createdAt": 1,
        "totalCount": {
          "$sum": "$counts"
        },
      }
    },
    {
      $match: {
        $and: [{
          createdAt: {
            $gte:
              new Date(req.startDate), $lte: new Date(req.endDate)
          }
        }, {
          totalCount: {
            $gte: req.minCount,
            $lte: req.maxCount
          }
        }]
      }
    }
  ])
  return filteredRecords;
}

/* GET home page. */
router.post('/', function (req, res, next) {
  const objects = query(req.body);
  objects.then(res.send.bind(res));
})

module.exports = router
