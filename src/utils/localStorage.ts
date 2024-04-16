export const getLocalStorage = () => {
  const data = [];
  const keys = Object.keys(localStorage);

  for (const key of keys) {
    const item = localStorage.getItem(key);

    if (item) {
      const value = JSON.parse(item);

      data.push(value);
    }
  }

  return data;
};
