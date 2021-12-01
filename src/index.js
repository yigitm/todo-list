/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const ulElement = document.getElementsByTagName('ul')[0];
const tasks = [
  {
    description: `Task`,
    completed: false,
    index: 0,
  },
  {
    description: `Task`,
    completed: false,
    index: 1,
  },
  {
    description: `Task`,
    completed: false,
    index: 2,
  },
  {
    description: `Task`,
    completed: false,
    index: 3,
  },
  {
    description: `Task`,
    completed: false,
    index: 4,
  },
];

const createTask = () => {
  for (const task of tasks) {
    const liElement = document.createElement('li');
    liElement.innerHTML = `<input class="check-box" type="checkbox" name="" id="" /><li>${task.description}: ${task.index}</li><i class="fas fa-ellipsis-v fa-1x"></i>`;
    ulElement.appendChild(liElement);
  }
};

document.addEventListener('DOMContentLoaded', () => createTask());
