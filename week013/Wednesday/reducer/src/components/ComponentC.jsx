import React, { useContext } from "react";
import { CounterContext } from "../App";

function ComponentC() {
  const { counterState, counterDispatch } = useContext(CounterContext);
  return (
    <>
      <div>ComponentC - {counterState}</div>
      <button onClick={() => counterDispatch("increment")}>Increment</button>
      <button onClick={() => counterDispatch("decrement")}>Decrement</button>
      <button onClick={() => counterDispatch("reset")}>Reset</button>
    </>
  );
}

export default ComponentC;
