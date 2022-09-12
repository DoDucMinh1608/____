const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
  res.render('chat/index')
})
router.route('/log-in').get((req, res) => {
  res.render('chat/log-in')
})
module.exports = router