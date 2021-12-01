const Status = (() => {
  const updateStatus = (checkbox, tasks) => {
    const status = tasks[checkbox.id];
    status.completed = true;
  };
  return { updateStatus };
})();
export default Status;
