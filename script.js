/**
 * Created by XtraTerr on 30.5.2017 г..
 */
var todos =["Item 1", "Item 2", "Item 3"];

function displayTodos() {
    console.log("My Todos" , todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}



