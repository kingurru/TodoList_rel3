import {addTask, toggleVisibilityBox} from "./functions"

const store = {green: [], yellow: [], red: []}
const form = document.querySelector('form')
const options = document.querySelectorAll('option')
const titles = document.querySelectorAll('.title')

titles.forEach(title => title.addEventListener('click', function (event) {
  toggleVisibilityBox(event.target.parentElement)
}))

form.addEventListener('submit', function (event) {
  event.preventDefault()
  addTask()
  console.log(store)
})

document.body.addEventListener('change', function (event) {
  if (event.target.parentElement.parentElement.parentElement.tagName === 'UL') {
    event.target.parentElement.parentElement.classList.toggle('check')
  }
})

export {store, form, options}

