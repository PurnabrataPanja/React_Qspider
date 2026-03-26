import React from "react";

class CounterCB extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    handelIncrement = ()=>{
        this.setState({count:this.state.count + 1})
    }
    handelDecrement = ()=>{
        this.setState({count:this.state.count - 1})
    }
    handelReset = ()=>{
        this.setState({count:0})
    }

    render(){
        return(<>
        <h1>{this.state.count}</h1>
        <button onClick={this.handelIncrement}>Increment</button>
        <button onClick={this.handelReset}>Reset</button>
        <button onClick={this.handelDecrement}>Decrement</button>
        </>)
    }
}
export default CounterCB