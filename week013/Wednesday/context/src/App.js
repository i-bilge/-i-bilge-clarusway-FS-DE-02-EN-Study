import { useState, createContext, useEffect } from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

export const CounterContext = createContext();
export const TodoContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const getTodos = async () => {
      fetch("https://jsonplaceholder.typicode.com/todos/10")
        .then((response) => response.json())
        .then((json) => {
          setTodo(json);
        });
    };
    getTodos();
  }, []);

  return (
    <div className="App">
      <CounterContext.Provider
        value={{ counterUser: counter, setCounter }}
      >
        <TodoContext.Provider value={{ todo: todo, isAdmin: false }}>
          <ComponentC />
        </TodoContext.Provider>
      </CounterContext.Provider>
    </div>
  );
}

export default App;

//1. Create a context
//2. Provide the context
//3. Consume the context
