export const required = (value) => {
    if(value) return undefined;
    return "Field is required"
}

export const maxLengthCreator = (maxSymbols) => {
    return (value) => {
        if(value.length > maxSymbols) return `Max length is ${maxSymbols} symbols`;
        return undefined
    }
}