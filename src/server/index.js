const http = require('http')
const { Server } = require('socket.io')

module.exports = class {
  constructor(app) {
    this.server = http.createServer(app)
    this.io = new Server(this.server)
  }
  addServer(path = '') {
    return this.io.of(path)
  }
  init(port) {
    this.server.listen(port, () => console.log(`connected to port ${port}`))
  }
}