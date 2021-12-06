import './style.css';
import UI from './modules/ui';

const addIcon = document.getElementById('create-task');
const taskContainer = document.getElementById('task-container');
const inputField = document.getElementById('task-input');

addIcon.addEventListener('click', () => {
  // Single task parent
  const taskWrapper = document.createElement('div');
  // task checkbox
  let checkbox = document.createElement('input');
  checkbox.classList.add('check-box');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', '');
  // textArea for task
  let textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'edit');
  const iconClass = ['far', 'fa-trash-alt', 'fa-1x'];
  textArea.classList.add([...iconClass]);
  textArea.innerText = inputField.value;
  //Add items to task Container
  taskWrapper.append(checkbox);
  taskWrapper.append(textArea);
  taskContainer.append(taskWrapper);
});
