import React from "react";
import { userContext } from "./Provider1";
let {Consumer}=userContext;
const Consumer1 = ()=>{
    return(
        <Consumer>
            {
                (x)=>{
                    return(
                        <h1>{x}</h1>
                    )
                }
            }
        </Consumer>
    )
}
export default Consumer1;