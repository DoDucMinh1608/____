const express = require('express')
const config = require('../Config/index')
const router = express.Router()

router.route('/').get(config.GET)

module.exports = router