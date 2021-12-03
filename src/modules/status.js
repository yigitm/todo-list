import Add from './add';

const Status = (() => {
  const updateStatus = (checkbox) => {
    const taskIndex = Add.tasks.findIndex(
      (task) => task.index === parseInt(checkbox.id, 10),
    );
    let task = Add.tasks[parseInt(taskIndex, 10)];
    task.completed ? (task.completed = false) : (task.completed = true);

    console.log(task.completed);
  };
  return { updateStatus };
})();
export default Status;
