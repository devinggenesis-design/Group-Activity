import { useState } from "react";
import AttendanceChecker from "./assets/pages/AttendanceChecker";
import PasswordChecker from "./assets/pages/PasswordChecker";
import GradeEvaluation from "./assets/pages/GradeEvaluation";
import ElectricityBill from "./assets/pages/ElectricityBill";
import Login from "./assets/pages/Login";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("activity1");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome, Group Activity!</h1>

      <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
        <button onClick={() => setActiveTab("activity1")}>Attendance Checker</button>
        <button onClick={() => setActiveTab("activity2")}>Password Checker</button>
        <button onClick={() => setActiveTab("activity3")}>Grade Evaluation</button>
        <button onClick={() => setActiveTab("activity4")}>Electricity Bill</button>
        <button onClick={() => setActiveTab("activity5")}>Login</button>
      </div>

      <div>
        {activeTab === "activity1" && <AttendanceChecker />}
        {activeTab === "activity2" && <PasswordChecker />}
        {activeTab === "activity3" && <GradeEvaluation />}
        {activeTab === "activity4" && <ElectricityBill />}
        {activeTab === "activity5" && <Login />}
      </div>
    </div>
  );
}

export default App;