import './style.css';
import Status from './modules/status';
import UI from './modules/ui';
import Storage from './modules/storage';
import Add from './modules/add';

document.addEventListener('DOMContentLoaded', () => {
  Add.tasks = Storage.getLocal();
  const checkbox = document.querySelectorAll('.check-box');
  checkbox.forEach((element) => {
    element.addEventListener('change', (e) => {
      Status.updateStatus(e.target, Add.tasks);
      UI.updateStatus(e.target);
      Storage.setLocal(Add.tasks);
    });
  });
  UI.checkStatus(Add.tasks, checkbox);
});
Add.enterEvent();
const iconElement = document.getElementById('create-task');
iconElement.addEventListener('click', () => {
  Add.createTask();
});
