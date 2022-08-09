import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../features/books/bookSlice";
import magazinesSlice from "../features/magazines/magazineSlice";
// import magazineReducer from "../features/bookSlice";

const store = configureStore({
  reducer: { book: bookReducer, magazine: magazinesSlice },
});

export default store
