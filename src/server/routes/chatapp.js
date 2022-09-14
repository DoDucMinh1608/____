const express = require('express')
const Account = require('../db/account')
const chatRoom = require('../db/chat/chatroom')

const AccountSm = Account.schema.obj

const router = express.Router()
router.route('/').get((req, res) => {
  res.render('chat/index')
})

router.route('/log-in').get((req, res) => {
  res.render('chat/log-in')
}).post(async (req, res) => {
  const data = req.body
  const account = await Account.findOne({ username: data.username, password: data.password })
  if (!account) return res.render('chat/log-in', { error: 'pass or acc wrong' })
  res.render('chat/log-in', { id: account._id + '', name: account.username })
})

router.route('/register').get((req, res) => {
  res.render('chat/register')
}).post(async (req, res) => {
  const data = req.body
  try {
    const newAccount = new Account({ username: data.username, password: data.password })
    await newAccount.save()
  } catch (e) {
    let error;
    if (!data.username) error = 'insert username'
    else if (!data.password) error = 'insert password'
    else if (data.password.length < AccountSm.password.minlength) error = 'need longer password'
    return res.render('chat/register', { error })
  }
  res.redirect('./log-in')
})

router.route('/e').post(async (req, res) => {
  const user = await Account.findById(req.body.ID)
  if (user) return res.send('Validate')
  res.send('Invalid')
}).get((req, res) => {
  res.render('chat/e', { layout: 'layouts/layoutB' })
})

router.route('/create-server').post(async (req, res) => {
  const data = req.body;

  const account = await Account.findById(data['server-owner'])

  const newChatRoom = new chatRoom({
    name: data['server-name'],
    owner: account,
    members: [account]
  })
  account.own.push(newChatRoom)

  await newChatRoom.save()
  await account.save()

  res.render('chat/index', account)
})
module.exports = router