import {addTask, selectBox, toggleVisibilityBox, updateLocalStorage} from "./functions"
import Task from "./constructor";

const store = {green: [], yellow: [], red: []}
const form = document.querySelector('form')
const options = document.querySelectorAll('option')
const titles = document.querySelectorAll('.title')

// const test = document.querySelector('.test')
// test.addEventListener('click', () => {
// })


window.addEventListener("unload", () => {
  localStorage.setItem('store', JSON.stringify(store))
})

document.addEventListener("DOMContentLoaded", () => {

  const oldStore = JSON.parse(localStorage.getItem('store'))

  console.log(store, oldStore)
  for (let arrBox in oldStore) {
    oldStore[arrBox].forEach(el => {

      if (el.check) {
        store[el.box].push(new Task(el.name, el.box, true).create())
      } else
        store[el.box].push(new Task(el.name, el.box).create())
    })
  }
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  console.log(checkboxes)
  checkboxes.forEach(el => console.log(el.checked))
  updateLocalStorage()
})

document.body.addEventListener('change', () => {
  updateLocalStorage()
})

document.body.addEventListener('click', (event) => {
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
  updateLocalStorage()
})

export {store, form, options}

