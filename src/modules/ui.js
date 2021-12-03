import UI from './ui';

const Backend = (() => {
  const setLocal = (tasks) => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  };

  const getLocal = () => {
    const localData = JSON.parse(localStorage.getItem('Tasks'));
    return localData;
  };
  // Create task
  const inputElement = document.getElementById('task-input');
  let tasks = localStorage.length > 0 ? getLocal() : [];
  const createTask = () => {
    const task = {
      description: inputElement.value,
      completed: false,
      index: tasks.length,
    };

    tasks.push(task);
    setLocal(tasks);
    createTaskUI(task);
  };
  // Add task when press enter
  const enterEvent = () => {
    inputElement.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        createTask();
        //location.reload();
      }
    });
  };
  // Add task when click
  const arrowEvent = () => {
    const iconElement = document.getElementById('create-task');
    iconElement.addEventListener('click', () => {
      createTask();
    });
  };
  // Update value of completed
  const updateStatus = (checkbox) => {
    const taskIndex = tasks.findIndex(
      (task) => task.index === parseInt(checkbox.id, 10),
    );

    if (tasks[taskIndex].completed) {
      tasks[taskIndex].completed = false;
      setLocal(tasks);
    } else {
      tasks[taskIndex].completed = true;
      setLocal(tasks);
    }
  };
  // Update description value
  const descriptionValue = (span) => {
    tasks[span.previousSibling.id].description = span.innerText;
    setLocal(tasks);
  };
  // Remove task from local storage & temporary array tasks
  const taskValue = (span) => {
    const itemIndex = tasks.findIndex(
      (task) => task.index === parseInt(span.previousSibling.id, 10),
    );
    tasks.splice(itemIndex, 1);
    setLocal(tasks);
  };
  //UI related functions starts from here
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
    const taskContainer = document.getElementById('task-container');
    let allTasks = JSON.parse(localStorage.getItem('Tasks'));
    let taskLi = '<ul>';
    allTasks.forEach((task) => {
      taskLi += `<li><input class="check-box" type="checkbox" name="checkbox" id="${
        task.index
      }" ${
        task.completed ? 'checked' : ''
      }/><textarea contentEditable="false" id="edit">${task.description}
    </textarea><i class="fas fa-ellipsis-v fa-1x"></i></li>`;
    });
    taskLi += '</ul>';
    taskContainer.innerHTML = taskLi;
  };

  const showTasks = () => {
    if (localStorage.length > 0) {
      tasks = getLocal();
      tasks.forEach((task) => {
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
        descriptionValue(span);
        span.style.backgroundColor = null;
      }
    });
  };

  const removeTask = (span) => {
    const deleteIcon = span.nextElementSibling;
    deleteIcon.addEventListener('click', () => {
      span.parentNode.remove();
      taskValue(span);
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
    const filters = [];
    clear.addEventListener('click', () => {
      tasks.filter((item) => {
        if (item.completed) {
          filters.push(item.index);
        }
        return filters;
      });
      filters.forEach((element) => {
        checkbox[element].parentNode.style.display = 'none';
      });
    });
  };

  return {
    tasks,
    setLocal,
    getLocal,
    createTask,
    enterEvent,
    arrowEvent,
    updateStatus,
    descriptionValue,
    taskValue,
    updateCrossLine,
    checkCrossline,
    createTaskUI,
    showTasks,
    changeDescription,
    removeTask,
    filterCompleted,
  };
})();
export default Backend;
