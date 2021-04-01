import {options} from "./events";

export class TaskItem {
  constructor(tagName = 'li') {
    this.$item = document.createElement(tagName)
  }

  hide() {
    console.log('hide function')
    // this.$item.classList.add('hide')
    // this.$item.style.display = 'none'
  }
}

export default class Task extends TaskItem {
  constructor(name, box, tagName) {
    super(tagName)
    this.name = name
    this.box = box
  }

  create() {
    this.$box = document.querySelector(`.${this.box}`)

    this.$label = document.createElement("label")
    this.$checkbox = document.createElement("input")
    this.$checkbox.setAttribute("type", "checkbox")
    this.$span = document.createElement("span")
    this.$span.textContent = this.name

    this.$item.appendChild(this.$label)
    this.$label.appendChild(this.$checkbox)
    this.$label.appendChild(this.$span)
    this.$box.appendChild(this.$item)

    return this
  }

  select() {
    for (let el of options) {
      if (el.selected) {
        console.log(el.value)
        return el.value
      }
    }
  }


  info() {
    console.log('Task created', this)
  }
}
