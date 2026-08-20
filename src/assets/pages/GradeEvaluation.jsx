import { useState } from "react";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

:root{
  --paper:#eef0f6;
  --card:#ffffff;
  --ink:#171a2b;
  --navy:#101534;
  --navy-2:#171d47;
  --indigo:#4b4fd1;
  --indigo-soft:#eceafc;
  --sky:#6fd4e8;
  --line:#dcdfec;
  --muted:#6b6f89;
  --excellent:#2e9e6a;
  --verygood:#3f8ee0;
  --good:#a98b2e;
  --passed:#c97a2c;
  --failed:#c94848;
  --invalid:#8a2be2;
}

*{box-sizing:border-box;}
body{margin:0;}
#root{
  background:
    radial-gradient(1100px 600px at 85% -10%, #dfe3f7 0%, transparent 60%),
    var(--paper);
  min-height:100vh;
  font-family:'Inter',sans-serif;
  color:var(--ink);
}

.wrap{max-width:1080px;margin:0 auto;padding:56px 24px 80px;}

/* ---- Header ---- */
.eyebrow-row{display:flex;align-items:center;gap:14px;margin-bottom:6px;}
.badge{
  width:40px;height:40px;border-radius:50%;
  background:linear-gradient(145deg,var(--indigo),#2f31a3);
  color:#fff;display:flex;align-items:center;justify-content:center;
  font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:17px;
  box-shadow:0 6px 16px -4px rgba(75,79,209,.55);
  flex-shrink:0;
}
.eyebrow{
  font-family:'IBM Plex Mono',monospace;
  font-size:11.5px; letter-spacing:.18em; font-weight:600;
  color:var(--indigo); text-transform:uppercase;
}
h1{
  font-family:'Source Serif 4',serif;
  font-size:clamp(28px,4vw,40px);
  font-weight:700;
  margin:2px 0 10px 54px;
  letter-spacing:-.01em;
}
.sub{
  font-family:'Source Serif 4',serif;
  font-style:italic;
  color:var(--muted);
  margin:0 0 34px 54px;
  font-size:15.5px;
}

/* ---- Layout ---- */
.grid{
  display:grid;
  grid-template-columns:1.15fr 1fr;
  gap:22px;
}
@media (max-width:820px){ .grid{grid-template-columns:1fr;} }

.card{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:16px;
  padding:26px 26px 28px;
  box-shadow:0 1px 2px rgba(20,20,50,.03);
}
.card h2{
  font-family:'IBM Plex Mono',monospace;
  font-size:11.5px; letter-spacing:.14em; text-transform:uppercase;
  color:var(--indigo); margin:0 0 20px;
  display:flex; align-items:center; gap:8px;
}
.card h2::before{
  content:"";width:7px;height:7px;border-radius:50%;
  background:var(--indigo); display:inline-block;
}

/* ---- Form ---- */
.field{margin-bottom:18px;}
.field label{
  display:block; font-size:12.5px; font-weight:600;
  color:var(--muted); margin-bottom:7px; letter-spacing:.01em;
}
.field input{
  width:100%; padding:12px 14px; font-size:15px;
  border:1.5px solid var(--line); border-radius:10px;
  font-family:'Inter',sans-serif; color:var(--ink);
  background:#fbfbfe;
  transition:border-color .15s, box-shadow .15s, background .15s;
}
.field input:focus{
  outline:none; border-color:var(--indigo); background:#fff;
  box-shadow:0 0 0 4px var(--indigo-soft);
}
.field .hint{
  font-size:11.5px; color:var(--muted); margin-top:6px;
}
.field.err input{border-color:var(--failed); background:#fff6f6;}
.field .errmsg{
  font-size:12px; color:var(--failed); margin-top:6px; font-weight:600;
  display:none;
}
.field.err .errmsg{display:block;}

.btn-row{display:flex; gap:10px; margin-top:26px;}
button{
  font-family:'Inter',sans-serif; font-weight:600; font-size:14.5px;
  border:none; border-radius:10px; padding:13px 22px; cursor:pointer;
  transition:transform .12s ease, box-shadow .12s ease, background .15s;
}
button:active{transform:translateY(1px);}
#evaluateBtn{
  flex:1;
  background:linear-gradient(145deg,var(--indigo),#3335a8);
  color:#fff;
  box-shadow:0 8px 18px -8px rgba(75,79,209,.65);
}
#evaluateBtn:hover{box-shadow:0 10px 22px -6px rgba(75,79,209,.75);}
#clearBtn{
  background:#fff; color:var(--muted);
  border:1.5px solid var(--line);
}
#clearBtn:hover{border-color:#b9bdd6; color:var(--ink);}

/* ---- Conditions reference ---- */
.cond-list{list-style:none; margin:0; padding:0;}
.cond-list li{
  display:flex; justify-content:space-between; align-items:center;
  padding:11px 0; border-bottom:1px dashed var(--line);
  font-size:14px;
}
.cond-list li:last-child{border-bottom:none;}
.cond-range{
  font-family:'IBM Plex Mono',monospace; font-weight:600; font-size:12.5px;
  color:var(--ink); background:#f2f3fa; padding:4px 9px; border-radius:6px;
}
.cond-label{display:flex;align-items:center;font-weight:600; font-size:13.5px;}
.dot{width:9px;height:9px;border-radius:50%;display:inline-block;margin-right:8px;}
.dot-excellent{background:var(--excellent);}
.dot-verygood{background:var(--verygood);}
.dot-good{background:var(--good);}
.dot-passed{background:var(--passed);}
.dot-failed{background:var(--failed);}
.dot-invalid{background:var(--invalid);}

/* ---- Result panel (navy) ---- */
.result-card{
  grid-column:1 / -1;
  background:radial-gradient(900px 300px at 100% 0%, #1c2258 0%, transparent 60%), var(--navy);
  border-radius:16px;
  padding:30px 30px 34px;
  color:#fff;
  position:relative;
  overflow:hidden;
  min-height:190px;
}
.result-card h2{
  font-family:'IBM Plex Mono',monospace;
  font-size:11.5px; letter-spacing:.14em; text-transform:uppercase;
  color:var(--sky); margin:0 0 22px;
  display:flex; align-items:center; gap:8px;
}
.result-card h2::before{
  content:"›"; color:var(--sky); font-weight:700;
}
.placeholder{
  color:#8b90b8; font-size:14.5px; font-style:italic;
  font-family:'Source Serif 4',serif;
  padding:10px 0 4px;
  margin:0;
}
.result-grid{
  display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
}
@media (max-width:720px){ .result-grid{grid-template-columns:1fr;} }
.result-item{
  background:rgba(255,255,255,.045);
  border:1px solid rgba(255,255,255,.09);
  border-radius:12px; padding:18px 18px 20px;
}
.result-item .rlabel{
  font-family:'IBM Plex Mono',monospace; font-size:10.5px;
  letter-spacing:.12em; text-transform:uppercase; color:#9aa0cf;
  margin-bottom:10px;
}
.result-item .rvalue{
  font-family:'Source Serif 4',serif; font-size:22px; font-weight:600;
  color:#fff; line-height:1.25;
}
.remark-pill{
  display:inline-flex; align-items:center; gap:8px;
  padding:7px 14px; border-radius:999px; font-size:15px; font-weight:700;
  font-family:'Inter',sans-serif;
}
.remark-pill .dot{width:8px;height:8px;margin-right:0;}
.r-excellent{background:rgba(46,158,106,.18); color:#7EE3B4;}
.r-verygood{background:rgba(63,142,224,.18); color:#8FC4F7;}
.r-good{background:rgba(169,139,46,.2); color:#E8C56A;}
.r-passed{background:rgba(201,122,44,.2); color:#F0A96A;}
.r-failed{background:rgba(201,72,72,.2); color:#F19A9A;}
.r-invalid{background:rgba(138,43,226,.2); color:#C79BF0;}

.fade-in{animation:fadeIn .35s ease both;}
@keyframes fadeIn{from{opacity:0; transform:translateY(6px);} to{opacity:1; transform:translateY(0);}}

/* ---- Footer demonstrates ---- */
.demo-card{
  grid-column:1 / -1;
  background:var(--indigo-soft);
  border-radius:14px;
  padding:20px 26px;
  display:flex; align-items:center; gap:16px; flex-wrap:wrap;
}
.demo-card h2{
  font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:.14em;
  text-transform:uppercase; color:var(--indigo); margin:0; white-space:nowrap;
}
.chip{
  background:#fff; border-radius:999px; padding:7px 15px;
  font-size:12.5px; font-weight:600; color:var(--navy-2);
  border:1px solid #dcd9f7;
}

footer{
  max-width:1080px; margin:36px auto 0; display:flex; justify-content:space-between;
  font-size:12px; color:var(--muted); font-family:'IBM Plex Mono',monospace;
  padding:0 4px;
}

`;

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
      <style>{STYLES}</style>
      <div className="eyebrow-row">
        <div className="badge">2</div>
        <span className="eyebrow">Activity 2</span>
      </div>
      <h1>Student Grade Evaluation</h1>
      <p className="sub">
        Evaluate a score into Excellent → Failed, with range validation.
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

        {/* Demonstrates */}
        <div className="demo-card">
          <h2>Demonstrates</h2>
          <span className="chip">useState</span>
          <span className="chip">onChange</span>
          <span className="chip">onClick / onSubmit</span>
          <span className="chip">Input validation</span>
          <span className="chip">if / else if / else</span>
          <span className="chip">Conditional rendering</span>
        </div>
      </form>

      <footer>
        <span>React JS Practical Assessment</span>
        <span>10</span>
      </footer>
    </div>
  );
}

export default App;