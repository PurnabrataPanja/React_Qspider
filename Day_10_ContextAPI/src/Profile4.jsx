import React,{ Fragment, useContext } from "react";
import {context} from "./Provider3";
// import {context} from "./Provider3";
// let {Consumer}=context;
const Profile4 = ()=>{
    let data = useContext(context)
    return(
        // <Consumer>
        //     {
        //         (x)=>{
        //             return (
        //                 x.map((item)=>{
        //                     return(
        //                         <>
        //                         <h1>{item.id}</h1>
        //                         <h1>{item.login}</h1>
        //                         <img src={item.avatar_url} alt="" />
        //                         </>
        //                     )
        //                 })
        //             )
        //         }
        //     }
        // </Consumer>
        data.map(
            (x,index)=>{
                return(
                    <Fragment key={index+1}>
                    <h1>{x.id}</h1>
                    <h1>{x.login}</h1>
                    <img src={x.avatar_url} alt="" />
                    </Fragment>
                )
            }
        )
    )
}
export default Profile4;