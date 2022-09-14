const { Schema, model } = require('mongoose')

const account = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true, minlength: 6 },
  own: { type: [Schema.Types.ObjectId], ref: 'chatRoom' },
  chatroom: { type: [Schema.Types.ObjectId], ref: 'chatRoom' },
  date: { type: Date, default: Date.now },
})

module.exports = model('Account', account)