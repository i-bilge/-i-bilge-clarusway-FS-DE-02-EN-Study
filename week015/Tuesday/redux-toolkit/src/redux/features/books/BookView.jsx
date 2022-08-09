import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "./bookSlice";

export const BookView = () => {
  const numOfBooks = useSelector((state) => state.book.numOfBooks);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Books - {numOfBooks}</h2>
      <button onClick={() => dispatch(buyBook(3))}>Buy Magazine</button>
    </div>
  );
};
