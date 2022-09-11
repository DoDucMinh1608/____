const http = require('http')
const { Server } = require('socket.io')

module.exports = class {
  constructor(app) {
    this.server = http.createServer(app)
    this.io = new Server(this.server)
  }
  _events() {
    this.io.on('connection', function (socket) {
      console.log('An user joined')

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