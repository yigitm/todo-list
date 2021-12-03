import './style.css';
import UI from './modules/ui';

document.addEventListener('DOMContentLoaded', () => {
  UI.showTasks();
  const checkbox = document.querySelectorAll('.check-box');
  checkbox.forEach((element) => {
    element.addEventListener('change', (e) => {
      UI.updateStatus(e.target);
      UI.updateCrossLine(e.target);
      UI.createTaskUI();
    });
  });
  UI.checkCrossline(UI.tasks, checkbox);
  UI.changeDescription();
  UI.filterCompleted(checkbox);
});
UI.enterEvent();
UI.arrowEvent();
