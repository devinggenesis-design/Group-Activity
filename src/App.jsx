import { useState } from "react";
import "./App.css";
 
const RANGES = [
  { label: "Excellent", range: "90 – 100", key: "excellent" },
  { label: "Very Good", range: "85 – 89", key: "verygood" },
  { label: "Good", range: "80 – 84", key: "good" },
  { label: "Passed", range: "75 – 79", key: "passed" },
  { label: "Failed", range: "Below 75", key: "failed" },
  { label: "Invalid score", range: "< 0 or > 100", key: "invalid" },
];
 
function classify(score) {
  if (score < 0 || score > 100) {
    return { key: "invalid", label: "Invalid score" };
  } else if (score >= 90) {
    return { key: "excellent", label: "Excellent" };
  } else if (score >= 85) {
    return { key: "verygood", label: "Very Good" };
  } else if (score >= 80) {
    return { key: "good", label: "Good" };
  } else if (score >= 75) {
    return { key: "passed", label: "Passed" };
  } else {
    return { key: "failed", label: "Failed" };
  }
}
 
function App() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [errors, setErrors] = useState({ name: false, score: false });
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState(
    "Enter a name and score, then press Evaluate to see the result."
  );
 
  function handleEvaluate(e) {
    e.preventDefault();
 
    const trimmedName = name.trim();
    const rawScore = score.trim();
    const numericScore = Number(rawScore);
 
    const nameError = trimmedName === "";
    const scoreError = rawScore === "" || isNaN(numericScore);
 
    setErrors({ name: nameError, score: scoreError });
 
    if (nameError || scoreError) {
      setResult(null);
      setMessage("Fix the highlighted fields, then press Evaluate again.");
      return;
    }
 
    const outcome = classify(numericScore);
    setResult({
      name: trimmedName,
      score: numericScore,
      remarkKey: outcome.key,
      remarkLabel: outcome.label,
    });
  }
 
  function handleClear() {
    setName("");
    setScore("");
    setErrors({ name: false, score: false });
    setResult(null);
    setMessage("Enter a name and score, then press Evaluate to see the result.");
  }
 
  return (
    <div className="wrap">
      <div className="eyebrow-row">
        <div className="badge">2</div>
        <span className="eyebrow">Activity 2</span>
      </div>
      <h1>Student Grade Evaluation</h1>
      <p className="sub">
        Evaluate a score into Excellent.
      </p>
 
      <form className="grid" onSubmit={handleEvaluate}>
        {/* Inputs & Buttons */}
        <div className="card">
          <h2>Inputs &amp; Buttons</h2>
 
          <div className={`field ${errors.name ? "err" : ""}`}>
            <label htmlFor="studentName">Student Name</label>
            <input
              id="studentName"
              type="text"
              placeholder="e.g. Maria Santos"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="errmsg">Please enter a student name.</div>
          </div>
 
          <div className={`field ${errors.score ? "err" : ""}`}>
            <label htmlFor="score">Score</label>
            <input
              id="score"
              type="number"
              placeholder="e.g. 87"
              inputMode="numeric"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
            <div className="hint">Accepted range: 0–100</div>
            <div className="errmsg">Enter a valid number to evaluate.</div>
          </div>
 
          <div className="btn-row">
            <button type="submit" id="evaluateBtn">
              Evaluate
            </button>
            <button type="button" id="clearBtn" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
 
        {/* Conditions */}
        <div className="card">
          <h2>Conditions</h2>
          <ul className="cond-list">
            {RANGES.map((r) => (
              <li key={r.key}>
                <span className="cond-label">
                  <span className={`dot dot-${r.key}`}></span>
                  {r.label}
                </span>
                <span className="cond-range">{r.range}</span>
              </li>
            ))}
          </ul>
        </div>
 
        {/* Result panel — conditional rendering */}
        <div className="result-card">
          <h2>Result Panel Shows</h2>
          {result === null ? (
            <p className="placeholder">{message}</p>
          ) : (
            <div className="result-grid fade-in">
              <div className="result-item">
                <div className="rlabel">Student Name</div>
                <div className="rvalue">{result.name}</div>
              </div>
              <div className="result-item">
                <div className="rlabel">Score</div>
                <div className="rvalue">{result.score}</div>
              </div>
              <div className="result-item">
                <div className="rlabel">Remarks</div>
                <span className={`remark-pill r-${result.remarkKey}`}>
                  <span className="dot" style={{ background: "currentColor" }}></span>
                  {result.remarkLabel}
                </span>
              </div>
            </div>
          )}
        </div>
 
      </form>
 
      <footer>
        <span>group act</span>
      </footer>
    </div>
  );
}
 
export default App;