import React from "react";

// eslint-disable-next-line no-unused-vars
const Hoc = (Component) => {
  return () => {
    return <Component data={1234} />;
  };
};

export default Hoc;