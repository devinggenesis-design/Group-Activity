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
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#edf2f4" }}
    >
      <div
        className="w-full max-w-md rounded-xl shadow-lg p-8"
        style={{
          backgroundColor: "#2b2d42",
          color: "#edf2f4",
        }}
      >
        <h1 className="text-3xl font-bold text-center mb-2">
          Password Strength Checker
        </h1>

        <p className="text-center mb-6 opacity-80">
          Classify your password by length.
        </p>

        {/* Password Input */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full rounded-lg p-3 mb-4 outline-none"
          style={{
            backgroundColor: "#edf2f4",
            color: "#2b2d42",
          }}
        />

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={checkPassword}
            className="flex-1 py-3 rounded-lg font-semibold transition"
            style={{
              backgroundColor: "#edf2f4",
              color: "#2b2d42",
            }}
          >
            Check Password
          </button>

          <button
            onClick={clearPassword}
            className="flex-1 py-3 rounded-lg font-semibold transition"
            style={{
              backgroundColor: "#edf2f4",
              color: "#2b2d42",
            }}
          >
            Clear
          </button>
        </div>

        {/* Result Panel */}
        {status && (
          <div
            className="rounded-lg p-5"
            style={{
              backgroundColor: "#edf2f4",
              color: "#2b2d42",
            }}
          >
            <h2 className="text-lg font-bold mb-3">
              Password Status
            </h2>

            <p className="mb-3">
              <strong>Status:</strong> {status}
            </p>

            <p className="mb-4">
              <strong>Strength Message:</strong>{" "}
              {status === "Strong Password"
                ? "You can use this password."
                : status === "Medium Password"
                ? "Consider creating a stronger password."
                : status === "Weak Password"
                ? "Create a stronger password."
                : "Please enter a password."}
            </p>

            {/* Visual Strength Indicator */}
            <div
              className="text-center p-2 rounded font-bold"
              style={{
                backgroundColor: "#2b2d42",
                color: "#edf2f4",
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