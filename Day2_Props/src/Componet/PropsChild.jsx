import React from "react";

// const MyProps = (props) => {
    // console.log(props);
const PropsChild = ({ children }) => {
    return (
        <div className="props-child">
            {children}
        </div>
    );
};
export default PropsChild;
