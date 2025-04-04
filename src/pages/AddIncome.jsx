import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddIncome.css"; // Import styles

const AddIncome = () => {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/income", { amount, source });
      toast.success("Income added successfully!", { position: "top-center" });
      setAmount(""); // Clear input fields after submission
      setSource("");
    } catch (error) {
      toast.error("Failed to add income!", { position: "top-center" });
      console.error(error);
    }
  };

  return (
    <div className="add-income-container">
      <form className="add-income-form" onSubmit={handleSubmit}>
        <h2>Add Income</h2>
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <button type="submit">Add Income</button>
        <button className="home-btn" onClick={() => navigate("/")}>Go Home</button>
      </form>
    </div>
  );
};

export default AddIncome;
