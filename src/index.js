import './style.css';
import UI from './modules/ui';

UI.showTasks();
UI.enterEvent();
UI.arrowEvent();

const textAreas = document.querySelectorAll('textarea');
textAreas.forEach((text) => {
  text.addEventListener('change', () => {
    const trimmed = text.value.trim();
    UI.editTask(trimmed, text.previousSibling.id);
  });
});

const checkbox = document.querySelectorAll('.check-box');

UI.filterCompleted(checkbox);
