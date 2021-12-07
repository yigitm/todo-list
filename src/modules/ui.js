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
    let task = {
      description: inputField.value,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(task);
    setLocal(tasks);
    return task;
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

  const indexFinder = (item) => {
    let t = tasks.filter((t) => t.index === parseInt(item, 10));
    return tasks.indexOf(t[0]);
  };

  const markTask = (eTarget) => {
    const markIndex = indexFinder(eTarget.parentNode.id);

    eTarget.checked
      ? ((eTarget.nextSibling.style.textDecoration = 'line-through'),
        (tasks[markIndex].completed = true),
        setLocal(tasks))
      : ((eTarget.nextSibling.style.textDecoration = ''),
        (tasks[markIndex].completed = false),
        setLocal(tasks));
  };

  const removeTask = (eTarget) => {
    const taskIndex = indexFinder(eTarget.parentNode.id);
    tasks.splice(taskIndex, 1);
    setLocal(tasks);
    eTarget.parentNode.remove();
  };

  const clearTask = () => {
    const checkedItems = document.querySelectorAll('.checked');
    let [...allChecks] = checkedItems;
    allChecks
      .filter((c) => c.checked === true)
      .forEach((c) => {
        c.parentNode.style.display = 'none';
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
