import React,{useState} from "react";
const Ifandelse = ()=>{
    const [data,setData]=useState("Loading....");
    const handle=()=>{
        const a = 10;
        const b = 20;
        if(a>b){
            setData("a is greater")
        }else{
            setData("b is greater")
        }
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={handle}>click me</button>
        </div>
    )
}
export default Ifandelse;