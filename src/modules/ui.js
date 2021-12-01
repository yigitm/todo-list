const UI = (() => {
  const updateStatus = (eTarget) => {
    const status = eTarget.nextElementSibling;
    if (status.style.textDecoration === 'line-through') {
      status.style.textDecoration = 'none';
      return false;
    }
    status.style.textDecoration = 'line-through';
    return true;
  };

  const checkStatus = (tasks, checkbox) => {
    tasks.forEach((element) => {
      if (element.completed === true) {
        checkbox[element.index].nextElementSibling.style.textDecoration = 'line-through';
      }
    });
  };
  return { updateStatus, checkStatus };
})();
export default UI;
