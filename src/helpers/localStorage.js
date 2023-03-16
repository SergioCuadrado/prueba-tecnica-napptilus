export const updateLocalStorage = (item, state) => {
  window.localStorage.setItem(item, JSON.stringify(state))
}
