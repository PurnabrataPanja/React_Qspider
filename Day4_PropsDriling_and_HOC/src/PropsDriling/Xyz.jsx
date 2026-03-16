import React from "react";
import Hoc from "./Hoc";

function Xyz(props) {
  return (
    <div>{props.data}</div>
  )
}

const XyzWithHoc = Hoc(Xyz);
XyzWithHoc.displayName = "XyzWithHoc";

export default XyzWithHoc;
