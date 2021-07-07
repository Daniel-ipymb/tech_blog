document.querySelector('#logout').addEventListener('click', logout)

function logout() {
  fetch ('/api/users/logout', {
    method: 'post',
  }).then((res) => console.log(res))
}