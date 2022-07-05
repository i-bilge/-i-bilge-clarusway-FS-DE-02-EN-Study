import React from 'react';
import H1 from './H1';
import Headline from './Headline';

class Counter extends React.Component{
    constructor(){
        super();

        // initialize sate
        this.state = {
            count: 0
        }

        // binding handlers with class based components:
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    // when changing state based on a previous state, use the prev state argument:
    increment(){
        this.setState(prev => ({
            count: prev.count + 1
        }))
    }

    decrement(){
        this.setState(prev =>({
            count: prev.count - 1
        }))
    }

    render(){
        return(
            <div className = "counter">
                <Headline />
                <H1 text={this.state.count} prop2 = "!" />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter;