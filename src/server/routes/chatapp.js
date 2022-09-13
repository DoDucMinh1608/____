const express = require('express')
const router = express.Router()
const Account = require('../db/account')

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
  const newAccount = new Account({ username: data.username, password: data.password })
  await newAccount.save()
  res.redirect('./log-in')
})
module.exports = router