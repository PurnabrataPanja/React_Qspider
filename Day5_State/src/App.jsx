import React from "react";
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name:"Pyspiders",
      count:100,
      data:[100,200,300,400]
    }
  }
  render(){
    return(
      <>
      <h1>{this.state.name}</h1>
      <h1>{this.state.count}</h1>
      {
        this.state.data.map(x=><h1>{x}</h1>)
      }
      <button onClick={()=>{this.setState({name:"Qspiders"})}}>Change</button>
      </>
    )
  }
}
export default App;


// import React from "react";
// import State1 from "./State1";

// const App = ()=>{
//   return(
//     <State1 />
//   )
// }
// export default App;