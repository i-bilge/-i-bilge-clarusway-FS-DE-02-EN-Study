import { useReducer, createContext } from "react";
import "./App.css";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";

//STEPS: !-useReducer(<reducer>, <initialState>) / 1-import { useReducer } from "react";
// 2-const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];
// 3-const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };
// 4-function Todos() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };
// LAST-  return (
//   <>
//     {todos.map((todo) => (
//       <div key={todo.id}>
//         <label>
//           <input
//             type="checkbox"
//             checked={todo.complete}
//             onChange={() => handleComplete(todo)}
//           />
//           {todo.title}
//         </label>
//       </div>
//     ))}
//   </>
// );
//-----------------------------------------------------------------------------------------
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
