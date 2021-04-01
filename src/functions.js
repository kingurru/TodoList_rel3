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
  const tasks = box.querySelectorAll('.title ~ li')
  const checkedInputs = box.querySelectorAll('input:checked')

  checkedInputs.forEach(el => el.parentElement.parentElement.classList.toggle('hide'))

  // console.log(completedTasks)
}

function toggleVisibilityItem(item) {
  if (item.checked) {
    const li = item.parentElement.parentElement
    li.classList.toggle('hide')
  }
}

function selectBox() {
  for (let el of options) {
    if (el.selected) return el.value
  }
}


export {addTask, selectBox, toggleVisibilityBox, toggleVisibilityItem}