import {useState, useRef} from 'react'

const UseRef2 = () => {
    const [name, setName] = useState("");
    const inputRef = useRef();

    function focus(){
        console.log(inputRef.current);
        inputRef.current.focus()
        inputRef.current.value = "some thing"
    }
    
      return (
        <>
          <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
          <div>My name is {name}</div>
          <butto onClick={focus}>Focus</butto>
        </>
      );
    }

export default UseRef2
