let favButtons = document.querySelectorAll(`.favbutton`)
favButtons.forEach(button => button.addEventListener('click', function (e) {
  e.preventDefault()
  let favNotes = {
    id: button.id
  }

  button.childNodes[1].classList.add('fav')
  console.log(favNotes)
  axios.post('/favorites', favNotes)
    .then(() => console.log(favNotes))
}))