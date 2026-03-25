/* eslint-disable react-refresh/only-export-components */
import React,{createContext,useEffect,useState} from "react";
export const context = createContext("");
let {Provider} = context;
const Provider3 = (props)=>{
    const [data,setDate]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then((x)=>x.json())
        .then((y)=>setDate(y))
        .catch((err)=>console.log(err))
    },[])
    return(<>
    <Provider value={data}>
        {props.children}
    </Provider>
    </>)
}
export default Provider3;