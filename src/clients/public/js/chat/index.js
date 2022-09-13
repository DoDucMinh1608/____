if (!localStorage.getItem('ID')) window.location.replace('./chat/log-in')

const socket = io('/chat')

const form = document.querySelector('.input-message')

const serverTools = document.querySelector('.server-tools')
const createServerBtn = document.querySelector('.create-server-btn')
const joinServerBtn = document.querySelector('.join-server-btn')

const serverForm = document.querySelector('.server-forms')
const createServerForm = document.querySelector('.create-server')
const joinServerForm = document.querySelector('.join-server')
const closeButtons = document.querySelectorAll('.close-form')

function displayForm(elem) {
  serverForm.querySelector('.server-form:not(.hidden)')?.classList.add('hidden')
  elem.classList.remove('hidden')
}

function closeForm() {
  this.closest('.server-form').classList.add('hidden')
}

closeButtons.forEach(elem => elem.addEventListener('click', closeForm))
createServerBtn.addEventListener('click', displayForm.bind({}, createServerForm))
joinServerBtn.addEventListener('click', displayForm.bind({}, joinServerForm))