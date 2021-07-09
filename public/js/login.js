document.querySelector('#login-form').addEventListener('submit', login)

function login(e) {
  e.preventDefault()
  fetch ('/api/users/login', {
    method: 'POST',
      body: JSON.stringify({
        email: document.querySelector('#email').value.trim(),
        password: document.querySelector('#password').value.trim()
      }),
      headers: {
        'Content-Type': 'application/json'},
    }).then((res) => {
      if (res.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    })
}