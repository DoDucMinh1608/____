const express = require('express')
const router = express.Router()
const config = require('../Config/chatapp')

router.route('/').get(config.GET)

module.exports = router