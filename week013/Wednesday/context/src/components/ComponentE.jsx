import React, { useContext } from "react";
import { CounterContext, TodoContext } from "../App";
import ComponentF from "./ComponentF";

function ComponentE() {
  const { counterUser } = useContext(CounterContext);
  const { todo, isAdmin } = useContext(TodoContext);

  return (
    <>
      <div> {`ComponentE Counter is: ${counterUser}`}</div>
      <div> {`Todo is: ${todo.title}`}</div>
      {isAdmin && <div>IsAdmin</div>}
      <ComponentF />
    </>
  );
}

export default ComponentE;
