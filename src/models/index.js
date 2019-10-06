var mongoose = require('mongoose')
var Record = require('./record')

/**
 * Creat MongoDB connection promise
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
// Export models and connection
module.exports = { connectDb, models }
