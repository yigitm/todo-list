import Storage from './storage';
import Add from './add';

const Remove = (() => {
  const taskValue = (span) => {
    const itemIndex = Add.tasks.findIndex(
      (task) => task.index === parseInt(span.previousSibling.id, 10),
    );
    Add.tasks.splice(itemIndex, 1);
    Storage.setLocal(Add.tasks);
  };
  return { taskValue };
})();
export default Remove;
