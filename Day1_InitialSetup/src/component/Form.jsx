import React from "react";
const Form = ()=>{
    return(
        <>
        <h1>Form</h1>
        <form action="">
            <input type="email" name="email" id="email" placeholder="Enter Email: " /> <br />
            <input type="password" name="password" id="password" placeholder="Enter password: " /> <br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form;