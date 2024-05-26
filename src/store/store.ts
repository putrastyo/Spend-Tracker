import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../slices/transactionSlice";
import localStorageMiddleware from "../middleware/localStorageMiddleware";

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
