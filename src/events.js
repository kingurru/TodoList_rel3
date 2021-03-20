import Task from './actions'

export const green = []
export const yellow = []
export const red = []
const store = {green, yellow, red}

console.log(store)

const form = document.querySelector('form')
const options = document.querySelectorAll('option')


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

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const inputText = document.querySelector('input[type="text"]')
    new Task(inputText.value, selectedBox(inputText.value)).create()
    inputText.value = ''
})
