"use strict";
exports.__esModule = true;
// Create class TodoItem that implements the corresponding interface
var TodoItem = /** @class */ (function () {
    function TodoItem(title) {
        this.title = title;
    }
    TodoItem.prototype.toggleStatus = function () {
        this.status = !status;
        this.updatedAt = new Date();
    };
    return TodoItem;
}());
// Create class TodoList that implements the corresponding interface
var TodoList = /** @class */ (function () {
    function TodoList(TodoItems) {
        if (TodoItems === void 0) { TodoItems = []; }
        this.TodoItems = TodoItems;
    }
    TodoList.prototype.addTask = function (TodoItem) {
        this.TodoItems.push(TodoItem);
        console.log("Task: " + TodoItem + " inserted in the list");
        var numberOfItems = this.TodoItems.length;
        return numberOfItems;
    };
    TodoList.prototype.listAllTasks = function () {
        this.TodoItems.forEach(function (oneTodoItem) {
            console.log(oneTodoItem);
        });
    };
    TodoList.prototype.deleteTask = function (TodoItem) {
        var indexArray = this.TodoItems.indexOf(TodoItem);
        this.TodoItems.splice(indexArray, 1);
        console.log("Task " + TodoItem + " removed from the list");
        var numberOfItems = this.TodoItems.length;
        return numberOfItems;
    };
    TodoList.prototype.listUncomplete = function () {
        this.TodoItems.forEach(function (oneTodoItem) {
            console.log(oneTodoItem);
        });
    };
    return TodoList;
}());
// Execution
var task1 = new TodoItem('This is our first task');
var task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
var task3 = new TodoItem('Finish this iteration 1!! 🤓');
var task4 = new TodoItem('Finish this iteration 2!! 🤓');
var task5 = new TodoItem('Finish this iteration 3!! 🤓');
var myTodos = new TodoList();
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
