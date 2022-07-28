import { useState, createContext, useEffect } from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

//STEPS: 1-import { useState, createContext, useContext } / 2-const UserContext = createContext(); 
// 3- function Component1() {
//   const [user, setUser] = useState("Jesse Hall");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </UserContext.Provider>
//   );
// }
// 4- function Component5() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }
//----------------------------Abstract of the topic----------------------------------------------------------------

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
