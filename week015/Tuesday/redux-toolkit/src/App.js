import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import { BookView } from "./redux/features/books/BookView";
import { MagazineView } from "./redux/features/magazines/MagazineView";
import { CustomerView } from "./redux/features/costumers/CustomerView";

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <BookView />
        <MagazineView />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
