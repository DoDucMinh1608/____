const ID = localStorage.getItem('ID')

export function sendID(ID) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/chat/e', true);

  //Send the proper header information along with the request
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onload = function () {
    if (this.responseText == 'Validate') window.location.replace('/chat')
  }
  xhr.send(`ID=${ID}`);
}

sendID(ID)
