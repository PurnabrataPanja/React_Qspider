import React,{useEffect} from 'react'

export const Effect_with_no_dependency = () => {
    useEffect(()=>{
        console.log("hiiiii")
    },[])

  return (
<>
<h1>I am useEffect hook</h1>
</>
  )
}
export default Effect_with_no_dependency;




