document.querySelector('#signup-form').addEventListener('submit', signup)

function signup(e) {
  e.preventDefault()
  fetch ('/api/users', {
    method: 'POST',
      body: JSON.stringify({
        email: document.querySelector('#email').value.trim(),
        username: document.querySelector('#username').value.trim(),
        password: document.querySelector('#password').value.trim()
      }),
      headers: {
        'Content-Type': 'application/json'},
    }).then((res) => console.log(res))
}