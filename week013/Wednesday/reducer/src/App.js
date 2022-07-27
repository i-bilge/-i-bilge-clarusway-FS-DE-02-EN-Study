import { useReducer, createContext } from "react";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const CounterContext = createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CounterContext.Provider
        value={{ counterState: count, counterDispatch: dispatch }}
      >
        <ComponentA />
      </CounterContext.Provider> */}
      {/* <DataFetchingOne /> */}
      <DataFetchingTwo />
    </div>
  );
}

export default App;
