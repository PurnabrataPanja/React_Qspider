/* eslint-disable no-unused-vars */
import React,{useState} from "react";
const Switch = ()=>{
    const [color,setColor]=useState("green");
    switch((color)){
        case 'red':
            return <h1 style={{color:color}}>you are selected A</h1>
        case 'blue':
            return <h1 style={{color:color}}>you are selected B</h1>
        case 'green':
            return <h1 style={{color:color}}>you are selected C</h1>
        default:
            return <h1>no options are seleted</h1>
    }
}
export default Switch;