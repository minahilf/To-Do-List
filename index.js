#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addingTodos = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your Todos",
            // Ramadan coding night 7 assignment 1 if user enter nothing...
            validate: (input) => {
                if (input.trim() === "") { // agr user ne kch nh add krega to ye msg print hoga
                    return "Please add some text for the todo.";
                }
                return true;
            },
        },
        {
            name: "addMoreTodos",
            type: "confirm",
            message: "Are you sure you want to add more Todos?",
            default: "false",
        },
    ]);
    todos.push(addingTodos.todo);
    condition = addingTodos.addMoreTodos;
    console.log(todos);
}
// remove todos
let removeTodos = await inquirer.prompt([
    {
        name: "removeTodo",
        type: "confirm",
        message: "Do you want to remove a Todo?",
        default: "false",
    },
]);
if (removeTodos.removeTodo) {
    let removeTodoChoice = await inquirer.prompt([
        {
            name: "todoToRemove",
            type: "list",
            message: "Select a todo to remove:",
            choices: todos,
        },
    ]);
    const indexToRemove = todos.indexOf(removeTodoChoice.todoToRemove);
    if (indexToRemove !== -1) {
        todos.splice(indexToRemove, 1);
    }
}
// assignment now you can update your todo if your spelling is incorrect
let updateTodos = await inquirer.prompt([
    {
        name: "updateTodo",
        type: "confirm",
        message: "Do you want to update a Todo?",
        default: "false",
    },
]);
if (updateTodos.updateTodo) {
    let updateTodoChoice = await inquirer.prompt([
        {
            name: "todoToUpdate",
            type: "list",
            message: "Select a todo to update:",
            choices: todos,
        },
        {
            name: "newTodo",
            type: "input",
            message: "Enter the new value for the selected todo:",
        },
    ]);
    const indexToUpdate = todos.indexOf(updateTodoChoice.todoToUpdate);
    if (indexToUpdate !== -1) {
        todos[indexToUpdate] = updateTodoChoice.newTodo;
    }
}
// Ramadan coding night 7 assignment 2 by sir ameen individually printing todos
console.log("Your Todos:");
todos.forEach(todo => {
    console.log("- " + todo);
});
