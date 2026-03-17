/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CounterFB from "./CounterFB";
import CounterCB from "./CounterCB";

const App = () => {
  const [state, setState] = useState("Qspiders");
  const [state1, setState1] = useState(100);
  const [state2, setState2] = useState([10, 20, 30, 40]);
  const [state3, setState3] = useState({ a: 1, b: 2, c: "hi" });

  let handelState = ()=>{
    setState("Pyspiders")
  }


  return (
    <>
      <h1>{state}</h1>
      <h1>{state1}</h1>
      <h1>{state2.join(", ")}</h1>
      <h1>{`${state3.a}, ${state3.b}, ${state3.c}`}</h1>
      <button onClick={handelState}>Click</button>


      <h1>--------------------------------------------------------------</h1>
      <CounterFB/>
      <h1>--------------------------------------------------------------</h1>
      <CounterCB/>
    </>
  );
};

export default App;
