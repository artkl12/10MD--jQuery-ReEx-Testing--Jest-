const validEmail = (str: string | number | string[]) => {
  const text = str.toString();
  if (text.length < 5) {
    return false;
  }
  if (text.indexOf(".") === -1) {
    return false;
  }
  return true;
};

export default validEmail;