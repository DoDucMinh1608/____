const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const server = require('./src/server/')

const app = express()
const Server = new server(app)

app.use(express.static(path.join(__dirname, 'src', 'clients', 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'src', 'clients', "views"));

app.use('/', require('./src/server/routes/index'))
app.use('/todo', require('./src/server/routes/todo'))
app.use('/chat', require('./src/server/routes/chatapp'))

mongoose.connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to the db...'))

Server.addServer('/uwu').on('connection', socket => {
  console.log('hello')
  socket.on('hello', (data) => console.log(data))
})

Server.init(3000)