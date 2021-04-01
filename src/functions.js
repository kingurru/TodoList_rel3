import {options} from "./events";

function toggleVisibilityBox(box) {
  let tasks = box.querySelectorAll('.title ~ li')
  tasks.forEach(el => {
    if (el.classList.contains('hide')) {
      el.classList.remove('hide')
    } else {
      el.classList.add('hide')
    }
  })
}

function toggleVisibilityItem(item) {
  if (item.classList.contains('hide')) {
    item.classList.remove('hide')
  } else {
    item.classList.add('hide')
  }
}

function selectedBox() {
  for (let el of options) {
    if (el.selected) return el.value
  }
}


export {selectedBox, toggleVisibilityBox, toggleVisibilityItem}