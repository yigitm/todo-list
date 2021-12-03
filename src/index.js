import './style.css';
import UI from './modules/ui';

UI.showTasks();
const checkbox = document.querySelectorAll('.check-box');
checkbox.forEach((element) => {
  element.addEventListener('change', (e) => {
    UI.updateStatus(e.target);
    UI.updateCrossLine(e.target);
  });
});
UI.createTaskUI();
UI.checkCrossline(UI.tasks, checkbox);
UI.filterCompleted(checkbox);
UI.enterEvent();
UI.arrowEvent();

const textAreas = document.querySelectorAll('textarea');
textAreas.forEach((text) => {
  text.addEventListener('change', () => {
    const trimmed = text.value.trim();
    UI.editTask(trimmed, text.previousSibling.id);
  });
});
