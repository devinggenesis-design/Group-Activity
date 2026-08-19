<<<<<<< HEAD
import { useState } from 'react';
import PasswordChecker from "./assets/pages/PasswordChecker";
import AttendanceChecker from "./assets/pages/AttendanceChecker";

export default function App() {
  const [activeActivity, setActiveActivity] = useState(null);

=======
import { useState } from "react";
import AttendanceChecker from "./assets/pages/AttendanceChecker";
import PasswordChecker from "./assets/pages/PasswordChecker";
import GradeEvaluation from "./assets/pages/GradeEvaluation";
import ElectricityBill from "./assets/pages/ElectricityBill";
import Login from "./assets/pages/Login";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("activity1");

>>>>>>> f0f5cd9a0d947651249a444fc02e121b564e5e23
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome, Group Activity!</h1>

<<<<<<< HEAD
<<<<<<< HEAD
      <div>
        <button onClick={() => setActiveActivity(1)}>Activity 1</button>
        <button onClick={() => setActiveActivity(2)}>Activity 2</button>
        <button onClick={() => setActiveActivity(3)}>Activity 3</button>
        <button onClick={() => setActiveActivity(4)}>Activity 4</button>
        <button onClick={() => setActiveActivity(5)}>Activity 5</button>
      </div>

      <div style={{ marginTop: "2rem" }}>
        {activeActivity === 1 && <div>Activity 1 Content</div>}
        {activeActivity === 2 && <div>Activity 2 Content</div>}
        {activeActivity === 3 && <PasswordChecker />}
        {activeActivity === 4 && <div>Activity 4 Content</div>}
        {activeActivity === 5 && <AttendanceChecker />}
      </div>
    </>
  );
}
=======
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("activity1")}>Activity 1</button>
        <button onClick={() => setActiveTab("activity2")}>Activity 2</button>
        <button onClick={() => setActiveTab("activity3")}>Activity 3</button>
        <button onClick={() => setActiveTab("activity4")}>Activity 4</button>
        <button onClick={() => setActiveTab("activity5")}>Activity 5</button>
=======
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
        <button onClick={() => setActiveTab("activity1")}>Attendance Checker</button>
        <button onClick={() => setActiveTab("activity2")}>Password Checker</button>
        <button onClick={() => setActiveTab("activity3")}>Grade Evaluation</button>
        <button onClick={() => setActiveTab("activity4")}>Electricity Bill</button>
        <button onClick={() => setActiveTab("activity5")}>Login</button>
>>>>>>> 05bc1eabad9c2889fc4a28d37aa0684f5ba493b7
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
>>>>>>> f0f5cd9a0d947651249a444fc02e121b564e5e23
