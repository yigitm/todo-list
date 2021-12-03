import Backend from './backend';

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
    }/><span contentEditable="false" id="edit">${task.description}
    </span><i class="fas fa-ellipsis-v fa-1x"></i>`;
    ulElement.appendChild(liElement);
  };

  const showTasks = () => {
    if (localStorage.length > 0) {
      Backend.tasks = Backend.getLocal();
      Backend.tasks.forEach((task) => {
        createTaskUI(task);
      });
    }
  };

  const keyEvent = (span) => {
    span.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        span.nextElementSibling.classList = 'fas fa-ellipsis-v fa-1x';
        span.contentEditable = false;
        Backend.descriptionValue(span);
        span.style.backgroundColor = null;
      }
    });
  };

  const removeTask = (span) => {
    const deleteIcon = span.nextElementSibling;
    deleteIcon.addEventListener('click', () => {
      span.parentNode.remove();
      Backend.taskValue(span);
    });
  };

  const changeDescription = () => {
    const spanElements = document.querySelectorAll('#edit');
    spanElements.forEach((span) => {
      span.addEventListener('mouseenter', () => {
        if (span.contentEditable === true) {
          span.contentEditable = false;
          span.nextElementSibling.classList = 'fas fa-ellipsis-v fa-1x';
        } else {
          span.contentEditable = true;
          span.style.backgroundColor = 'bisque';
          span.nextElementSibling.classList = 'far fa-trash-alt';
          keyEvent(span);
          removeTask(span);
        }
      });
    });
  };

  const filterCompleted = (checkbox) => {
    const clear = document.querySelector('.clear');
    let arr = [];
    clear.addEventListener('click', () => {
      Backend.tasks.filter((item) => {
        if (item.completed) {
          arr.push(item.index);
        }
      });
      arr.forEach((element) => {
        checkbox[element].parentNode.style.display = 'none';
        console.log();
      });
    });
  };

  return {
    updateCrossLine,
    checkCrossline,
    createTaskUI,
    showTasks,
    changeDescription,
    removeTask,
    filterCompleted,
  };
})();
export default UI;
