import { useState } from "react";
function GradeEvaluation() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null); // { name, score, remark, tone }
  const [error, setError] = useState("");
 
  const evaluate = (numericScore) => {
    if (numericScore >= 90) return { remark: "Excellent", tone: "excellent" };
    if (numericScore >= 85) return { remark: "Very Good", tone: "veryGood" };
    if (numericScore >= 80) return { remark: "Good", tone: "good" };
    if (numericScore >= 75) return { remark: "Passed", tone: "passed" };
    return { remark: "Failed", tone: "failed" };
  };
 
  const handleEvaluate = (e) => {
    e.preventDefault();
 
    if (!name.trim()) {
      setError("Please enter the student's name.");
      setResult(null);
      return;
    }
 
    if (score === "") {
      setError("Please enter a score.");
      setResult(null);
      return;
    }
 
    const numericScore = Number(score);
 
    if (Number.isNaN(numericScore)) {
      setError("Score must be a number.");
      setResult(null);
      return;
    }
 
    if (numericScore < 0 || numericScore > 100) {
      setError("");
      setResult({
        name: name.trim(),
        score: numericScore,
        remark: "Invalid score",
        tone: "invalid",
      });
      return;
    }
 
    const { remark, tone } = evaluate(numericScore);
    setError("");
    setResult({ name: name.trim(), score: numericScore, remark, tone });
  };
 
  const handleClear = () => {
    setName("");
    setScore("");
    setResult(null);
    setError("");
  };
 
  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
 
        * { box-sizing: border-box; }
 
        .sge-input:focus {
          outline: none;
          border-color: #4F46E5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
        }
 
        .sge-btn-evaluate:hover { background: #3730A3; }
        .sge-btn-evaluate:active { transform: translateY(1px); }
        .sge-btn-clear:hover { background: #E5E5F0; }
        .sge-btn-clear:active { transform: translateY(1px); }
 
        .sge-fade-in {
          animation: sgeFadeIn 0.35s ease both;
        }
        @keyframes sgeFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
 
        @media (max-width: 720px) {
          .sge-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
 
      <div style={styles.card}>
        <div style={styles.eyebrowRow}>
          <span style={styles.badge}>2</span>
          <div>
            <div style={styles.eyebrow}>ACTIVITY 2</div>
            <h1 style={styles.title}>Student Grade Evaluation</h1>
          </div>
        </div>
        <p style={styles.subtitle}>
          Evaluate a score into Excellent → Failed, with range validation.
        </p>
 
        <div className="sge-grid" style={styles.grid}>
          {/* LEFT: FORM */}
          <form style={styles.formPanel} onSubmit={handleEvaluate}>
            <div style={styles.panelLabel}>Student Details</div>
 
            <label style={styles.fieldLabel} htmlFor="sge-name">
              Student Name
            </label>
            <input
              id="sge-name"
              className="sge-input"
              type="text"
              placeholder="e.g. Maria Santos"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
 
            <label style={styles.fieldLabel} htmlFor="sge-score">
              Score
            </label>
            <input
              id="sge-score"
              className="sge-input"
              type="number"
              placeholder="0 – 100"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              style={styles.input}
            />
 
            {error && <div style={styles.errorText}>{error}</div>}
 
            <div style={styles.btnRow}>
              <button
                type="submit"
                className="sge-btn-evaluate"
                style={styles.btnPrimary}
              >
                Evaluate
              </button>
              <button
                type="button"
                className="sge-btn-clear"
                style={styles.btnSecondary}
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
 
            <div style={styles.conditionsBox}>
              <div style={styles.conditionsTitle}>Conditions</div>
              {[
                ["90 – 100", "Excellent"],
                ["85 – 89", "Very Good"],
                ["80 – 84", "Good"],
                ["75 – 79", "Passed"],
                ["Below 75", "Failed"],
                ["< 0 or > 100", '"Invalid score"'],
              ].map(([range, label]) => (
                <div key={range} style={styles.conditionRow}>
                  <span style={styles.conditionRange}>{range}</span>
                  <span style={styles.conditionArrow}>→</span>
                  <span style={styles.conditionLabel}>{label}</span>
                </div>
              ))}
            </div>
          </form>
 
          {/* RIGHT: RESULT PANEL */}
          <div style={styles.resultPanel}>
            <div style={styles.resultLabel}>Result Panel</div>
 
            {!result && (
              <div style={styles.emptyState}>
                Fill in the form and press <strong>Evaluate</strong> to see
                the result here.
              </div>
            )}
 
            {result && (
              <div key={result.score + result.name} className="sge-fade-in">
                <ResultRow label="Student Name" value={result.name} />
                <ResultRow label="Score" value={result.score} />
                <div style={styles.resultRow}>
                  <div style={styles.resultRowLabel}>Remarks</div>
                  <span style={{ ...styles.remarkPill, ...toneStyles[result.tone] }}>
                    {result.remark}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
 
        <div style={styles.footer}>
          <span>React JS Practical Assessment</span>
          <span>useState · onChange · onClick/onSubmit · validation</span>
        </div>
      </div>
    </div>
  );
}
 
function ResultRow({ label, value }) {
  return (
    <div style={styles.resultRow}>
      <div style={styles.resultRowLabel}>{label}</div>
      <div style={styles.resultRowValue}>{value}</div>
    </div>
  );
}
 
/* ---------------------------------- */
/* STYLE TOKENS                       */
/* ---------------------------------- */
 
const palette = {
  indigo: "#4F46E5",
  indigoDark: "#3730A3",
  lavender: "#ECEBFB",
  lavenderBorder: "#D9D7F5",
  navy: "#12172E",
  navySoft: "#1B2140",
  ink: "#1F2233",
  slate: "#6B7280",
  cream: "#FAFAFC",
  border: "#E4E3F1",
};
 
const toneStyles = {
  excellent: { background: "#DCFCE7", color: "#166534" },
  veryGood: { background: "#DBEAFE", color: "#1E40AF" },
  good: { background: "#E0E7FF", color: "#3730A3" },
  passed: { background: "#FEF3C7", color: "#92400E" },
  failed: { background: "#FEE2E2", color: "#991B1B" },
  invalid: { background: "#F3F4F6", color: "#374151" },
};
 
const styles = {
  page: {
    minHeight: "100vh",
    background: "#F1F1F7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px",
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: 980,
    background: "#FFFFFF",
    borderRadius: 20,
    border: `1px solid ${palette.border}`,
    boxShadow: "0 20px 50px rgba(30, 30, 60, 0.08)",
    padding: "36px 40px 24px",
  },
  eyebrowRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 6,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: palette.indigo,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: palette.indigo,
    marginBottom: 2,
  },
  title: {
    fontFamily: "'Fraunces', serif",
    fontSize: 30,
    fontWeight: 600,
    color: palette.ink,
    margin: 0,
  },
  subtitle: {
    fontStyle: "italic",
    color: palette.slate,
    fontSize: 15,
    margin: "8px 0 28px 56px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 24,
  },
  formPanel: {
    background: palette.lavender,
    border: `1px solid ${palette.lavenderBorder}`,
    borderRadius: 16,
    padding: 24,
  },
  panelLabel: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: palette.indigoDark,
    marginBottom: 16,
    textTransform: "uppercase",
  },
  fieldLabel: {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: palette.ink,
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 10,
    border: `1px solid ${palette.lavenderBorder}`,
    fontSize: 14,
    fontFamily: "'Inter', sans-serif",
    background: "#fff",
    color: palette.ink,
    transition: "border-color 0.15s, box-shadow 0.15s",
  },
  errorText: {
    marginTop: 10,
    fontSize: 13,
    color: "#B91C1C",
    fontWeight: 500,
  },
  btnRow: {
    display: "flex",
    gap: 10,
    marginTop: 20,
  },
  btnPrimary: {
    flex: 1,
    padding: "10px 16px",
    borderRadius: 10,
    border: "none",
    background: palette.indigo,
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.15s, transform 0.05s",
  },
  btnSecondary: {
    flex: 1,
    padding: "10px 16px",
    borderRadius: 10,
    border: `1px solid ${palette.lavenderBorder}`,
    background: "#fff",
    color: palette.ink,
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.15s, transform 0.05s",
  },
  conditionsBox: {
    marginTop: 24,
    paddingTop: 18,
    borderTop: `1px dashed ${palette.lavenderBorder}`,
  },
  conditionsTitle: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: palette.slate,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  conditionRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    color: palette.ink,
    padding: "4px 0",
  },
  conditionRange: {
    fontWeight: 700,
    minWidth: 92,
  },
  conditionArrow: {
    color: palette.slate,
  },
  conditionLabel: {
    color: palette.slate,
  },
  resultPanel: {
    background: palette.navy,
    borderRadius: 16,
    padding: 24,
    color: "#fff",
    minHeight: 280,
  },
  resultLabel: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "#93C5FD",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  emptyState: {
    fontSize: 14,
    color: "#9CA3AF",
    lineHeight: 1.6,
  },
  resultRow: {
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    padding: "14px 0",
  },
  resultRowLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "#93C5FD",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  resultRowValue: {
    fontSize: 18,
    fontWeight: 600,
  },
  remarkPill: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 700,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 28,
    paddingTop: 16,
    borderTop: `1px solid ${palette.border}`,
    fontSize: 12,
    color: palette.slate,
  },
};
 
export default GradeEvaluation;