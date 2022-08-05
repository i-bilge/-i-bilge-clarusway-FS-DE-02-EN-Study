import './App.css';
import { useState } from "react"

function App(){

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = slowFunction(number)

  const themeStyles = {
    backgroundColor: dark? 'black' : 'white',
    color: dark? 'white' : 'black'
  }

  function slowFunction(num){
    console.log("calling slow function...")
    for(let i = 0; i < 1000000000; i++){

    }
    return num*2
  }

  return(
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
      <button onClick={()=>setDark(!dark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default App;