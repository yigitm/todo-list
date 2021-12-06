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

  const clearTask = () => {
    const checkedItems = document.querySelectorAll('.checked');
    checkedItems.forEach((item) => {
      item.checked ? (item.parentNode.style.display = 'none') : false;
    });
  };
  return { task, tasks, markTask, removeTask, clearTask };
})();
export default UI;
