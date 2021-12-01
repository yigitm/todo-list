/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import Status from './modules/status';
import UI from './modules/ui';

const ulElement = document.getElementsByTagName('ul')[0];
const tasks = [
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

const createTask = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const liElement = document.createElement('li');
    liElement.innerHTML = `<input class="check-box" type="checkbox" name="checkbox" id="${tasks[i].index}"/><span>${tasks[i].description}: ${tasks[i].index}</span><i class="fas fa-ellipsis-v fa-1x"></i>`;
    ulElement.appendChild(liElement);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  createTask();
  const checkbox = document.querySelectorAll('.check-box');
  checkbox.forEach((element) => {
    element.addEventListener('change', (e) => {
      Status.updateStatus(e.target, tasks);
      UI.updateStatus(e.target);
    });
  });
});
