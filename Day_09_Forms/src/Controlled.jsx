import React from "react";
class Controlled extends React.Component{
    constructor(){
        super();
        this.state={
            trainername:"",
            subject:""
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.trainername,this.state.subject)
    }
    render(){
        return(
            <form action="">
                <fieldset>
                    <label htmlFor="">trainername:</label>
                    <input type="text" name="" id=""  onChange={(e)=>{
                        this.setState({trainername:e.target.value})
                    }}/>
                    <br/>
                    <label htmlFor="">Subject</label>
                    <input type="text" name="" id="" onChange={(e)=>{
                        this.setState({subject:e.target.value})
                    }}/>
                    <br/>
                    <button type="submit"onClick={this.handleSubmit}>click</button>
                </fieldset>
            </form>
        )
    }
}
export default Controlled;