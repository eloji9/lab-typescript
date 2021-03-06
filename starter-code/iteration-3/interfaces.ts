// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.
export interface TodoItemInterface{
    // interfaces contain the structure of the object (properties)
    title : String,
    status : Boolean,
    updatedAt : Date,
    // and the SIGNATURE of the methods (name & parameters only)
    toggleStatus (status: boolean);
}

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.

export interface TodoListInterface{
    // interfaces contain the structure of the object (properties)
    TodoItems : Array<string>,
    // and the SIGNATURE of the methods (name & parameters only)
    addTask (TodoItem) : number;
    listAllTasks();
    deleteTask(TodoItem) : number;
    listUncomplete();
}
