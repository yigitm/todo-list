import './style.css';
import Status from './modules/status';
import UI from './modules/ui';
import Storage from './modules/storage';

const ulElement = document.getElementsByTagName('ul')[0];
let tasks = [];
if (localStorage.length === 0) {
  tasks = [
    {
      description: 'Task',
      completed: false,
      index: 0,
    },
    {
      description: 'Task',
      completed: false,
      index: 1,
    },
    {
      description: 'Task',
      completed: false,
      index: 2,
    },
    {
      description: 'Task',
      completed: false,
      index: 3,
    },
    {
      description: 'Task',
      completed: false,
      index: 4,
    },
  ];
} else {
  tasks = Storage.getLocal();
}

const createTask = () => {
  tasks.forEach((task) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = `<input class="check-box" type="checkbox" name="checkbox" id="${
      task.index
    }" ${task.completed ? 'checked' : ''}/><span>${task.description}: ${
      task.index
    }</span><i class="fas fa-ellipsis-v fa-1x"></i>`;
    ulElement.appendChild(liElement);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createTask();
  const checkbox = document.querySelectorAll('.check-box');
  checkbox.forEach((element) => {
    element.addEventListener('change', (e) => {
      Status.updateStatus(e.target, tasks);
      UI.updateStatus(e.target);
      Storage.setLocal(tasks);
    });
  });
  UI.checkStatus(tasks, checkbox);
});
