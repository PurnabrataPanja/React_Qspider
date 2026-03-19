import React,{useEffect,useState} from "react";

const Effect1 = ()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then((x)=>{return x.json()})
        .then((y)=>{
            console.log(y)
            setData(y)
        })
        .catch((err)=>{console.log(err)})
    },[])
    return(
        <>
        {
            data.map((item)=>{
                return(
                    <>
                    <h1>{item.id}</h1>
                    <h1>{item.login}</h1>
                    <img src={item.avatar_url} alt="" />
                    </>
                )
            })
        }
        </>
    )
}
export default Effect1;