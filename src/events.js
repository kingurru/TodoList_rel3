import {addTask, toggleVisibilityBox, toggleVisibilityItem} from "./functions"

const store = {green: [], yellow: [], red: []}
const form = document.querySelector('form')
const options = document.querySelectorAll('option')
const titles = document.querySelectorAll('.title')

titles.forEach(title => title.addEventListener('click', function (event) {
  toggleVisibilityBox(event.target.parentNode)
}))


form.addEventListener('submit', function (event) {
  event.preventDefault()
  addTask()
  console.log(store)
})


document.body.addEventListener('change', function (event) {
  toggleVisibilityItem(event.target)
})

export {store, form, options}

