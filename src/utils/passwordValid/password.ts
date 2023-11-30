const passwordContainsNumberChar = (input: string | number | string[]) => {
    const str = input.toString();
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/; 
    const isValid = regex.test(str);
    return isValid;
}

export default passwordContainsNumberChar;