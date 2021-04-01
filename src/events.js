import Task from './constructor'
import {selectedBox, toggleVisibilityBox, toggleVisibilityItem} from "./functions"

const store = {green: [], yellow: [], red: []}
const form = document.querySelector('form')
const options = document.querySelectorAll('option')
const titles = document.querySelectorAll('.title')

titles.forEach(title => title.addEventListener('click', function (event) {
  toggleVisibilityBox(event.target.parentNode)
}))


form.addEventListener('submit', function (event) {
  event.preventDefault()
  const inputText = document.querySelector('input[type="text"]').value

  if (Object.values(store).find((box, idx) => box.find(el => el.name === inputText))) {
    return alert('Такая задача уже имеется в списке!')
  } else {
    store[selectedBox(inputText.trim())].push(new Task(inputText, selectedBox(inputText.trim())).create())
    document.querySelector('input[type="text"]').value = ''
  }

  console.log(store)
})


document.body.addEventListener('change', function (event) {
  if (event.target.checked) {
    console.log(event.target.parentElement.parentElement)
    toggleVisibilityItem(event.target.parentElement.parentElement)
  }
})

export {store, form, options}

