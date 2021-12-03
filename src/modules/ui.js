import Add from './add';
import Storage from './storage';
import Edit from './edit';

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
    }" ${
      task.completed ? 'checked' : ''
    }/><text contentEditable="false" id="edit">${task.description}
    </text><i class="fas fa-ellipsis-v fa-1x"></i>`;
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

  const changeDescription = () => {
    const spanElements = document.querySelectorAll('#edit');
    spanElements.forEach((span) => {
      span.addEventListener('mouseover', (e) => {
        if (span.contentEditable === true) {
          span.contentEditable = false;
          span.nextElementSibling.classList = 'fas fa-ellipsis-v fa-1x';
        } else {
          span.contentEditable = true;
          span.style.backgroundColor = 'bisque';
          span.nextElementSibling.classList = 'far fa-trash-alt';
          keyEvent(span);
        }
      });
    });
  };

  const keyEvent = (span) => {
    span.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        span.nextElementSibling.classList = 'fas fa-ellipsis-v fa-1x';
        e.preventDefault();
        span.contentEditable = false;
        Edit.descriptionValue(span);
      }
    });
  };

  return {
    updateCrossLine,
    checkCrossline,
    createTaskUI,
    showTasks,
    changeDescription,
  };
})();
export default UI;
