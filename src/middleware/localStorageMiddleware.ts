export const localStorageMiddleware =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    if (action.type.startsWith("transactions/")) {
      const state = store.getState();
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
    }
    return result;
  };

export default localStorageMiddleware;
