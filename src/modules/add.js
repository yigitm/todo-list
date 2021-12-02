import UI from './ui';
import Storage from './storage';

const Add = (() => {
  const inputElement = document.getElementById('task-input');

  let tasks = Storage.getLocal();
  let task = {
    description: '',
    completed: false,
    index: tasks.length,
  };

  //Add task when press enter
  const enterEvent = () => {
    inputElement.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        createTask();
      }
    });
  };
  //Add task when click
  const arrowEvent = () => {
    const iconElement = document.getElementById('create-task');
    iconElement.addEventListener('click', () => {
      createTask();
    });
  };

  const createTask = () => {
    task.description = inputElement.value;
    tasks.push(task);
    Storage.setLocal(tasks);
    UI.createTaskUI(task);
  };

  return { tasks, createTask, enterEvent, arrowEvent };
})();
export default Add;
