const UI = (() => {
  const ulElement = document.getElementsByTagName('ul')[0];

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
    if (tasks != null) {
      tasks.forEach((element) => {
        if (element.completed === true) {
          checkbox[element.index].nextElementSibling.style.textDecoration =
            'line-through';
        }
      });
    }
  };

  const createTask = () => {
    const liElement = document.createElement('li');
    liElement.innerHTML = `<input class="check-box" type="checkbox" name="checkbox" id="${tasks[i].index}"/><span>${tasks[i].description}: ${tasks[i].index}</span><i class="fas fa-ellipsis-v fa-1x"></i>`;
    ulElement.appendChild(liElement);
  };

  return { updateStatus, checkStatus };
})();
export default UI;
