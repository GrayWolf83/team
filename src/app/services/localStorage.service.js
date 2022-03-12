export function changeBookmark(name) {
    localStorage.getItem(name)
        ? localStorage.removeItem(name)
        : localStorage.setItem(name, true)
}
export function getBookmark(name) {
    return localStorage.getItem(name)
}

const localStorageService = {
    changeBookmark,
    getBookmark
}

export default localStorageService
