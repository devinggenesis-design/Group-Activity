import { useState } from "react";
import ElectricityBill from "./assets/pages/ElectricityBill";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("activity4");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome, Group Activity!</h1>

      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("activity1")}>Activity 1</button>
        <button onClick={() => setActiveTab("activity2")}>Activity 2</button>
        <button onClick={() => setActiveTab("activity3")}>Activity 3</button>
        <button onClick={() => setActiveTab("activity4")}>Activity 4</button>
        <button onClick={() => setActiveTab("activity5")}>Activity 5</button>
      </div>

      <div>
        {activeTab === "activity1" && <div>Activity 1 Content</div>}
        {activeTab === "activity2" && <div>Activity 2 Content</div>}
        {activeTab === "activity3" && <div>Activity 3 Content</div>}
        {activeTab === "activity4" && <ElectricityBill />}
        {activeTab === "activity5" && <div>Activity 5 Content</div>}
      </div>
    </div>
  );
}

export default App;