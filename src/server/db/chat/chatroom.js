const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const chatRoom = new Schema({
  name: { type: String, required: true, minlength: 1 },
  messages: { type: [Schema.Types.ObjectId], ref: 'Message', default: [] },
  members: { type: [Schema.Types.ObjectId], ref: 'Account', default: [] },
})

module.exports = model('chatRoom', chatRoom)