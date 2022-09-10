const express = require('express')
const router = express.Router()
const config = require('../Config/todo')

router.route('/').get(config.GET)

module.exports = router