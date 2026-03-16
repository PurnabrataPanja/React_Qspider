import React from "react";
import Hoc from "./PropsDriling/Hoc";
import Xyz from "./PropsDriling/Xyz";
import Parent from "./PropsDriling/Parent";


// eslint-disable-next-line react-refresh/only-export-components
const App = (props) => {
  return (
    <>
      <Parent data={1234}/>

      <h1>{props.data}</h1>
      <Xyz />

    </>
  )
};




// eslint-disable-next-line react-refresh/only-export-components
export default Hoc(App);
