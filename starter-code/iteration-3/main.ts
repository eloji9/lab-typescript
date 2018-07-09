// Add the reference to the interface
import { TodoItemInterface } from "./interfaces";
import { TodoListInterface } from "./interfaces";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
    constructor(
        public title : String,
    ){}
    // We didn't see this in the lesson but I tried different configurations
    // and this seems to be the only one working...
    status : boolean;
    updatedAt : Date;
    toggleStatus (){
        this.status = !status;
        this.updatedAt = new Date();
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
    constructor(
        public TodoItems : Array<string> = [],
    ){}
    addTask (TodoItem){
        this.TodoItems.push(TodoItem);
        console.log(`Task: ${TodoItem} inserted in the list`);
        let numberOfItems: number = this.TodoItems.length;
        return numberOfItems;
        }
    listAllTasks(){
        this.TodoItems.forEach(function(oneTodoItem){
            console.log(oneTodoItem);
        })
    }
    deleteTask (TodoItem){
            let indexArray: number = this.TodoItems.indexOf(TodoItem);
            this.TodoItems.splice(indexArray, 1);
            console.log(`Task ${TodoItem} removed from the list`);
            let numberOfItems: number = this.TodoItems.length;
            return numberOfItems;
    }
    listUncomplete(){
        this.TodoItems.forEach(function(oneTodoItem){
            console.log(oneTodoItem);
        })
    }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
