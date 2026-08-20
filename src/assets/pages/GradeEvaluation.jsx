import { useState } from "react";

function getRemark(scoreNum) {
  if (Number.isNaN(scoreNum))
    return { label: "Invalid score", tone: "invalid" };
  if (scoreNum < 0 || scoreNum > 100)
    return { label: "Invalid score", tone: "invalid" };
  if (scoreNum >= 90) return { label: "Excellent", tone: "excellent" };
  if (scoreNum >= 85) return { label: "Very Good", tone: "verygood" };
  if (scoreNum >= 80) return { label: "Good", tone: "good" };
  if (scoreNum >= 75) return { label: "Passed", tone: "passed" };
  return { label: "Failed", tone: "failed" };
}

const colors = {
  navy: "#2b2d42",
  navySoft: "#5c677d",
  cardBg: "#edf2f4",
  border: "#dcdfe3",
  white: "#ffffff",
};

const toneColors = {
  excellent: "#0f5132",
  verygood: "#0a58ca",
  good: "#4f46e5",
  passed: "#997404",
  failed: "#842029",
  invalid: "#842029",
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 15px",
    width: "100%",
    boxSizing: "border-box",
  },
  card: {
    width: "100%",
    maxWidth: "600px",
    backgroundColor: colors.cardBg,
    borderRadius: "16px",
    padding: "32px 36px",
    boxSizing: "border-box",
    textAlign: "left",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
  },
  title: {
    margin: "0 0 8px 0",
    color: colors.navy,
    fontSize: "1.45rem",
    fontWeight: "700",
    fontFamily: "Georgia, serif",
  },
  subtitle: {
    margin: "0 0 24px 0",
    color: colors.navySoft,
    fontSize: "0.88rem",
    fontFamily: "sans-serif",
  },
  formGroup: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: "700",
    color: colors.navy,
    fontSize: "0.88rem",
    fontFamily: "sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
    fontSize: "0.92rem",
    color: colors.navy,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
  },
  error: {
    margin: "8px 0 0 0",
    color: "#842029",
    fontSize: "0.85rem",
    fontWeight: "600",
    fontFamily: "sans-serif",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  },
  btnPrimary: {
    flex: 1,
    padding: "11px 16px",
    backgroundColor: colors.navy,
    color: colors.white,
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "0.9rem",
    cursor: "pointer",
    fontFamily: "sans-serif",
  },
  btnSecondary: {
    flex: 1,
    padding: "11px 16px",
    backgroundColor: colors.cardBg,
    color: colors.navy,
    border: `1px solid ${colors.navy}`,
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "0.9rem",
    cursor: "pointer",
    fontFamily: "sans-serif",
  },
  sectionLabel: {
    margin: "0 0 12px 0",
    color: colors.navySoft,
    fontSize: "0.75rem",
    fontWeight: "700",
    letterSpacing: "0.08em",
    fontFamily: "sans-serif",
    textTransform: "uppercase",
  },
  conditionsBox: {
    marginTop: "20px",
    paddingTop: "16px",
    borderTop: `1px solid ${colors.border}`,
  },
  conditionsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    rowGap: "6px",
    columnGap: "12px",
    fontSize: "0.85rem",
    color: colors.navy,
    fontFamily: "sans-serif",
  },
  resultBox: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: colors.navy,
  },
  resultLabel: {
    fontSize: "0.7rem",
    fontWeight: "700",
    letterSpacing: "0.08em",
    color: "#a8b0c0",
    textTransform: "uppercase",
    fontFamily: "sans-serif",
  },
  resultValue: {
    margin: "2px 0 12px 0",
    fontSize: "1.05rem",
    fontWeight: "600",
    color: colors.white,
    fontFamily: "sans-serif",
  },
  resultRemark: {
    margin: "2px 0 0 0",
    fontSize: "1.3rem",
    fontWeight: "700",
    fontFamily: "sans-serif",
  },
  resultEmpty: {
    margin: 0,
    fontSize: "0.88rem",
    color: "#a8b0c0",
    fontFamily: "sans-serif",
  },
};

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null); // { name, score, remark } | null
  const [error, setError] = useState("");

  const handleEvaluate = (e) => {
    e.preventDefault();
    setError("");

    const trimmedName = studentName.trim();
    if (!trimmedName) {
      setError("Please enter the student's name.");
      setResult(null);
      return;
    }

    if (score.trim() === "") {
      setError("Please enter a score.");
      setResult(null);
      return;
    }

    const scoreNum = Number(score);
    const remark = getRemark(scoreNum);

    setResult({
      name: trimmedName,
      score: score.trim(),
      remark,
    });
  };

  const handleClear = () => {
    setStudentName("");
    setScore("");
    setResult(null);
    setError("");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Student Grade Evaluation</h2>
        <p style={styles.subtitle}>
          Evaluate a score into Excellent → Failed, with range validation.
        </p>

        <form onSubmit={handleEvaluate}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Student Name:</label>
            <input
              type="text"
              placeholder="e.g. Juan Dela Cruz"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Score:</label>
            <input
              type="number"
              placeholder="0 - 100"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              style={styles.input}
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.btnPrimary}>
              Evaluate
            </button>
            <button
              type="button"
              onClick={handleClear}
              style={styles.btnSecondary}
            >
              Clear
            </button>
          </div>

          <div style={styles.conditionsBox}>
            <h3 style={styles.sectionLabel}>Conditions</h3>
            <div style={styles.conditionsGrid}>
              <span>
                <strong>90 - 100</strong> → Excellent
              </span>
              <span>
                <strong>85 - 89</strong> → Very Good
              </span>
              <span>
                <strong>80 - 84</strong> → Good
              </span>
              <span>
                <strong>75 - 79</strong> → Passed
              </span>
              <span>
                <strong>Below 75</strong> → Failed
              </span>
              <span>
                <strong>&lt;0 or &gt;100</strong> → "Invalid score"
              </span>
            </div>
          </div>

          <div style={styles.resultBox}>
            <h3 style={{ ...styles.resultLabel, marginBottom: "12px" }}>
              Result
            </h3>

            {!result ? (
              <p style={styles.resultEmpty}>
                Enter a name and score, then press Evaluate.
              </p>
            ) : (
              <div>
                <span style={styles.resultLabel}>Student Name</span>
                <p style={styles.resultValue}>{result.name}</p>

                <span style={styles.resultLabel}>Score</span>
                <p style={styles.resultValue}>{result.score}</p>

                <span style={styles.resultLabel}>Remarks</span>
                <p
                  style={{
                    ...styles.resultRemark,
                    color: toneColors[result.remark.tone],
                  }}
                >
                  {result.remark.label}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default GradeEvaluation;
