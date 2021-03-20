import Task from './actions'
export const green = []
export const yellow = []
export const red = []

const store = {green, yellow, red}
console.log(store)

const form = document.querySelector('form')
const options = document.querySelectorAll('option')


function selectedBox(nameTask) {
    for (let el of options) {
        if (el.selected) {
            let boxColor = el.value
            if(store[boxColor].includes(nameTask)) {
                alert('Дубликат')
                return
            }
            store[boxColor].push(nameTask)
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

