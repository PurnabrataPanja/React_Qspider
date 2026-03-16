import React from "react";
import DefaultProps from "./Components/DefaultProps";
import ClassDefaultProps from "./Components/ClassDefaultProps";

const App = () => {

  return (
    <>
    <DefaultProps  name='a' />
    <DefaultProps  name='b' id={1} />
    <DefaultProps  name='c' id={2} salary={6000} />

    <ClassDefaultProps name = 'p'/>
    <ClassDefaultProps name = 'p' id ={1}/>
    <ClassDefaultProps name = 'p' id={2} salary={6000}/>
    </>
  )
};
export default App;
