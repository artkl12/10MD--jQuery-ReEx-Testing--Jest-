const mailDoesntContainAnySymbol = (input: string | number | string[]) => {
    const str = input.toString();
    const pattern = /^[a-z0-9.@_]+$/i
    const isValid = pattern.test(str);     
    return isValid;
}

export default mailDoesntContainAnySymbol;