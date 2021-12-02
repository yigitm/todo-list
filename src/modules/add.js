import UI from './ui';
import Storage from './storage';

const Add = (() => {
  const inputElement = document.getElementById('task-input');

  let tasks = localStorage.length > 0 ? [Storage.getLocal()] : [];

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
    let task = {
      description: '',
      completed: false,
      index: tasks.length,
    };

    task.description = inputElement.value;
    tasks.push(task);
    console.log(tasks);
    Storage.setLocal(tasks);
    UI.createTaskUI(task);
  };

  return { tasks, createTask, enterEvent, arrowEvent };
})();
export default Add;
