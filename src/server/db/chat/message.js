const { Schema, model } = require('mongoose')

const message = new Schema({
  content: { type: String, minlength: 1, maxlength: 2000, required: true },
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  location: { type: Schema.Types.ObjectId, ref: 'chatRoom', required: true }
})

module.exports = model('Messaage', message)