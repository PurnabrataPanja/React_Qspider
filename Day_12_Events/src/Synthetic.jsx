import React, { useState } from 'react'

const Synthetic = () => {
    const [data,setData] = useState("Qspider")
    const handel = ()=>{
        setData("Pyspider")
    }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={handel}>click</button>
    </div>
  )
}

export default Synthetic