import { createSlice } from "@reduxjs/toolkit";

const initialState = { numOfBooks: 100 };

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    buyBook: (state, action) => {
      state.numOfBooks = state.numOfBooks - action.payload;
    },
    supplyBook: (state, action) => {
      state.numOfBooks = state.numOfBooks + action.payload;
    },
  },
});

export const { buyBook, supplyBook } = bookSlice.actions;
export default bookSlice.reducer;
