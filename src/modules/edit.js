import Storage from './storage';
import Add from './add';

const Edit = (() => {
  const descriptionValue = (span) => {
    console.log(span.previousSibling.id);
    console.log(span.innerText);
  };
  return { descriptionValue };
})();
export default Edit;
