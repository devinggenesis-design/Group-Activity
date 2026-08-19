import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const checkPassword = () => {
    if (password.length === 0) {
      setStatus("Please enter a password.");
    } else if (password.length < 6) {
      setStatus("Weak Password");
    } else if (password.length <= 9) {
      setStatus("Medium Password");
    } else {
      setStatus("Strong Password");
    }
  };

  const clearPassword = () => {
    setPassword("");
    setStatus("");
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
        <h1
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
            marginBottom: "6px",
            color: "#232733",
          }}
        >
          Password Strength Checker
        </h1>

        <p
          style={{
            fontSize: "13px",
            color: "#555f6d",
            marginBottom: "20px",
          }}
        >
          Classify your password by length.
        </p>

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
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
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

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <button
            onClick={checkPassword}
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
            Check Password
          </button>

          <button
            onClick={clearPassword}
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

        {status && (
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
              Password Status
            </h2>

            <p style={{ marginBottom: "6px", fontSize: "13px" }}>
              <strong>Status:</strong> {status}
            </p>

            <p style={{ marginBottom: "14px", fontSize: "13px" }}>
              <strong>Strength Message:</strong>{" "}
              {status === "Strong Password"
                ? "You can use this password."
                : status === "Medium Password"
                ? "Consider creating a stronger password."
                : status === "Weak Password"
                ? "Create a stronger password."
                : "Please enter a password."}
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
              }}
            >
              {status === "Strong Password"
                ? "STRONG"
                : status === "Medium Password"
                ? "MEDIUM"
                : status === "Weak Password"
                ? "WEAK"
                : "NO PASSWORD"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordChecker;