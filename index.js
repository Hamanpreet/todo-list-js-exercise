// Arrays to keep track of each task's state
// Create a new task by adding to the arrays
// A new task will be created as incomplet
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState : () => {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted : () => {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "don't forget the box"); // task 0
const task2 = newTask("Do Laundry", "Use strong detergent"); // task 1
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed
console.log(tasks);
