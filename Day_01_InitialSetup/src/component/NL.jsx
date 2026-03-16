import React from "react";
const NL = ()=>{
    return(
        <>
        <h1>Nested List</h1>
        <ol>
            <li>Item 1</li>
            <li>Item 2 </li>
            <li>Sub Items
                <ul>
                <li>sub item 1</li>
                <li>sub item 2</li>
                </ul>
                </li>
        </ol>
        </>
    )
}
export default NL;