import React,{Component} from "react";

export default class Event extends Component{
    componentDidMount(){
        let btn = document.querySelector("#btn");
        btn.addEventListener("click",()=>{
            alert("i am non synthetic event")
        })

     }
     render(){
        return(
            <div>
                <button id="btn">click</button>
            </div>
        )
        }

}