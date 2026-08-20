import { useState } from "react";


function getRemark(scoreNum) {
  if (Number.isNaN(scoreNum)) return { label: "Invalid score", tone: "invalid" };
  if (scoreNum < 0 || scoreNum > 100) return { label: "Invalid score", tone: "invalid" };
  if (scoreNum >= 90) return { label: "Excellent", tone: "excellent" };
  if (scoreNum >= 85) return { label: "Very Good", tone: "verygood" };
  if (scoreNum >= 80) return { label: "Good", tone: "good" };
  if (scoreNum >= 75) return { label: "Passed", tone: "passed" };
  return { label: "Failed", tone: "failed" };
}

const TONE_STYLES = {
  excellent: "text-emerald-600",
  verygood: "text-sky-600",
  good: "text-indigo-600",
  passed: "text-amber-600",
  failed: "text-rose-600",
  invalid: "text-rose-600",
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
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-100 rounded-2xl shadow-sm p-8">
        {/* Header */}
        <h1 className="text-3xl font-serif font-bold text-slate-900">
          Student Grade Evaluation
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Classify a score into Excellent → Failed.
        </p>

        {/* Form */}
        <form onSubmit={handleEvaluate} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="studentName"
              className="block text-sm font-bold text-slate-900 mb-2"
            >
              Student Name:
            </label>
            <input
              id="studentName"
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter student name"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div>
            <label
              htmlFor="score"
              className="block text-sm font-bold text-slate-900 mb-2"
            >
              Score:
            </label>
            <input
              id="score"
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="Enter score (0 - 100)"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {error && (
            <p className="text-sm text-rose-600 font-medium">{error}</p>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-slate-900 text-white text-sm font-bold py-3 hover:bg-slate-800 transition-colors"
            >
              Check Grade
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="flex-1 rounded-lg bg-white text-slate-900 text-sm font-bold py-3 border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Clear
            </button>
          </div>
        </form>

        {/* Result */}
        {result && (
          <div className="mt-6 rounded-lg bg-white border border-slate-200 p-5 space-y-2">
            <p className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">Student:</span>{" "}
              {result.name}
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">Score:</span>{" "}
              {result.score}
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">Remarks:</span>{" "}
              <span className={`font-bold ${TONE_STYLES[result.remark.tone]}`}>
                {result.remark.label}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GradeEvaluation;