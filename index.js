const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'src', "views"));

app.use('/', require('./src/routes/Routes/index'))

app.listen(3000, () => console.log('Listen on port 3000...'))