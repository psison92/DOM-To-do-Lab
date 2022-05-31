const inputEl = document.getElementById('todo-input')
const buttonEl = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')

buttonEl.addEventListener('click', addTodo)

function addTodo() {
    const newTodo = document.createElement('li')
    newTodo.textContent = inputEl.value
    while (inputEl.value !== '') {
        document.querySelector('ul').appendChild(newTodo)
        inputEl.value = ''
    }
}