const socket = io('/chat')

const form = document.querySelector('form')

if (!localStorage.getItem('ID')) window.location.replace('./chat/log-in')
