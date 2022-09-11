const socket = io()

socket.emit('init', { url: document.URL, date: Date.now() })