import React from "react";
import Table from "./component/Table";
import Nav from "./component/Nav";
import Form from "./component/Form";
import OL from "./component/OL";
import UL from "./component/UL";
import NL from "./component/NL";
import Mq from "./component/Mq";

const App = () => {
  return (
    <>
    <Nav />
    <h1>I am a React component</h1>
    <Table />
    <Form />
    <OL />
    <UL />
    <NL />
    <Mq />
    </>
  )
};
export default App;