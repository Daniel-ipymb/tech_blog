document.querySelector('#post-form').addEventListener('submit', createPost)

function createPost(event){
  event.preventDefault()
  console.log(event.target)
  fetch ('/api/post', {
    method: 'POST',
      body: JSON.stringify({
        title: document.querySelector('#title'),
        post_content: document.querySelector('#content')
      }),
      headers: {
        'Content-Type': 'application/json'},
    }).then((res) => console.log(res))
   
}