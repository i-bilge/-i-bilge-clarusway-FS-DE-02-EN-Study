import React from "react";
import { CounterContext } from "../App";

function ComponentF() {
  return (
    <CounterContext.Consumer>
      {({ counterUser, setCounter }) => {
        return (
          <>
            <div>ComponentF </div>
            <div> {`Counter is: ${counterUser}`}</div>
            <button onClick={() => setCounter((prev) => prev + 1)}>
              Increase
            </button>
          </>
        );
      }}
    </CounterContext.Consumer>
  );
}

export default ComponentF;
