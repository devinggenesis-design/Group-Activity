import { useState } from "react";

function ElectricityBill() {
  const [customerName, setCustomerName] = useState("");
  const [kwh, setKwh] = useState("");
  const [result, setResult] = useState(null);

  const calculateBill = () => {
    const consumption = parseFloat(kwh);

    if (!customerName.trim() || isNaN(consumption) || consumption < 0) {
      alert("Please enter a valid customer name and positive kWh consumption.");
      return;
    }

    let rate = 0;

    if (consumption <= 100) {
      rate = 10;
    } else if (consumption <= 200) {
      rate = 12;
    } else if (consumption <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const totalBill = consumption * rate;
    const isHighUsage = totalBill >= 5000;

    setResult({
      name: customerName,
      consumption: consumption,
      rate: rate,
      totalBill: totalBill,
      status: isHighUsage
        ? "High Electricity Usage"
        : "Normal Electricity Usage",
      isHighUsage: isHighUsage,
    });
  };

  const handleClear = () => {
    setCustomerName("");
    setKwh("");
    setResult(null);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Electricity Bill Calculator</h2>
        <p style={styles.subtitle}>
          Compute a bill from kWh consumption across tiered rates.
        </p>

        <div style={styles.formGroup}>
          <label style={styles.label}>Customer Name:</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Electricity Consumption (kWh):</label>
          <input
            type="number"
            placeholder="e.g. 150"
            value={kwh}
            onChange={(e) => setKwh(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.buttonGroup}>
          <button style={styles.btnPrimary} onClick={calculateBill}>
            Calculate Bill
          </button>
          <button style={styles.btnSecondary} onClick={handleClear}>
            Clear
          </button>
        </div>

        {result && (
          <div style={styles.resultBox}>
            <div style={styles.resultRow}>
              <span>Customer Name:</span>
              <strong>{result.name}</strong>
            </div>
            <div style={styles.resultRow}>
              <span>Consumption:</span>
              <strong>{result.consumption} kWh</strong>
            </div>
            <div style={styles.resultRow}>
              <span>Rate Applied:</span>
              <strong>₱{result.rate} / kWh</strong>
            </div>
            <div style={styles.resultRow}>
              <span>Total Bill:</span>
              <strong style={{ color: "#2b2d42", fontSize: "1.05rem" }}>
                ₱
                {result.totalBill.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </strong>
            </div>

            <div
              style={{
                ...styles.statusBadge,
                backgroundColor: result.isHighUsage ? "#f8d7da" : "#d1e7dd",
                color: result.isHighUsage ? "#842029" : "#0f5132",
              }}
            >
              {result.status}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

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
    maxWidth: "520px",
    backgroundColor: "#edf2f4", // Light gray/blue container background
    borderRadius: "16px",
    padding: "32px 36px",
    boxSizing: "border-box",
    textAlign: "left",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
  },
  title: {
    margin: "0 0 8px 0",
    color: "#2b2d42", // Dark blue/navy text
    fontSize: "1.45rem",
    fontWeight: "700",
    fontFamily: "Georgia, serif", // Serif font base sa layout
  },
  subtitle: {
    margin: "0 0 24px 0",
    color: "#5c677d",
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
    color: "#2b2d42",
    fontSize: "0.88rem",
    fontFamily: "sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #dcdfe3",
    backgroundColor: "#ffffff",
    fontSize: "0.92rem",
    color: "#2b2d42",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
  },
  buttonGroup: {
    display: "flex",
    gap: "12px",
    marginTop: "24px",
  },
  btnPrimary: {
    flex: 1,
    padding: "11px 16px",
    backgroundColor: "#2b2d42", // Primary Navy Button
    color: "#ffffff",
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
    backgroundColor: "#edf2f4", // Secondary Clear Button
    color: "#2b2d42",
    border: "1px solid #2b2d42",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "0.9rem",
    cursor: "pointer",
    fontFamily: "sans-serif",
  },
  resultBox: {
    marginTop: "20px",
    paddingTop: "16px",
    borderTop: "1px solid #d8e2dc",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontFamily: "sans-serif",
  },
  resultRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.88rem",
    color: "#2b2d42",
  },
  statusBadge: {
    marginTop: "10px",
    padding: "8px",
    textAlign: "center",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "0.85rem",
  },
};

export default ElectricityBill;
