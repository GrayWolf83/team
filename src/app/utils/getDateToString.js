export const getDateToString = (time) => {
    const date = new Date(time)
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}
