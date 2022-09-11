const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const server = require('./src/server/server')

const app = express()
const Server = new server(app)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'src', "views"));

app.use('/', require('./src/routes/Routes/index'))
app.use('/todo', require('./src/routes/Routes/todo'))
app.use('/chat', require('./src/routes/Routes/chatapp'))

mongoose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to the db...'))
Server.init(3000)