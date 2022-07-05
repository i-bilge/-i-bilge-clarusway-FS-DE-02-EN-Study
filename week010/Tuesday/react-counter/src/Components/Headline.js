import React, {useState} from 'react';
import H1 from './H1'

const Headline = ()=>{

    const [greeting, setGreeting] = useState(
        'Hello Functional Stateful Component!'
    )

    // const [anotherValue, setAnotherValue] = useState(
    //     'initial value'
    // )

    return (
        <>
            <H1 text = {greeting} />
            
            <input
                type="text"
                value={greeting}
                onChange={
                    e => setGreeting(e.target.value)
                }
            ></input>
        </>
    )
}

export default Headline