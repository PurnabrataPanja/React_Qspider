import React from "react";

class ClassProps extends React.Component {
    render() {
        const { name, age, myarr, myobj } = this.props;
        return (
                <section>
            <h2>Props Example</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Array: {myarr.join(", ")}</p>
            {
                myarr.map((x, idx)=>{
                    return(
                        <h3 key={idx}>{x}</h3>
                    )
                })
            }
            <p>Object: a={myobj.a}, b={myobj.b}</p>
            
        </section>
        );
    }
}

export default ClassProps;
