import greenTask from './columns/green'
import yellowTask from './columns/yellow'
import redTask from './columns/red'
import {greenStore, yellowStore, redStore} from './columns/store'

export class TaskItem {
    constructor(tagName = 'li') {
        this.$item = document.createElement(tagName)
    }
}

class Task extends TaskItem {
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

    info() {
        console.log(this)
    }

}

let task1 = new Task ('Помыть посуду', 'red' )
let task2 = new Task ('Вынести мусор', 'yellow')
task1.create()
task2.create()




//
// export function createTask() {
//     const taskName = document.querySelector('input[type="text"]').value
//     const span = template.querySelector('span')
//     span.textContent = taskName
//     const task = template.cloneNode(true)
//
//     document.querySelector('input').value = ''
// }
//
// function selectionBox() {
//
// }
//
// form.addEventListener('submit', function (event) {
//     event.preventDefault()
//     const textInput = document.querySelector('input[type="text"]').value
//     createTask(textInput)
// })



// if (findDuplicate(inputText.value, greenStore) || findDuplicate(inputText.value, yellowStore) || findDuplicate(inputText.value, redStore)) {}


// function findDuplicate(name, store) {
//     const element = store.findIndex(el => el.name === name)
//     return element > -1 ? true : false
// }