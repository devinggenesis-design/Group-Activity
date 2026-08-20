import React, { useState } from "react";

const AttendanceChecker = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const primaryDark = "#2b2d42";
  const primaryLight = "#edf2f4";

  const handleCheckAttendance = (e) => {
    e.preventDefault();
    setError("");

    if (!employeeName.trim() || timeIn === "") {
      setError("Please fill out both Employee Name and Time In.");
      setResult(null);
      return;
    }

    const time = parseFloat(timeIn);

    if (isNaN(time) || time < 0 || time > 24) {
      setError("Please enter a valid time between 0 and 24.");
      setResult(null);
      return;
    }

    let status = "";
    let message = "";

    if (time <= 8) {
      status = "On Time";
      message = "Status: On Time – Good job!";
    } else if (time > 8 && time <= 9) {
      status = "Late";
      message = "Status: Late – Please be on time tomorrow.";
    } else {
      status = "Very Late";
      message = "Status: Very Late – Report to your supervisor.";
    }

    setResult({
      name: employeeName,
      timeIn: time,
      status: status,
      message: message,
    });
  };

  const handleReset = () => {
    setEmployeeName("");
    setTimeIn("");
    setResult(null);
    setError("");
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.card,
          backgroundColor: primaryLight,
          color: primaryDark,
        }}
      >
        <h2 style={styles.title}>Employee Attendance Checker</h2>
        <p style={styles.subtitle}>
          Classify attendance status based on decimal time-in (e.g., 8.5 = 8:30
          AM)
        </p>

        {error && <div style={styles.errorBox}>{error}</div>}

        <form onSubmit={handleCheckAttendance} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Employee Name:</label>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="e.g. John Doe"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Time In (Decimal format):</label>
            <input
              type="number"
              step="0.1"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
              placeholder="e.g. 8.5"
              style={styles.input}
            />
          </div>

          <div style={styles.buttonGroup}>
            <button
              type="submit"
              style={{
                ...styles.button,
                backgroundColor: primaryDark,
                color: primaryLight,
              }}
            >
              Check Attendance
            </button>
            <button
              type="button"
              onClick={handleReset}
              style={{
                ...styles.resetButton,
                borderColor: primaryDark,
                color: primaryDark,
              }}
            >
              Reset
            </button>
          </div>
        </form>

        {result && (
          <div style={{ ...styles.resultPanel, borderColor: primaryDark }}>
            <h3 style={styles.resultHeader}>Attendance Result</h3>
            <p>
              <strong>Employee Name:</strong> {result.name}
            </p>
            <p>
              <strong>Time In:</strong> {result.timeIn}
            </p>
            <p>
              <strong>Attendance Status:</strong> {result.status}
            </p>
            <p style={styles.followUpMessage}>{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 1rem",
  },
  card: {
    width: "100%",
    maxWidth: "480px",
    borderRadius: "10px",
    padding: "2rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginBottom: "0.25rem",
  },
  subtitle: {
    fontSize: "0.85rem",
    opacity: 0.8,
    marginBottom: "1.25rem",
  },
  errorBox: {
    backgroundColor: "#ffdddd",
    color: "#d8000c",
    padding: "0.75rem",
    borderRadius: "6px",
    fontSize: "0.85rem",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  input: {
    padding: "0.65rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "0.95rem",
  },
  buttonGroup: {
    display: "flex",
    gap: "0.75rem",
    marginTop: "0.5rem",
  },
  button: {
    flex: 1,
    padding: "0.7rem",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.95rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  resetButton: {
    flex: 1,
    padding: "0.7rem",
    backgroundColor: "transparent",
    border: "2px solid",
    borderRadius: "6px",
    fontSize: "0.95rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  resultPanel: {
    marginTop: "1.5rem",
    padding: "1rem",
    borderLeft: "5px solid",
    backgroundColor: "#ffffff",
    borderRadius: "6px",
  },
  resultHeader: {
    marginTop: 0,
    marginBottom: "0.5rem",
    fontSize: "1.1rem",
  },
  followUpMessage: {
    marginTop: "0.5rem",
    fontWeight: "bold",
  },
};

export default AttendanceChecker;
