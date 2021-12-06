const UI = (() => {
  const task = {
    description: '',
    completed: '',
    index: '',
  };

  const tasks = [];

  const markTask = (eTarget) => {
    eTarget.checked
      ? (eTarget.nextSibling.style.textDecoration = 'line-through')
      : (eTarget.nextSibling.style.textDecoration = '');
  };

  const removeTask = (eTarget) => {
    eTarget.parentNode.remove();
  };
  return { task, tasks, markTask, removeTask };
})();
export default UI;
