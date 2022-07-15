import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Item from "./component/Item";
import Search from "./component/Search";
import SortDropdown from "./component/SortDropdown";
import Summary from "./component/Summary";
import { data } from "./data.js";
import { calculateTotalItem, calculateTotalPrice } from "./utils/util";
import { debounce } from "lodash";

function App() {
  const [items, setItems] = useState(data);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [search, setSearch] = useState("");

  const handleRemove = (productId) => {
    const newItems = items.filter((item) => item.id !== productId);
    setItems(newItems);
    calculateTotalItem(newItems, setNumberOfItems);
    calculateTotalPrice(newItems, setTotalPrice);
  };

  const handleIncrement = (productId) => {
    const index = items.findIndex((item) => item.id === productId);

    const newItems = [...items]; // Making a clone of an array = !!!!!
    newItems[index].count++;
    setItems(newItems);

    calculateTotalItem(newItems, setNumberOfItems);

    calculateTotalPrice(newItems, setTotalPrice);
  };
  const handleDecrement = (productId) => {
    const index = items.findIndex((item) => item.id === productId);

    const newItems = [...items]; // Making a clone of an array = !!!!!
    if (newItems[index].count > 0) {
      newItems[index].count--;
    }
    setItems(newItems);

    calculateTotalItem(newItems, setNumberOfItems);

    calculateTotalPrice(newItems, setTotalPrice);
  };

  const handleSearch = debounce((event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm.toLowerCase());
  }, 500);

  const handleSort = (event) => {
    const sortBy = event.target.value;
    const newItems = [...items];
    let sortedItems;
    if (sortBy === "dec") {
      sortedItems = newItems.sort((a, b) => b.price - a.price);
    } else if (sortBy === "inc") {
      sortedItems = newItems.sort((a, b) => a.price - b.price);
    }
    setItems(sortedItems);
  };

  return (
    <div className="App">
      <Header />
      <Summary numberOfItems={numberOfItems} totalPrice={totalPrice} />
      <Search handleSearch={handleSearch} />
      <SortDropdown handleSort={handleSort} />
      <div className="items">
        {items
          .filter((item) => item.title.toLowerCase().includes(search))
          .map((item, index) => {
            return (
              <Item
                key={index}
                product={item}
                handleRemove={handleRemove}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
