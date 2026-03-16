import React from "react";

// const DefaultProps = (props)=>{
//     return(
//         <>
//         <h1>{props.name || "default name"}</h1>
//         <h1>{props.id || "default id"}</h1>
//         <h1>{props.salary || "default salary"}</h1>
//         </>
//     )
// }

const DefaultProps = ({name = "Defalut name",id="defalut id",salary="default salary"})=>{
    return(
        <>
        <h1>{name}</h1>
        <h1>{id}</h1>
        <h1>{salary}</h1>

        </>
    )
}
export default DefaultProps;