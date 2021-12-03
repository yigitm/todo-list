import Storage from './storage';
import Add from './add';
import UI from './ui';

const Edit = (() => {
  const descriptionValue = (span) => {
    Add.tasks[span.previousSibling.id].description = span.innerText;
    Storage.setLocal(Add.tasks);
  };
  return { descriptionValue };
})();
export default Edit;
