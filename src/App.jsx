import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AttendanceChecker from "./assets/pages/AttendanceChecker";
import PasswordChecker from "./assets/pages/PasswordChecker";
import GradeEvaluation from "./assets/pages/GradeEvaluation";
import ElectricityBill from "./assets/pages/ElectricityBill";
import Login from "./assets/pages/Login";
import "./App.css";
<<<<<<< HEAD
 

function App() {
  return (
    <>
      <h1>Welcome, Group Activity!</h1>
      <button>Activity 1</button>
      <button>Activity 2</button>
      <button>Activity 3</button>
      <button>Activity 4</button>
      <button>Activity 5</button>
    </>
=======

const linkStyle = {
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: "600",
  fontFamily: "sans-serif",
  textDecoration: "none",
  backgroundColor: "transparent",
  color: "#edf2f4",
};

const pillStyle = {
  display: "block",
  textAlign: "center",
  padding: "14px 20px",
  borderRadius: "24px",
  backgroundColor: "#e8ecf7",
  color: "#2b2d42",
  fontWeight: "600",
  fontSize: "0.9rem",
  fontFamily: "sans-serif",
  textDecoration: "none",
  boxSizing: "border-box",
};

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontFamily: "sans-serif",
          fontWeight: "700",
          fontSize: "1rem",
          color: "#2b2d42",
          marginBottom: "16px",
        }}
      >
        Contents
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "14px",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <Link to="/" style={pillStyle}>
          Home
        </Link>
        <Link to="/login" style={pillStyle}>
          Activity 1
        </Link>
        <Link to="/grade-evaluation" style={pillStyle}>
          Activity 2
        </Link>
        <Link to="/password-checker" style={pillStyle}>
          Activity 3
        </Link>
        <Link to="/electricity-bill" style={pillStyle}>
          Activity 4
        </Link>
        <Link to="/attendance-checker" style={pillStyle}>
          Activity 5
        </Link>
      </div>
    </div>
>>>>>>> 72385bc747f9837903a04aef12ab737ca6abab74
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "sans-serif", width: "100%" }}>
        <style>{`
          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            max-width: none;
          }
        `}</style>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 24px",
            backgroundColor: "#2b2d42",
            flexWrap: "wrap",
            gap: "12px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontWeight: "700",
              fontSize: "1.1rem",
              fontFamily: "Georgia, serif",
            }}
          >
            React Activity Portal
          </span>

          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
            <Link to="/grade-evaluation" style={linkStyle}>
              Grade Evaluation
            </Link>
            <Link to="/password-checker" style={linkStyle}>
              Password Checker
            </Link>
            <Link to="/electricity-bill" style={linkStyle}>
              Electricity Bill
            </Link>
            <Link to="/attendance-checker" style={linkStyle}>
              Attendance Checker
            </Link>
          </div>
        </nav>

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/attendance-checker" element={<AttendanceChecker />} />
            <Route path="/password-checker" element={<PasswordChecker />} />
            <Route path="/grade-evaluation" element={<GradeEvaluation />} />
            <Route path="/electricity-bill" element={<ElectricityBill />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
