import "./App.css";
import  Users  from "./components/Users/Users";
import { Greeting } from "./components/Greeting/Greeting";
import { CustomHookComponent } from "./components/CustomHookComponent";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Greeting />
      {/* <Users /> */}
      <CustomHookComponent />
    </div>
  );
}

export default App;
