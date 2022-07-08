import "./App.css";
import React, { useState } from "react";
import PersonClass from "./components/PersonClass";
import FunctionalComp from "./components/FunctionalComp";

function App() {
  const sayHi = () => {
    alert("Hi, Welcome to the page!");
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("You submitted it!.");
  };

  // let counter = 0;
  let [counter, setCounter] = useState(0);

  const increase = () => {
    // counter++;
    setCounter(++counter)
    console.log("counter", counter);
  };

  return (
    <div className="App">
      <h1>Events in React</h1>
      <div>
        <button
          onClick={() => {
            alert("Hi, Welcome to the page!");
          }}
        >
          Click Me React
        </button>

        <button onClick={() => sayHi()}>Click Me React</button>
        <button onClick={sayHi}>Click Me React</button>

        {/* <button onClick={sayHi()}>Click Me React</button> FALSE */}

        {/* <form onSubmit={formSubmit}> */}
        <form onSubmit={(event) => formSubmit(event)}>
          <label id="name">Name</label>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div style={{ border: "1px solid red", marginTop: "50px" }}>
        <h2>Button clicked {counter} times</h2>
        <button onClick={increase}>Click me to increase the number</button>
      </div>

      <PersonClass />

      <FunctionalComp/>


    </div>
  );
}

export default App;
