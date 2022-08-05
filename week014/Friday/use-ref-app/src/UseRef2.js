import { useState, useRef} from "react"

function UseRef2() {
    const [name, setName] = useState("")
    const inputRef = useRef()
    // renderCount = {current: 1}

    function focus(){
        console.log(inputRef.current.value)
        inputRef.current.focus()
        inputRef.current.value = "some value"
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <button onClick={focus}>Focus</button>
        </>
    );
}

export default UseRef2