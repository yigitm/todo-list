import './style.css';
import UI from './modules/ui';

const addIcon = document.getElementById('create-task');
const taskContainer = document.getElementById('task-container');
const inputField = document.getElementById('task-input');

//event for single task creation
addIcon.addEventListener('click', () => {
  // Single task parent
  const taskWrapper = document.createElement('div');
  taskWrapper.setAttribute('id', `${UI.tasks.length}`);
  // create checkbox & its event
  const checkbox = document.createElement('input');
  checkbox.classList.add('checked');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', 'test');
  checkbox.addEventListener('click', (e) => UI.markTask(e.target));
  // create textArea for task
  const textArea = document.createElement('textarea');
  textArea.setAttribute('id', 'edit');
  textArea.innerText = inputField.value;
  // create remove button & its event
  const iconClass = ['far', 'fa-trash-alt', 'fa-1x'];
  const delIcon = document.createElement('i');
  delIcon.classList.add(...iconClass);
  delIcon.addEventListener('click', (e) => UI.removeTask(e.target));
  //Add items to task Container
  taskWrapper.append(checkbox);
  taskWrapper.append(textArea);
  taskWrapper.append(delIcon);
  taskContainer.append(taskWrapper);
});
