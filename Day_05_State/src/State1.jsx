import React from "react";
class State1 extends React.Component{
    state = {
        name:"Ram"
    }
    handleChange = () =>{
        this.setState({name:"Ramesh"})
    }
    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={()=>{this.setState({name:"Ramesh"})}}>Change</button>
            </>
        )
    }
}
export default State1;