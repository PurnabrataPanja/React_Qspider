import React, { useState }  from "react";

const CounterFB = ()=>{
    const [counter,setCounter] = useState(0)
    return (
        <>
        <h1>{counter}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>Increment</button>
        <button onClick={()=>{setCounter(0)}}>Reset</button>
        <button onClick={()=>{setCounter(counter - 1)}}>Decrement</button>
        </>
    )
}
export default CounterFB;