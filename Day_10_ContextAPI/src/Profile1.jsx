import React, { useContext } from "react";
import { userContext } from "./Provider1";
const Porfile1 = ()=>{
    let data = useContext(userContext);
    return(
        <h1>{data}</h1>
    )
}
export default Porfile1;