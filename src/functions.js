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
  localStorage.setItem('store', JSON.stringify(store))
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