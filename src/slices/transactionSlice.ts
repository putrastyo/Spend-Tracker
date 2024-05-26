import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("transactions");
    if (serializedState === null) {
      return {
        transactions: [],
        balance: 0,
      };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return {
      transactions: [],
      balance: 0,
    };
  }
};

const initialState = loadState();

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      if (action.payload.type === "Income") {
        state.balance += action.payload.amount;
      } else if (action.payload.type === "Expense") {
        state.balance -= action.payload.amount;
      }
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
