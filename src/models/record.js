var mongoose = require('mongoose')

/* Model
{
   counts: [ 0, 600, 500 ],
    _id: 58adc57a1f84e37c19df0cfc,
    key: 'lXTIcYVZIuzxrP01',
    value: 'QYV8Jr6Kn52OrnL35HWTcWNkl2FcPH3Hc0Q5AtnW5D1UCjrIFSZNcfMWCSsIW7NqdukbL6oshFlBmhgb8wbvqN39qTKCckJ499LzaRYgY87Qszv00DdVJghXGvWYbFiaR5cRQqHsAnkX',
    createdAt: 2016-09-09T05:07:22.324Z
    },
*/
const recordSchema = new mongoose.Schema({
  key: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date
  },
  counts: {
    type: Array
  }
})

// Create filter for data and counts
recordSchema.statics.findByDateAndCounts = async function (startDate, endDate, minCount, maxCount) {
  return this.aggregate([
    {
      $project: {
        key: 1,
        createdAt: 1,
        totalCount: {
          $sum: '$counts'
        }
      }
    },
    {
      $match: {
        $and: [{
          createdAt: {
            $gte:
              new Date(startDate),
            $lte: new Date(endDate)
          }
        }, {
          totalCount: {
            $gt: parseInt(minCount),
            $lt: parseInt(maxCount)
          }
        }]
      }
    }
  ])
}

// create model
const Record = mongoose.model('Record', recordSchema)

// export model
module.exports = Record
