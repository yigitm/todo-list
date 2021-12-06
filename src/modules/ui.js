const UI = (() => {
  let tasks = [];
  const taskContainer = document.getElementById('task-container');
  const inputField = document.getElementById('task-input');

  const getLocal = () => {
    const localData = JSON.parse(localStorage.getItem('Tasks'));
    return localData;
  };

  const setLocal = (tasks) => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  };

  const createTask = () => {
    const task = {
      description: inputField.value,
      completed: false,
      index: tasks.length,
    };
    tasks.push(task);
    setLocal(tasks);
    return task;
    //console.log(tasks);
  };

  const taskElement = (task) => {
    // Single task parent
    const taskWrapper = document.createElement('div');
    taskWrapper.setAttribute('id', `${task.index}`);
    // create checkbox & its event
    const checkbox = document.createElement('input');
    checkbox.classList.add('checked');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.addEventListener('click', (e) => markTask(e.target));
    // create textArea for task
    const textArea = document.createElement('textarea');
    textArea.setAttribute('id', 'edit');
    textArea.innerText = task.description;
    // create remove button & its event
    const iconClass = ['far', 'fa-trash-alt', 'fa-1x'];
    const delIcon = document.createElement('i');
    delIcon.classList.add(...iconClass);
    delIcon.addEventListener('click', (e) => UI.removeTask(e.target));
    //Add items to task Container
    taskWrapper.append(checkbox);
    taskWrapper.append(textArea);
    taskWrapper.append(delIcon);
    taskContainer.append(taskWrapper);
  };

  const showTasks = () => {
    localStorage.length !== 0 ? (tasks = getLocal()) : false;
    tasks.forEach((task) => {
      taskElement(task);
    });
  };

  const markTask = (eTarget) => {
    eTarget.checked
      ? (eTarget.nextSibling.style.textDecoration = 'line-through')
      : (eTarget.nextSibling.style.textDecoration = '');
  };

  const removeTask = (eTarget) => {
    eTarget.parentNode.remove();
  };

  const clearTask = () => {
    let checkedItems = document.querySelectorAll('.checked');
    let [...allChecks] = checkedItems;
    allChecks
      .filter((item) => item.checked === true)
      .forEach((item) => {
        item.parentNode.style.display = 'none';
      });
  };
  return {
    tasks,
    taskElement,
    createTask,
    showTasks,
    markTask,
    removeTask,
    clearTask,
  };
})();
export default UI;
