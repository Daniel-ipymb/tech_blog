document.querySelector('#logout').addEventListener('click', logout)

function logout() {
  fetch ('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => {
    if (res.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  })
}