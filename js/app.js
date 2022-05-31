const inputEl = document.getElementById('todo-input')
const addTodoBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')

addTodoBtn.addEventListener('click', addTodo)
resetBtn.addEventListener('click', reset)

function addTodo() {
    const newTodo = document.createElement('li')
    newTodo.textContent = inputEl.value
    while (inputEl.value !== '') {
        todoList.appendChild(newTodo)
        inputEl.value = ''
    }
}

function reset() {
    todoList.remove()
}