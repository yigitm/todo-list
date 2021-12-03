import Add from './add';

const Status = (() => {
  const updateStatus = (checkbox) => {
    const taskIndex = Add.tasks.findIndex(
      (task) => task.index === parseInt(checkbox.id, 10),
    );
    let task = Add.tasks[taskIndex];
    task.completed ? (task.completed = false) : (task.completed = true);
  };
  return { updateStatus };
})();
export default Status;
