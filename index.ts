import express from "express"
import path from 'path'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)

const io = new Server(httpServer)

app.use(express.static(path.join(__dirname, 'src', 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('views', path.join(__dirname, 'src', 'clients', 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

httpServer.listen(3000, () => console.log('connected to port 3000'))