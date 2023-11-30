const mailContainsCharAt = (input: string | number | string[]) => {
  const str = input.toString();
  let countCharAt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "@") {
      countCharAt++;
    }
  }
  if (countCharAt !== 1) {
    return false;
  }
  return true;
};

export default mailContainsCharAt;
