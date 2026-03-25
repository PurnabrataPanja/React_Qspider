import React, { useContext } from "react";
import { userContext } from "./Provider2";
// import { userContext } from "./Provider2";
// let {Consumer}=userContext;
const Porfile3 = ()=>{
    let data = useContext(userContext);
    return(
        // <Consumer>
        //     {
        //         (x)=>{
        //             return(
        //                 <h1>{x}</h1>
        //             )
        //         }
        //     }
        // </Consumer>
        <h1>{data}</h1>
    )
}
export default Porfile3;