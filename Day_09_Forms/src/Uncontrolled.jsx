import React,{createRef} from 'react'
class Uncontrolled extends React.Component{
    constructor(){
        super();
        this.username=createRef();
        this.password=createRef();
    }
    handleChange=(e)=>{
        e.preventDafault();
        let user=this.username.current.value;
        let password=this.password.current.value;
        console.log(user,password)
    }
    render(){
        console.log(this.username);
        console.log(this.password);
        return(
            <form action="">
                <fieldset>
                    <label htmlFor="">Username:</label>
                    <input ref={this.username} type="text" name="" id="" />
                    <br></br>
                    <label htmlFor="">Password:</label>
                    <input ref={this.password} type="text" name="" id="" />
                    <br/>
                    <button type="submit" onClick={this.handleChange}>Login</button>
                </fieldset>
            </form>
        )
    }
}
export default Uncontrolled;