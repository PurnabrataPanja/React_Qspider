/* eslint-disable react-refresh/only-export-components */
import React from "react";
import Hoc from "./Hoc";

function Xyz(props) {
  return (
    <div>{props.data}</div>
  )
}

export default Hoc(Xyz);
