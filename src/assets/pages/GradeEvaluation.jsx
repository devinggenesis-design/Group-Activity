import { useState } from "react";

const CONDITIONS = [
  ["90 - 100", "Excellent"],
  ["85 - 89", "Very Good"],
  ["80 - 84", "Good"],
  ["75 - 79", "Passed"],
  ["Below 75", "Failed"],
  ["<0 or >100", '"Invalid score"'],
];

function getRemark(scoreNum) {
  if (Number.isNaN(scoreNum) || scoreNum < 0 || scoreNum > 100) {
    return "Invalid score";
  }
  if (scoreNum >= 90) return "Excellent";
  if (scoreNum >= 85) return "Very Good";
  if (scoreNum >= 80) return "Good";
  if (scoreNum >= 75) return "Passed";
  return "Failed";
}

function GradeEvaluation() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null); // { name, score, remark } | null
  const [error, setError] = useState("");

  const handleEvaluate = () => {
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

    setError("");
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "20px 0",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          backgroundColor: "#ebf0f3",
          borderRadius: "16px",
          padding: "32px",
          color: "#232733",
          boxSizing: "border-box",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: "bold",
            letterSpacing: "0.08em",
            color: "#555f6d",
            marginBottom: "6px",
            textTransform: "uppercase",
          }}
        >
          Activity 2
        </p>

        <h1
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
            marginBottom: "6px",
            color: "#232733",
          }}
        >
          Student Grade Evaluation
        </h1>

        <p
          style={{
            fontSize: "13px",
            color: "#555f6d",
            marginBottom: "20px",
          }}
        >
          Evaluate a score into Excellent → Failed, with range validation.
        </p>

        {/* Inputs */}
        <div style={{ marginBottom: "14px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
              marginBottom: "8px",
              color: "#232733",
            }}
          >
            Student Name:
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="e.g. Juan Dela Cruz"
            style={{
              width: "100%",
              borderRadius: "8px",
              padding: "10px 12px",
              backgroundColor: "#ffffff",
              border: "1px solid #cdd5df",
              color: "#232733",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
              marginBottom: "8px",
              color: "#232733",
            }}
          >
            Score:
          </label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="0 - 100"
            style={{
              width: "100%",
              borderRadius: "8px",
              padding: "10px 12px",
              backgroundColor: "#ffffff",
              border: "1px solid #cdd5df",
              color: "#232733",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {error && (
          <p
            style={{
              fontSize: "13px",
              color: "#b91c1c",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            {error}
          </p>
        )}

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={handleEvaluate}
            style={{
              flex: 1,
              padding: "10px 16px",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "#ffffff",
              backgroundColor: "#2c2f40",
              border: "none",
              cursor: "pointer",
            }}
          >
            Evaluate
          </button>

          <button
            onClick={handleClear}
            style={{
              flex: 1,
              padding: "10px 16px",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "#2c2f40",
              backgroundColor: "transparent",
              border: "1px solid #2c2f40",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>

        {/* Conditions */}
        <div
          style={{
            marginTop: "24px",
            paddingTop: "18px",
            borderTop: "1px dashed #cdd5df",
          }}
        >
          <h2
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "0.08em",
              fontFamily: "Georgia, serif",
              color: "#555f6d",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Conditions
          </h2>
          {CONDITIONS.map(([range, label]) => (
            <div
              key={range}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "#232733",
                padding: "4px 0",
              }}
            >
              <span style={{ fontWeight: "bold", minWidth: "92px" }}>
                {range}
              </span>
              <span style={{ color: "#555f6d" }}>→</span>
              <span style={{ color: "#555f6d" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Result */}
        <div
          style={{
            borderRadius: "10px",
            padding: "16px",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            color: "#232733",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
              marginBottom: "10px",
              color: "#232733",
            }}
          >
            Result
          </h2>

          {!result && (
            <p style={{ fontSize: "13px", color: "#555f6d" }}>
              Enter a name and score, then press Evaluate.
            </p>
          )}

          {result && (
            <>
              <p style={{ marginBottom: "6px", fontSize: "13px" }}>
                <strong>Student:</strong> {result.name}
              </p>
              <p style={{ marginBottom: "14px", fontSize: "13px" }}>
                <strong>Score:</strong> {result.score}
              </p>

              <div
                style={{
                  textAlign: "center",
                  padding: "8px",
                  borderRadius: "6px",
                  fontWeight: "bold",
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                  backgroundColor: "#2c2f40",
                  color: "#ffffff",
                  textTransform: "uppercase",
                }}
              >
                {result.remark}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GradeEvaluation;