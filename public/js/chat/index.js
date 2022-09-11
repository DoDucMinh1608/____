const socket = io()

const inputForm = document.querySelector('form')
const input = inputForm.querySelector('input');
const message = document.querySelector('.message').cloneNode(true)
const containers = document.querySelector('.container')
document.querySelector('.message').remove()

inputForm.addEventListener('submit', function (e) {
  e.preventDefault()
  socket.emit('send-message', { text: input.value, date: Date() })
  input.value = ''
})

function updateMessage(data) {
  containers.innerHTML += `
  <div class="message">
    <span class="date">${data.date}</span>
    <p class="content">${data.owner ? 'you' : 'others'} | ${data.text}</p >
  </div >
  `
}

socket.on('send-message', data => {
  console.log(data)
  updateMessage(data)
})