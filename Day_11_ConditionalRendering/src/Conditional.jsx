import React, { useEffect, useState } from "react";

const Conditional = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {data.length !== 0 &&
                data.map((user) => {
                    return (
                        <div key={user.id}>
                            <h1>{user.id}</h1>
                            <h1>{user.login}</h1>
                            <img src={user.avatar_url} alt={user.login} />
                        </div>
                    );
                })}
        </>
    );
};

export default Conditional;
