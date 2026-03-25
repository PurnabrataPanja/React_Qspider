import React, { Fragment } from "react";
import {context} from "./Provider2";
let {Consumer}=context;

const Consumer2 = ()=>{
    return(
        <Consumer>
            {
                (x)=>{
                    return (
                        x.map((item,index)=>{
                            return(
                                <Fragment key={index+1}>
                                <h1>{item.id}</h1>
                                <h1>{item.login}</h1>
                                <img src={item.avatar_url} alt="" />
                                </Fragment>
                            )
                        })
                    )
                }
            }
        </Consumer>
    )
}
export default Consumer2;