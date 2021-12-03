import './style.css';
import UI from './modules/ui';
import Backend from './modules/backend';

document.addEventListener('DOMContentLoaded', () => {
  UI.showTasks();
  const checkbox = document.querySelectorAll('.check-box');
  checkbox.forEach((element) => {
    element.addEventListener('change', (e) => {
      Backend.updateStatus(e.target);
      UI.updateCrossLine(e.target);
    });
  });
  UI.checkCrossline(Backend.tasks, checkbox);
  UI.changeDescription();
  UI.filterCompleted(checkbox);
});
Backend.enterEvent();
Backend.arrowEvent();
