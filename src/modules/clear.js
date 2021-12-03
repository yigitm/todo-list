import Add from './add';
import Storage from './storage';

const Clear = (() => {
  const completedValues = (box) => {
    const boxIndex = Add.tasks.findIndex(
      (task) => task.index === parseInt(box.id, 10),
    );
    Add.tasks.splice(boxIndex, 1);
    Storage.setLocal(Add.tasks);
  };
  return { completedValues };
})();
export default Clear;
