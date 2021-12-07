const UI = (() => {
  let tasks = [];
  //get data from storage
  const getLocal = () => {
    const localData = JSON.parse(localStorage.getItem('Tasks'));
    return localData;
  };
  //set data from storage
  const setLocal = (tasks) => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  };
  //create task object & add it to tasks array & save tasks array to local
  const createTask = () => {
    const inputField = document.getElementById('task-input');

    let task = {
      description: inputField.value,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(task);
    setLocal(tasks);
    return task;
  };
  //Takes the return value of createTask() & create the task Html elements
  const taskElement = (task) => {
    const taskContainer = document.getElementById('task-container');
    // Single task parent
    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('task-wrapper');
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
    delIcon.addEventListener('click', (e) => removeTask(e.target));
    //Add items to task Container
    taskWrapper.append(checkbox);
    taskWrapper.append(textArea);
    taskWrapper.append(delIcon);
    taskContainer.append(taskWrapper);
  };
  // Get local data & shows all saved data by calling taskElement
  const showTasks = () => {
    localStorage.length !== 0 ? (tasks = getLocal()) : false;
    tasks.forEach((task) => {
      taskElement(task);
      checkCompleted(task);
    });
  };
  // Helper method to find single task index by using its html id
  const indexFinder = (item) => {
    let t = tasks.filter((t) => t.index === parseInt(item, 10));
    return tasks.indexOf(t[0]);
  };
  // When DOM loaded; checks the completed value: 'true' & add line on it
  const checkCompleted = (task) => {
    let cBox = document.getElementById(task.index).firstChild;
    task.completed
      ? ((cBox.nextSibling.style.textDecoration = 'line-through'),
        (cBox.checked = true))
      : false;
  };
  //Mark or unmark the each task with checkbox
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
  // Remove data both from UI & local storage
  const removeTask = (eTarget) => {
    const taskIndex = indexFinder(eTarget.parentNode.id);
    tasks.splice(taskIndex, 1);
    setLocal(tasks);
    eTarget.parentNode.remove();
  };
  // Filter the completed tasks
  const clearTask = () => {
    const checkedItems = document.querySelectorAll('.checked');
    let [...allChecks] = checkedItems;
    allChecks
      .filter((c) => c.checked === true)
      .forEach((c) => {
        c.parentNode.style.display = 'none';
      });
  };
  //When change event called; updates task.description & save it to local
  const editTask = (eTarget) => {
    const editIndex = indexFinder(eTarget.parentNode.id);

    eTarget.addEventListener('change', (e) => {
      tasks[editIndex].description = e.target.value;
      setLocal(tasks);
    });
  };

  return {
    taskElement,
    createTask,
    showTasks,
    editTask,
    clearTask,
  };
})();
export default UI;
