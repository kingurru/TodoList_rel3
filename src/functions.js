import {options, store} from "./events";
import Task from "./constructor";


function addTask() {
  const inputText = document.querySelector('input[type="text"]').value

  if (Object.values(store).find((box) => box.find(el => el.name === inputText.trim()))) {
    return alert('Такая задача уже имеется в списке!')
  } else {
    store[selectBox()].push(new Task(inputText.trim(), selectBox()).create())
    updateLocalStorage()
    document.querySelector('input[type="text"]').value = ''
  }
}

function updateLocalStorage() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes.forEach(el1 => {
    const taskName = el1.nextSibling.textContent
    for (let box in store) {
      store[box].forEach(el2 => {
        if (el2.name === taskName && el1.checked) el2.check = true
        else if (el2.name === taskName && !el1.checked) el2.check = false
      })
    }
  })
  localStorage.setItem('store', JSON.stringify(store))
  console.log(store)
}

function toggleVisibilityBox(box) {
  let checkedTasks = box.querySelectorAll('input:checked')
  let hideTasks = box.querySelectorAll('.hide')

  if (checkedTasks.length) {
    checkedTasks.forEach(el => el.parentElement.parentElement.classList.add('hide'))
  }
  if (checkedTasks.length === hideTasks.length) {
    checkedTasks.forEach(el => el.parentElement.parentElement.classList.remove('hide'))
  }
}

function selectBox() {
  for (let el of options) {
    if (el.selected) return el.value
  }
}

export {addTask, selectBox, toggleVisibilityBox, updateLocalStorage}