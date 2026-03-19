import React, { useEffect, useState } from "react";

const Effect3 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      async function A() {
        let data = await fetch("https://api.github.com/users");
        let finaldata = await data.json();
        setData(finaldata);
      }
      A();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {data.map((item) => {
        return (
          <>
            <h1>{item.id}</h1>
            <h1>{item.login}</h1>
            <img src={item.avatar_url} alt="" />
          </>
        );
      })}
    </>
  );
};
export default Effect3;
