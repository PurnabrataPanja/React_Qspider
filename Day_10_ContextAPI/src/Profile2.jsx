import React,{ Fragment, useContext } from "react";

import {context} from "./Provider2";
const Profile2 = ()=>{
    let data = useContext(context)
    return(
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
export default Profile2;