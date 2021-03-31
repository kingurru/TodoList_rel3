import {options, store} from "./events";

function toggleVisibilityBox (box) {
  let tasks = box.querySelectorAll('.title ~ li')
  tasks.forEach(li => li.classList.toggle('hide'))
}

function toggleVisibilityItem(item) {
  item.classList.toggle('hide')
}


function selectedBox(taskName) {
  for (let el of options) {
    if (el.selected) {
      for (let key in store) {
        if (store[key].includes(taskName)) return alert('Дубликат')
      }

      let boxColor = el.value
      store[boxColor].push(taskName)
      console.log(store)
      return boxColor
    }
  }
}


export {selectedBox, toggleVisibilityBox, toggleVisibilityItem}