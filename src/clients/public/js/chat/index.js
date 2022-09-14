if (!localStorage.getItem('ID')) window.location.replace('./chat/log-in')

const socket = io('/chat')

const inputMessages = $('.input-message')

const serverTools = $('.server-tools')
const createServerBtn = $('.create-server-btn')
const joinServerBtn = $('.join-server-btn')

const serverForms = $('.server-forms')
const createServerForm = $('.create-server')
createServerForm.hide()
const joinServerForm = $('.join-server')
joinServerForm.hide()
const closeButtons = $('.close-form')

function displayForm(e) {
  const target = e.target
  if (target.classList.contains('server-tools')) return

  const elem = $(`.${target.classList[0].replace('-btn', '')}`)
  elem.closest('.server-forms').children(':visible').hide()
  elem.show()
}
function closeForm() {
  $(this).closest('.server-form').hide()
}

closeButtons.click(closeForm)
serverTools.click(displayForm)

function submitForm(e) {
  e.preventDefault()
  const form = $(e.target)
  const account = localStorage.getItem('ID')
  console.log(form.children('input').val())
  form.append($('<input>', { type: 'text', name: 'server-owner' }).hide().val(account))
  $(this).off('submit', submitForm)
  form.submit()
}
serverForms.submit(submitForm)
