import { useState } from 'react';
import PasswordChecker from "./assets/pages/PasswordChecker";
import AttendanceChecker from "./assets/pages/AttendanceChecker";

export default function App() {
  const [activeActivity, setActiveActivity] = useState(null);

  return (
    <>
      <h1>Welcome, Group Activity!</h1>

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