import './style.css';
import Status from './modules/status';
import UI from './modules/ui';
import Storage from './modules/storage';
import Add from './modules/add';
import Edit from './modules/edit';

document.addEventListener('DOMContentLoaded', () => {
  UI.showTasks();
  const checkbox = document.querySelectorAll('.check-box');
  checkbox.forEach((element) => {
    element.addEventListener('change', (e) => {
      Status.updateStatus(e.target);
      UI.updateCrossLine(e.target);
      Storage.setLocal(Add.tasks);
    });
  });
  UI.checkCrossline(Add.tasks, checkbox);
  UI.changeDescription();
  UI.removeAllCompleted(checkbox);
});
Add.enterEvent();
Add.arrowEvent();
