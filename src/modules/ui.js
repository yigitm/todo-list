import Add from './add';
import Storage from './storage';

const UI = (() => {
  const ulElement = document.getElementsByTagName('ul')[0];

  const updateCrossLine = (eTarget) => {
    const status = eTarget.nextElementSibling;
    if (status.style.textDecoration === 'line-through') {
      status.style.textDecoration = 'none';
      return false;
    }
    status.style.textDecoration = 'line-through';
    return true;
  };

  const checkCrossline = (tasks, checkbox) => {
    if (tasks != null) {
      tasks.forEach((element) => {
        if (element.completed === true) {
          checkbox[element.index].nextElementSibling.style.textDecoration =
            'line-through';
        }
      });
    }
  };

  const createTaskUI = (task) => {
    const liElement = document.createElement('li');
    liElement.innerHTML = `<input class="check-box" type="checkbox" name="checkbox" id="${
      task.index
    }" ${task.completed ? 'checked' : ''}/><span>${task.description}
    </span><i class="fas fa-ellipsis-v fa-1x"></i>`;
    ulElement.appendChild(liElement);
  };

  const showTasks = () => {
    if (localStorage.length > 0) {
      Add.tasks = Storage.getLocal();
      Add.tasks.forEach((task) => {
        createTaskUI(task);
      });
    }
  };

  return { updateCrossLine, checkCrossline, createTaskUI, showTasks };
})();
export default UI;
