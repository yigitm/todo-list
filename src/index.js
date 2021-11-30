/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const ulElement = document.getElementsByTagName('ul')[0];
const tasks = [];

const createTask = () => {
  for (let index = 0; index < 5; index += 1) {
    const liElement = document.createElement('li');
    const task = {
      description: `Task ${index}`,
      completed: false,
      id: tasks.length - 1,
    };

    task.id += 1;
    tasks.push(task);
    liElement.innerHTML = `<input class="check-box" type="checkbox" name="" id="" /><li>${task.description}</li><i class="fas fa-ellipsis-v fa-1x"></i>`;
    ulElement.appendChild(liElement);
  }
};

document.addEventListener('DOMContentLoaded', () => createTask());
