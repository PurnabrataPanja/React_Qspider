/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../helper/axiosInstance";

const Update = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState("");
  const [course, setCourse] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axiosInstance.get(`/user/${id}`);
        setTrainer(data.trainer);
        setCourse(data.course);
      } catch (error) {
        console.log(error);
      }
    }

    getData(); 
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        trainer,
        course,
      };

      await axiosInstance.put(`/user/${id}`, payload);
      navigate("/view");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <fieldset>
        <legend>Update</legend>

        <label>TrainerName:</label>
        <input
          type="text"
          value={trainer} 
          onChange={(e) => setTrainer(e.target.value)}
        />
        <br /><br />

        <label>Course:</label>
        <input
          type="text"
          value={course} 
          onChange={(e) => setCourse(e.target.value)}
        />
        <br /><br />

        <button type="submit">Update</button>
      </fieldset>
    </form>
  );
};

export default Update;