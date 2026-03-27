import React, { useRef } from "react";

const Ref = () => {
    const h1Ref = useRef(null);

    const handleChange = () => {
        if (h1Ref.current) {
            h1Ref.current.style.color = "red";
        }
    };

    return (
        <>
            <h1 ref={h1Ref}>Hii how are you</h1>
            <button onClick={handleChange}>Change me</button>
        </>
    );
};

export default Ref;
