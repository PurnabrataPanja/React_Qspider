import React, { useEffect, useState } from "react";

const Effect3 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
      async function A() {
        try {
        let data = await fetch("https://api.github.com/users");
        let finaldata = await data.json();
        setData(finaldata);
         } catch (error) {
      console.log(`The error is ${error}`);
    }
      }
      A();
   
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
