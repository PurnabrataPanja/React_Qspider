import React,{useState} from 'react'
const Controlled1=()=>{
    let [trainer,setTrainer]=useState("");
    let[subject,setSubject]=useState("");
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(trainer,subject)
    }
    return(
        <form action="">
            <fieldset>
                <label htmlFor="">trainername</label>
                <input type="text" name="" id="" onChange={(e)=>{
                    setTrainer(e.target.value)
                }}/>
                <br/>
                <label htmlFor="">Subject:</label>
                <input type="text" name="" id="" onChange={(e)=>{
                    setSubject(e.target.value)
                }} /> 
                <br/>
                <button type="submit" onClick={handleSubmit}>Press</button>
            </fieldset>
        </form>
    )
}
export default Controlled1;