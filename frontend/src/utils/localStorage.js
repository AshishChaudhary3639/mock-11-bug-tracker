const saveToken = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, value);
  }
};

const getToken = (key) => {
  let token = localStorage.getItem(key);

  return token;
};

export { saveToken, getToken };
