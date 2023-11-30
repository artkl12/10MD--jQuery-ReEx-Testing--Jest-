const nameLengthFrom2To50 = (input: string | number | string[]) => {
  const str = input.toString();
  if (str.length >= 2 && str.length <= 50) {
    return true;
  }
  return false;
};

export default nameLengthFrom2To50;