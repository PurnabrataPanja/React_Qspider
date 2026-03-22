import React,{useRef} from "react";
const Uncontrolled1=()=>{
    let username=useRef();
    let password=useRef();

    let handleSubmit=(e)=>{
        e.preventDefault();
        let user=username.current.value;
        let pass=password.current.value;
        console.log(user,pass)
    }
    return(
        <form action="">
            <fieldset>
                <label htmlFor="">username:</label>
                <input ref={username} type="text" name="" id="" />
                <br/>
                <label htmlFor="">password:</label>
                <input ref={password} type="text" name="" id="" />
                <br/>
                <button type="submit" onClick={handleSubmit}>click</button>

            </fieldset>
        </form>
    )

}
export default Uncontrolled1;