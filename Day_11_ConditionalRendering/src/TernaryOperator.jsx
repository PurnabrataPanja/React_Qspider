import React, { useState } from "react";
const TernaryOperator = () =>{
    const [status,setStatus]=useState(false);
    const handel = ()=>{
        setStatus(!status)
    }
return(
    <button onClick={handel}>
        {status?"ON":"OFF"}
    </button>
)
}
export default TernaryOperator;