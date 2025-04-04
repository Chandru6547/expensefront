import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Dashboard.css'

const Dashboard = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    axios.get("https://expenseback-u5j8.onrender.com/income-summary")
      .then(res => setIncome(res.data.totalIncome))
      .catch(err => console.error(err));

    axios.get("https://expenseback-u5j8.onrender.com/expense-summary")  
      .then(res => setExpense(res.data.totalExpense))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="summary-boxes">
        <div className="summary-card income">
          <h3>Total Income</h3>
          <p>Rs : {income}</p>
        </div>
        <div className="summary-card expense">
          <h3>Total Expense</h3>
          <p>Rs : {expense}</p>
        </div>
        <div className="summary-card net">
          <h3>Net Income</h3>
          <p>Rs : {income - expense}</p>
        </div>
      </div>

      {/* Buttons to navigate */}
      <div className="dashboard-buttons">
        <button onClick={() => navigate("/add-income")}>Add Income</button>
        <button onClick={() => navigate("/add-expense")}>Add Expense</button>
        <button onClick={() => navigate("/view-expenses")}>View Expenses</button>
      </div>
    </div>
  );
};

export default Dashboard;
