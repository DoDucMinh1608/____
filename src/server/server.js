const http = require('http')
const io = require('socket.io')

module.exports = class {
  constructor(app) {
    this.server = http.createServer(app)
    this.io = io(this.server)
  }
  _events() {
    this.io.on('connection', function (socket) {
      console.log('An user joined')

      socket.on('send-message', data => {
        console.log(data)

        socket.broadcast.emit('send-message', data)
        socket.emit('send-message', Object.assign(data, { owner: true }))
      })

      socket.on('disconnect', () => {
        console.log('A user left')
      })
    }.bind(this))
  }

  init(port) {
    this._events()
    this.server.listen(port, () => console.log(`connected to port ${port}`))
  }
}