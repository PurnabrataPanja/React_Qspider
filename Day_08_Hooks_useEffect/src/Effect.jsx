


import React,{useEffect,useState} from "react";
const Effect = ()=>{
  let [count,setCount]=useState(0);
  useEffect(()=>{
    console.log(`The count is ${count}`)
  },[count])
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>click me</button>
    </>
  )
}
export default Effect;