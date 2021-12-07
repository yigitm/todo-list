import './style.css';
import UI from './modules/ui';

const addIcon = document.getElementById('create-task');
const clear = document.getElementById('clear');

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
