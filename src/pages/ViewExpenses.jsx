import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ViewExpenses.css"; // Import styles

const ViewExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("week"); // Default filter

  useEffect(() => {
    fetchExpenses();
  }, [filter]);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`https://expenseback-u5j8.onrender.com/expenses?period=${filter}`);
      setExpenses(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  return (
    <div className="container">
      <h2>View Expenses</h2>

      {/* Filter Options */}
      <div className="filter-container">
        <label>Filter by: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="day">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* Expenses Table */}
      <table className="expense-table">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense._id}>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No expenses found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewExpenses;
