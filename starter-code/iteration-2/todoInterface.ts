// Write the interface for class Todo. It must have:

// Interfaces : type that describes the structure of an object
export interface TodoInterface{
    // interfaces contain the structure of the object (properties)
    myArray : Array<string>,
    // and the SIGNATURE of the methods (name & parameters only)
    addTask (task: string);
    listAllTasks();
    deleteTask(task : string);
}


// ERROR : impossible to use an interface to create an object !
// const myWarrior = new WarriorInterface();
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.
