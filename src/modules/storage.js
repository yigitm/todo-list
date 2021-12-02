const Storage = (() => {
  const setLocal = (tasks) => {
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  };

  const getLocal = () => {
    let localData = JSON.parse(localStorage.getItem('Tasks'));
    return localData;
  };
  return { setLocal, getLocal };
})();
export default Storage;
