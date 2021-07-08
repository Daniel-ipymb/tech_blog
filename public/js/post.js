document.querySelector('#post-form').addEventListener('submit', createPost)

function createPost(event) {
  event.preventDefault()
  console.log(event.target)
  fetch('/api/post', {
    method: 'POST',
    body: JSON.stringify({
      title: document.querySelector('#title').value.trim(),
      post_content: document.querySelector('#content').value.trim()
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((res) => {
      if(res.ok) {
      console.log('success')
      document.location.replace('/dashboard');
      }else {
      onsole.log(res)
      alert("SOMETHING WENT WRONG")
    }
  });
}