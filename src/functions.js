import {options, store} from "./events";
import Task from "./constructor";

function addTask() {
  const inputText = document.querySelector('input[type="text"]').value

  if (Object.values(store).find((box) => box.find(el => el.name === inputText.trim()))) {
    return alert('Такая задача уже имеется в списке!')
  } else {
    store[selectBox()].push(new Task(inputText.trim(), selectBox()).create())
    document.querySelector('input[type="text"]').value = ''
  }
}

function toggleVisibilityBox(box) {
  let completedTasks = box.querySelectorAll('.check')
  let hideTasks = box.querySelectorAll('.hide')
  console.log(completedTasks, hideTasks)

  if (completedTasks.length) {
    completedTasks.forEach(el => el.classList.add('hide'))
  }
  if (completedTasks.length === hideTasks.length) {
    completedTasks.forEach(el => el.classList.remove('hide'))
  }
}


function selectBox() {
  for (let el of options) {
    if (el.selected) return el.value
  }
}


export {addTask, selectBox, toggleVisibilityBox}