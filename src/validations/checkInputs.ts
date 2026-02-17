export const checkInputs = (value: string): boolean => {
    return /^0?9\d{9}$/.test(value)
}