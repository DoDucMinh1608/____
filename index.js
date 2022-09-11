const express = require('express')
const { Server } = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'src', "views"));

app.use('/', require('./src/routes/Routes/index'))

server.listen(3000, () => {
  console.log('listening on 3000')
})