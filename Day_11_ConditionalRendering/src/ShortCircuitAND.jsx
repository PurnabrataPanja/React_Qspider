import React,{useState} from "react";
const ShortCircuitAND=()=>{
    const [data] = useState("kolkata")
    return (
        <>
        {
            data.length>3 && <h1>{data} </h1>
        }
        </>
    )
}
export default ShortCircuitAND;