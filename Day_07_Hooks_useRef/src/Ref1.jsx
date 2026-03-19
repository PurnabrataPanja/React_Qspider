import React, { createRef } from "react";

class Ref1 extends React.Component{
    constructor(){
        super();
        this.h1ref=createRef();
    }
    handleChange = ()=>{
        this.h1ref.current.style.color="blue";
    }
    render(){
        // console.log(this.h1ref);
        return(
            <>
            <h1 ref={this.h1ref}>i am class based component</h1>
            <button onClick={this.handleChange}>Chanme me</button>
            </>
        )
    }
}
export default Ref1;