import "./App.css";
import  CoffeeContainer  from "./components/CoffeeContainer";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CoffeeContainer />
      </Provider>
    </div>
  );
}

export default App;
