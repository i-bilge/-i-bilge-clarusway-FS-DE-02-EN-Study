import './App.css';
import {useState, useEffect} from "react"

function App() {
  const [name, setName] = useState("")
  const [renderCount, setRenderCount] = useState (1)

  useEffect(()=>{
    setRenderCount(prevRenderCount=>prevRenderCount + 1)
  })

  return (
    <>
      <input value={name} onChange={e=>setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount} times.</div>
    </>
  );
}

export default App;
