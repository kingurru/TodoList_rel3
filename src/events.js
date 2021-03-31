import Task from './class-create'
import {selectedBox, toggleVisibilityBox, toggleVisibilityItem} from "./functions"

const store = {green: [], yellow: [], red: []}
const form = document.querySelector('form')
const options = document.querySelectorAll('option')
const titles = document.querySelectorAll('.title')




console.log(titles)
console.log(store)

titles.forEach(title => title.addEventListener('click', function (event) {
  toggleVisibilityBox(event.target.parentNode)
}))


form.addEventListener('submit', function (event) {
  event.preventDefault()
  const inputText = document.querySelector('input[type="text"]')
  new Task(inputText.value, selectedBox(inputText.value.trim())).create()
  inputText.value = ''
})

document.body.addEventListener('change', function (event) {
  if (event.target.checked) {
    console.log(event.target.parentElement)
    toggleVisibilityItem(event.target.parentElement)
  }
})

export {store, form, options}

