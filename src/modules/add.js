const Add = (() => {
  const inputElement = document.getElementById('task-input');

  let tasks = [];
  let task = () => {
    return {
      description: '',
      completed: false,
      index: 0,
    };
  };

  const enterEvent = () => {
    inputElement.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        console.log(e.key);
        createTask();
      }
    });
  };

  const createTask = () => {
    let newTask = task();
    if (tasks.length > 0) {
      newTask.index = tasks.length - 1;
    }
    newTask.description = inputElement.innerText;
    tasks.push(newTask);
    console.log(tasks);
  };

  return { tasks, createTask, enterEvent };
})();
export default Add;
