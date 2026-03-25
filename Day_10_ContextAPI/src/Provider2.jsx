/* eslint-disable react-refresh/only-export-components */
import React,{createContext} from "react";
export const userContext = createContext("");
let {Provider}=userContext;
const Provider2=(props)=>{
    console.log(userContext);
    return(
        <Provider value={1234}>
            {props.children}
        </Provider>
    )
}
export default Provider2;