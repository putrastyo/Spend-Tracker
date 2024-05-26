export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type.startsWith("transactions/")) {
    const state = store.getState();
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }
  return result;
};

export default localStorageMiddleware;
