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

function updateStore(newName) {

  for (let box in store) {
    store[box].forEach((item, idx) => {
      if (item.name === localStorage.getItem('oldName'))
        console.log(store[box][idx].name = newName)
    })
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
  // console.log(store)
}


function editTask(el) {

  let span = document.createElement('span')
  let oldName
  let newName
  let input
  if (el.textContent) {
    oldName = el.textContent
    localStorage.setItem('oldName', oldName)
  }

  if (el.tagName === 'SPAN') {
    input = document.createElement('input')
    input.classList.add('task-name')
    input.setAttribute('type', 'text')
    input.style.marginLeft = '10px'
    el.parentNode.replaceChild(input, el)
    input.value = el.textContent
    input.focus()
  }

  if (el.tagName === 'INPUT' && el.parentNode.tagName === 'LABEL' && el.classList.contains('task-name')) {

    if (el.value.trim()) {
      newName = el.value.trim()
      updateStore(newName)
      span.textContent = el.value.trim()
      el.parentNode.replaceChild(span, el)
    }
  }

  if (el === 'Enter') {
    input = document.querySelector('.task-name')

    if (input.value.trim()) {
      newName = input.value.trim()
      updateStore(newName)
      span.textContent = input.value.trim()
      input.parentNode.replaceChild(span, input)
    }
  }
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

export {addTask, selectBox, editTask, toggleVisibilityBox, updateLocalStorage}