import React, { useEffect, useState } from "react";
import axiosInstance from "../helper/axiosInstance";
import { useNavigate } from "react-router-dom";

const View = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        let res = await axiosInstance.get("/user");
        setData(res.data); 
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []); 

  const handelDelete = async (id) => {
    try {
      await axiosInstance.delete(`/user/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id)); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data.map((x) => {
        return (
          <div key={x.id}> 
            <h1>{x.trainer}</h1>
            <h1>{x.course}</h1>

            <button onClick={() => navigate(`/update/${x.id}`)}>
              update
            </button>

            <button onClick={() => handelDelete(x.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default View;