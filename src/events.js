import {addTask, toggleVisibilityBox, updateLocalStorage} from "./functions"

const store = {green: [], yellow: [], red: []}
const form = document.querySelector('form')
const options = document.querySelectorAll('option')
const titles = document.querySelectorAll('.title')

const test = document.querySelector('.test')
test.addEventListener('click', () => {
  console.log(store)
})


document.body.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG' && event.target.parentElement.firstChild.firstChild.checked) {
    event.target.parentElement.remove()
    updateLocalStorage()

  }
})

document.body.addEventListener('dblclick', (event) => {
  console.log(event.target.tagName)
})


titles.forEach(title => title.addEventListener('click', function (event) {
  toggleVisibilityBox(event.target.parentElement)
}))

form.addEventListener('submit', function (event) {
  event.preventDefault()
  addTask()
  // console.log(store)
})

export {store, form, options}

