const updateComment = async (event) => {
  event.preventDefault();
  const id = document.querySelector('#post-id').value;
  console.log("id", id)
  const response = await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({
      comment_text: document.querySelector('.comment').value.trim(),
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) {
    console.log('success')
    document.location.reload();
  } else {
    console.log(response)
    alert("SOMETHING WENT WRONG")
  }
}
document.querySelector('#submit-btn').addEventListener('click', updateComment);