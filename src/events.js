import {addTask, toggleVisibilityBox} from "./functions"

const store = {green: [], yellow: [], red: []}
const form = document.querySelector('form')
const options = document.querySelectorAll('option')
const titles = document.querySelectorAll('.title')

const test = document.querySelector('.test')

test.addEventListener('click', (event) => {
  console.log(store.green[0].delete())

})


titles.forEach(title => title.addEventListener('click', function (event) {
  toggleVisibilityBox(event.target.parentElement)
}))

form.addEventListener('submit', function (event) {
  event.preventDefault()
  addTask()
  console.log(store)
})

export {store, form, options}

