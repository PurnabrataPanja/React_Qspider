import React from "react";

class ClassDefaultProps extends React.Component{
render(){
    const { name = "default name", id = "default id", salary = "default salary" } = this.props;
    return(
        <>
        {/* <h3>{this.props.name || "defalut name"}</h3>
        <h3>{this.props.id || "defalut id"}</h3>
        <h3>{this.props.salary || "defalut salary"}</h3> */}
        <h3>{name}</h3>
        <h3>{id}</h3>
        <h3>{salary}</h3>
        </>
    )
}
}
export default ClassDefaultProps;
