const UI = (() => {
  const updateStatus = (eTarget) => {
    const status = eTarget.nextElementSibling;
    let count = 0;
    if (status.style.textDecoration == 'line-through') {
      status.style.textDecoration = 'none';
    } else {
      status.style.textDecoration = 'line-through';
    }
  };
  return { updateStatus };
})();
export default UI;
