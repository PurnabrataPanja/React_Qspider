import React, { useState } from "react";
import axiosInstance from "../helper/axiosInstance";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [trainer, setTrainer] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // moved here (important)

    try {
      const payload = {
        trainer,
        course,
      };

      await axiosInstance.post("/user", payload);
      alert("data is stored successfully");
      navigate("/view");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Course</legend>

        <label>TrainerName:</label>
        <input
          type="text"
          onChange={(e) => setTrainer(e.target.value)}
        />
        <br /><br />

        <label>Course:</label>
        <input
          type="text"
          onChange={(e) => setCourse(e.target.value)} 
        />
        <br /><br />

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default Home;