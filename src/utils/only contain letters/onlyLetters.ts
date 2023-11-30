const nameDoesntContainAnySymbol = (input: string | number | string[]) => {
    const str = input.toString();
    const pattern = /^[a-zāčēģīķļņšūž ]+$/i
    const isValid = pattern.test(str);     
    return isValid;
}

export default nameDoesntContainAnySymbol;