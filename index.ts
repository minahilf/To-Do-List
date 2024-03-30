#! /usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];
let condition = true;

while (condition) {
  let addingTodos = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "What do you want to add in your Todos",
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

let removeTodos = await inquirer.prompt([
  {
    name: "removeTodo",
    type: "confirm",
    message: "Do you want to remove a Todo?",
    default: "false",
  },
]);

if(removeTodos.removeTodo){
    todos.pop();
}

console.log("Your Todos:");
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}
