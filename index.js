const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const ejsLayouts = require('express-ejs-layouts')

const app = express()
const Server = new (require('./src/server/'))(app)

app.use(express.static(path.join(__dirname, 'src', 'clients', 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(ejsLayouts)

app.set("view engine", "ejs");
app.set('layout', path.join(__dirname, 'src', 'clients', 'views', 'layouts', 'layout'))
app.set("views", path.join(__dirname, 'src', 'clients', "views"));

app.use('/', require('./src/server/routes/index'))
app.use('/todo', require('./src/server/routes/todo'))
app.use('/chat', require('./src/server/routes/chatapp'))

mongoose.connect('mongodb://127.0.0.1:27017/____', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to the db...'))

Server.getServer('/chat').on('connection', require('./src/server/namespaces/chat'))

Server.init(3000)