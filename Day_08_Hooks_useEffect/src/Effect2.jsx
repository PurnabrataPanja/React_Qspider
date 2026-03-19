import React, { useEffect, useState } from "react";

const Effect2 = ()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function A() {
            let data = await fetch("https://api.github.com/users");
            let finaldata = await data.json();
            setData(finaldata);
        }
        A()
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
export default Effect2;