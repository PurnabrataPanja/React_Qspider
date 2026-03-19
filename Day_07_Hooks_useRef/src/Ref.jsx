import React,{useRef} from "react";
const Ref = ()=>{
    let h1Ref = useRef();
    console.log(h1Ref);
    let handleChange = ()=>{
        h1Ref.current.style.color="red";
    }
return(
    <>
    <h1 ref={h1Ref}>Hii how are you</h1>
    <button onClick={handleChange}>Change me</button>
    </>
)
}
export default Ref;