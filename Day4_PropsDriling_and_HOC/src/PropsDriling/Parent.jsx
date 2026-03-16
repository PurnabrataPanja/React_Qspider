import React from 'react'
import Child from './Child'

function Parent(props) {
  return (
    <>
    <Child data={props.data}/>
    </>
  )
}

export default Parent;