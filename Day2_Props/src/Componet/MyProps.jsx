import React from "react";

// const MyProps = (props) => {
    // console.log(props);
const MyProps = ({ name, age, myarr, myobj }) => {
    console.log({ name, age, myarr, myobj });
    return (
        <section>
            <h2>Props Example</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Array: {myarr.join(", ")}</p>
            {
                myarr.map((x)=>{
                    return(
                        <>
                        <h1>{x}</h1>
                        </>
                    )
                })
            }
            <p>Object: a={myobj.a}, b={myobj.b}</p>
            
        </section>
    );
};
export default MyProps;
