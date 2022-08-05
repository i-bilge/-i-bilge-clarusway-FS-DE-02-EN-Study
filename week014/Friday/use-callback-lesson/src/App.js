import './App.css';
import {useState} from 'react';

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 1]
  }

  const theme = {
    backgroundColor: dark? 'black' : 'white',
    color: dark? 'white' : 'black'
  }
  return (
    <div style={theme}>
      <input type="number" value={number}  onClick= { e => setNumber(parseInt(e.target.value)))}/>

      <button></button>
    </div>

  );
}

export default App;
