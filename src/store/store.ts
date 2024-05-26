import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../slices/transactionSlice";
import localStorageMiddleware from "../middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
