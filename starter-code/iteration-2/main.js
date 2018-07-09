"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(myArray) {
        if (myArray === void 0) { myArray = []; }
        this.myArray = myArray;
    }
    Todo.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log("Task: " + task + " inserted in the list");
        var numberOfItems = this.myArray.length;
        return numberOfItems;
    };
    Todo.prototype.listAllTasks = function () {
        this.myArray.forEach(function (oneTask) {
            console.log(oneTask);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var indexArray = this.myArray.indexOf(task);
        this.myArray.splice(indexArray, 1);
        console.log("Task " + task + " removed from the list");
        var numberOfItems = this.myArray.length;
        return numberOfItems;
    };
    return Todo;
}());
// Execution
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
