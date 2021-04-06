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

  console.log()
  if (event.target.tagName === 'IMG' && event.target.parentElement.firstChild.firstChild.checked) {
    const taskName = event.target.previousSibling.childNodes[1].textContent
    const box = event.target.parentElement.parentElement.dataset.box

    event.target.parentElement.remove()
    store[box].splice(store[box].indexOf(store[box].find(el => el.name === taskName)), 1)
    updateLocalStorage()

    console.log(store)
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

