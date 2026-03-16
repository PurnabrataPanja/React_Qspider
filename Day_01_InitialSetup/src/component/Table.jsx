import React from "react";

const Table = ()=>{
    return (
        <>
        <h1>Table</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Column1</th>
                    <th>Column2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>r1c1</td>
                    <td>r1c2</td>
                </tr>
                <tr>
                    <td>r2c1</td>
                    <td>r2c2</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}
export default Table;