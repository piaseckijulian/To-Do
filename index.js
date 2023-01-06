/* Getting the elements from the HTML file. */
const taskList = document.getElementById('taskList');
const addTaskInput = document.getElementById('addTaskInput');
const addTaskBtn = document.getElementById('addTaskButton');

/* Creating an empty array. */
let tasks = [];

/* Calling the function `createElement()` when the button is clicked. */
addTaskBtn.onclick = () => createElement();

/**
 * It creates a new task and adds it to the list.
 */
const createElement = () => {
  tasks.push({
    id: tasks.length,
    name: addTaskInput.value,
    isDone: false,
  });

  let element;
  let button;

  for (const task of tasks) {
    element = document.createElement('li');
    button = document.createElement('button');

    element.id = task.id;
    element.className = 'task';
    element.innerText = `⟨${isDoneEmoji[task.isDone]}⟩ ${task.name}`;
    element.addEventListener('click', () => doneTask(task, element));

    button.id = task.id;
    button.className = 'taskBtn';
    button.innerText = 'Delete task';
    button.addEventListener('click', () => removeTask(task, element, button));
  }
  taskList.appendChild(element);
  taskList.appendChild(button);
};

/* An object that contains the emojis that will be used to show if the task is done or not. */
const isDoneEmoji = {
  true: '✅',
  false: '❌',
};

/**
 * When the user clicks on a task, the task is marked as done and the text is crossed out.
 * @param task - the task object
 * @param element - the element that was clicked
 */
const doneTask = (task, element) => {
  task.isDone = true;
  element.style.textDecoration = 'line-through';
  element.innerText = `⟨${isDoneEmoji[task.isDone]}⟩ ${task.name}`;
  element.addEventListener('click', () => undoneTask(task, element));
};

/**
 * When the user clicks on a task, the task is undone and the text decoration is removed.
 * @param task - the task object
 * @param element - the element that was clicked
 */
const undoneTask = (task, element) => {
  task.isDone = false;
  element.style.textDecoration = '';
  element.innerText = `⟨${isDoneEmoji[task.isDone]}⟩ ${task.name}`;
  element.addEventListener('click', () => doneTask(task, element));
};

/**
 * It removes the task from the DOM and from the tasks array.
 * @param task - the task object
 * @param element - the element that contains the task
 * @param button - the button that was clicked
 */
const removeTask = (task, element, button) => {
  element.parentNode.removeChild(element);
  button.parentNode.removeChild(button);
  const idToRemove = task.id;
  tasks = tasks.filter((item) => item.id !== idToRemove);
};
