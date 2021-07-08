const updateForm = async (event) => {
  event.preventDefault();
const id=document.querySelector('.title').id;
console.log("id",id)
  const response = await fetch(`/api/post/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: document.querySelector('.title').value.trim(),
      post_content: document.querySelector('.content').value.trim()
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if(response.ok) {
    console.log('success')
    document.location.replace('/dashboard');
  } else {
    console.log(response)
    alert("SOMETHING WENT WRONG")
  }
}
document.querySelector('#update-btn').addEventListener('click', updateForm);

