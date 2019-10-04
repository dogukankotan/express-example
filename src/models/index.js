var mongoose = require('mongoose')
var Record = require('./record')

/**
 * Connect mongodb database.
 */
const connectDb = () => {
  try {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  } catch (err) {
    console.error('Database connection error:')
  }
  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'Database error:'))
  db.once('open', function () {
    console.log('Database connected.')
  })

  return db
}

const models = { Record }

module.exports = { connectDb, models }
