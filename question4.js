let tasks = [];
let taskId = 1;

// Function to add a new task
function addTask(id, name, description) {
  const newTask = { id, name, description };  // Create a new task object
  tasks.push(newTask);  
}

// Function to update an existing task by its ID
function updateTask(id, newName, newDescription) {
  const task = tasks.find(task => task.id === id);  // Find the task with the matching ID
  if (task) {  // If task exists, it updates
    task.name = newName;
    task.description = newDescription;
  }
}

// Function to delete a task by its ID
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);  // Filter out the task with the given ID
}

// Function to get the list of all tasks
function getTasks() {
  return tasks;  // Return the current list of tasks
}

// Example usage
addTask(taskId++, 'ASSIGNMENT', 'HISTORY PAGE 11');
addTask(taskId++, 'CODING', 'COMPUTER CODING');
updateTask(1, 'TEST', 'CHANGE');
deleteTask(2);

console.log(getTasks());  // Output the current tasks
