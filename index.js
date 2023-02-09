const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const taskBtn = document.getElementById('taskBtn');

let tasks = [];
let id = tasks.length - 1;

const isDoneEmoji = {
  false: '❌',
  true: '✅',
};

const addTask = () => {
  id += 1;
  taskList.innerHTML = '';
  tasks.push({
    id: id,
    name: taskInput.value,
    isDone: false,
  });

  for (const task of tasks) {
    const taskElement = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const statusBtn = document.createElement('button');

    taskElement.innerText = `(${isDoneEmoji[task.isDone]}) ${task.name}`;
    taskElement.className = 'task';

    deleteBtn.innerText = 'Delete task';
    deleteBtn.className = 'button';
    deleteBtn.id = 'deleteBtn';
    deleteBtn.onclick = () => deleteTask(task, taskElement);

    editBtn.innerText = 'Edit task';
    editBtn.className = 'button';
    editBtn.id = 'editBtn';
    editBtn.onclick = () => editTask(task, taskElement);

    statusBtn.innerText = 'Mark as done';
    statusBtn.className = 'button';
    statusBtn.id = 'statusBtn';
    statusBtn.onclick = () => doneTask(task, taskElement);

    taskList.appendChild(taskElement);
    taskElement.appendChild(deleteBtn);
    taskElement.appendChild(editBtn);
    taskElement.appendChild(statusBtn);
  }
};

const deleteTask = (task, taskElement) => {
  const idToRemove = task.id;
  tasks = tasks.filter((item) => item.id !== idToRemove);

  taskElement.remove();
};

const editTask = (task, taskElement) => {
  taskBtn.innerText = 'Edit task';
  taskInput.value = task.name;
  taskBtn.onclick = () => {
    task.name = taskInput.value;
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const statusBtn = document.createElement('button');

    editBtn.innerText = 'Edit task';
    editBtn.className = 'button';
    editBtn.id = 'editBtn';

    deleteBtn.innerText = 'Delete task';
    deleteBtn.className = 'button';
    deleteBtn.id = 'deleteBtn';

    statusBtn.innerText = 'Mark as done';
    statusBtn.className = 'button';
    statusBtn.id = 'statusBtn';

    editBtn.onclick = () => editTask(task, taskElement);
    deleteBtn.onclick = () => deleteTask(task, taskElement);
    statusBtn.onclick = () => doneTask(task, taskElement);

    taskElement.innerText = `(${isDoneEmoji[task.isDone]}) ${task.name}`;

    taskElement.appendChild(deleteBtn);
    taskElement.appendChild(editBtn);
    taskElement.appendChild(statusBtn);

    taskBtn.innerText = 'Add task';
    taskBtn.onclick = () => addTask();
  };
};

const doneTask = (task, taskElement) => {
  task.isDone = true;

  const deleteBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const statusBtn = document.createElement('button');

  editBtn.innerText = 'Edit task';
  editBtn.className = 'button';
  editBtn.id = 'editBtn';

  deleteBtn.innerText = 'Delete task';
  deleteBtn.className = 'button';
  deleteBtn.id = 'deleteBtn';

  statusBtn.innerText = 'Mark as undone';
  statusBtn.className = 'button';
  statusBtn.id = 'statusBtn';

  editBtn.onclick = () => editTask(task, taskElement);
  deleteBtn.onclick = () => deleteTask(task, taskElement);
  statusBtn.onclick = () => undoneTask(task, taskElement);

  taskElement.innerText = `(${isDoneEmoji[task.isDone]}) ${task.name}`;

  taskElement.appendChild(deleteBtn);
  taskElement.appendChild(editBtn);
  taskElement.appendChild(statusBtn);
};

const undoneTask = (task, taskElement) => {
  task.isDone = false;

  const deleteBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const statusBtn = document.createElement('button');

  editBtn.innerText = 'Edit task';
  editBtn.className = 'button';
  editBtn.id = 'editBtn';

  deleteBtn.innerText = 'Delete task';
  deleteBtn.className = 'button';
  deleteBtn.id = 'deleteBtn';

  statusBtn.innerText = 'Mark as done';
  statusBtn.className = 'button';
  statusBtn.id = 'statusBtn';

  editBtn.onclick = () => editTask(task, taskElement);
  deleteBtn.onclick = () => deleteTask(task, taskElement);
  statusBtn.onclick = () => doneTask(task, taskElement);

  taskElement.innerText = `(${isDoneEmoji[task.isDone]}) ${task.name}`;

  taskElement.appendChild(deleteBtn);
  taskElement.appendChild(editBtn);
  taskElement.appendChild(statusBtn);
};

taskBtn.onclick = addTask;
