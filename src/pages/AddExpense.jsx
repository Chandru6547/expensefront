import React, { useState } from "react";
import axios from "axios";
import "./AddExpense.css"; // Import styles

const AddExpense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/expense", { amount, category })
      .then(() => alert("Expense added successfully!"))
      .catch(err => console.error(err));
  };

  return (
    <div className="add-expense-container">
      <form className="add-expense-form" onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Category" 
          value={category} 
          onChange={e => setCategory(e.target.value)} 
          required 
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
