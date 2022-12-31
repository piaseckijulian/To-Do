const taskListDiv = document.getElementById('taskList');
const addTaskInput = document.getElementById('addTaskInput');
const addTaskButton = document.getElementById('addTaskButton');

let tasks = [];

addTaskButton.onclick = () => createElement();

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
    element.id = task.id;
    element.className = 'task';
    element.innerText = `${task.name} | ${isDoneEmoji[task.isDone]}`;
    element.addEventListener('click', () => doneTask(task, element));

    button = document.createElement('button');
    button.id = task.id;
    button.className = 'taskButton';
    button.innerText = 'Delete task';
    button.addEventListener('click', () => removeTask(task, element, button));
  }
  taskListDiv.appendChild(element);
  taskListDiv.appendChild(button);
};

const isDoneEmoji = {
  true: '✅',
  false: '❌',
};

const doneTask = (task, element) => {
  task.isDone = true;
  element.style.textDecoration = 'line-through';
  element.innerText = `${task.name} | ${isDoneEmoji[task.isDone]}`;
  element.addEventListener('click', () => undoneTask(task, element));
};

const undoneTask = (task, element) => {
  task.isDone = false;
  element.style.textDecoration = '';
  element.innerText = `${task.name} | ${isDoneEmoji[task.isDone]}`;
  element.addEventListener('click', () => doneTask(task, element));
};

const removeTask = (task, element, button) => {
  element.parentNode.removeChild(element);
  button.parentNode.removeChild(button);
  const idToRemove = task.id;
  tasks = tasks.filter((item) => item.id !== idToRemove);
};
