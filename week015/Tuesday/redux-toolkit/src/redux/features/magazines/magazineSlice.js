import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { buyBook } from "../books/bookSlice";

const initialState = { numOfMagazines: 300 };

const magazinesSlice = createSlice({
  name: "magazine",
  initialState,
  reducers: {
    buyMagazine: (state, action) => {
      state.numOfMagazines = state.numOfMagazines - action.payload;
    },
    supplyMagazine: (state, action) => {
      state.numOfMagazines = state.numOfMagazines + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyBook, (state, action) => {
      state.numOfMagazines =  state.numOfMagazines - action.payload
    })
  }
});

export const { buyMagazine, supplyMagazine } = magazinesSlice.actions;
export default magazinesSlice.reducer;
