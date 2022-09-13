const mongoose = require('mongoose')

const account = new mongoose.Schema({
  username: String,
  password: String
})

module.exports = mongoose.model('Account', account)