import React from "react";
import MyProps from "./Componet/MyProps";
import ClassProps from "./Componet/ClassProps";
import PropsChild from "./Componet/PropsChild";

const App = () => {
    let name = "test";
    let age = 23;
    let myarr = [10,20]
    let myobj = {a:30,b:40}
  return (
    <>
    <MyProps 
    name={name}   // key = {value} ,  {} due to by default string
    age={age}
    myarr={myarr}
    myobj={myobj}
    />
    <ClassProps 
    name={name}   
    age={age}
    myarr={myarr}
    myobj={myobj}
    />
    <PropsChild>
        <h1>This is children props</h1>
        <h2>Test</h2>
    </PropsChild>
    </>
  )
};
export default App;
