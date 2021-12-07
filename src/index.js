import './style.css';
import UI from './modules/ui';

const addIcon = document.getElementById('create-task');
const clear = document.getElementById('clear');
const taskContainer = document.getElementById('task-container');

//show local stroge items
document.addEventListener('DOMContentLoaded', () => {
  UI.showTasks();
});
//event for single task creation
addIcon.addEventListener('click', () => {
  //Create single task element
  UI.taskElement(UI.createTask());
});
//event to filter completed tasks
clear.addEventListener('click', () => UI.clearTask());
//event to edit tasks
taskContainer.addEventListener('click', (e) => {
  if (e.target.id === 'edit') {
    UI.editTask(e.target);
  }
});
// enter key event for adding tasks
document.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    UI.taskElement(UI.createTask());
  }
});
