'use strict'

const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}


// First render it
renderTodos(todos, filters)
// Every input refresh the screen
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector('#text-form').addEventListener('submit', (e) => {
    const text = e.target.elements.textName.value.trim()
    e.preventDefault()
    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        saveTodos(todos)
        renderTodos(todos, filters)
        e.target.elements.textName.value = ''
    }
})

document.querySelector('#check-todos').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})