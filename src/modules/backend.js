import UI from './ui';

const Backend = (() => {
  const setLocal = (tasks) => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  };

  const getLocal = () => {
    const localData = JSON.parse(localStorage.getItem('Tasks'));
    return localData;
  };
  //Create task
  const inputElement = document.getElementById('task-input');
  const tasks = localStorage.length > 0 ? getLocal() : [];
  const createTask = () => {
    const task = {
      description: '',
      completed: false,
      index: tasks.length,
    };

    task.description = inputElement.value;
    tasks.push(task);
    setLocal(tasks);
    UI.createTaskUI(task);
  };
  // Add task when press enter
  const enterEvent = () => {
    inputElement.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        createTask();
        location.reload();
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
  //Update value of completed
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
  //Update description value
  const descriptionValue = (span) => {
    tasks[span.previousSibling.id].description = span.innerText;
    setLocal(tasks);
  };
  //Remove task from local storage & temporary array tasks
  const taskValue = (span) => {
    const itemIndex = tasks.findIndex(
      (task) => task.index === parseInt(span.previousSibling.id, 10),
    );
    tasks.splice(itemIndex, 1);
    setLocal(tasks);

    //Clear all completed tasks
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
  };
})();
export default Backend;
