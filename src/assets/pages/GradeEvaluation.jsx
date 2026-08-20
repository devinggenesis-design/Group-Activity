import { useState } from "react";
/**
 * GradeEvaluation.jsx
 * Activity 2 — Student Grade Evaluation
 *
 * Evaluates a score into a remark (Excellent -> Failed) with range validation.
 * Self-contained component — safe to drop into any branch and import into
 * App.jsx without touching other files:
 *
 *   import GradeEvaluation from "./GradeEvaluation";
 *   ...
 *   <GradeEvaluation />
 */

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
  excellent: "text-emerald-400",
  verygood: "text-sky-400",
  good: "text-indigo-300",
  passed: "text-amber-400",
  failed: "text-rose-400",
  invalid: "text-rose-500",
  idle: "text-slate-500",
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
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-600 text-white font-semibold text-sm">
              2
            </span>
            <span className="text-xs font-bold tracking-widest text-indigo-600">
              ACTIVITY 2
            </span>
          </div>
          <h1 className="mt-2 text-3xl font-serif font-bold text-slate-900">
            Student Grade Evaluation
          </h1>
          <p className="mt-1 text-sm italic text-slate-500">
            Evaluate a score into Excellent → Failed, with range validation.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleEvaluate} className="px-8 py-6">
          <div className="bg-indigo-50 rounded-xl p-5 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-indigo-600">
              INPUTS
            </h2>

            <div>
              <label
                htmlFor="studentName"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Student Name
              </label>
              <input
                id="studentName"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Juan Dela Cruz"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              />
            </div>

            <div>
              <label
                htmlFor="score"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Score
              </label>
              <input
                id="score"
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="0 - 100"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              />
            </div>

            {error && (
              <p className="text-sm text-rose-600 font-medium">{error}</p>
            )}

            <div className="flex gap-3 pt-1">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
              >
                Evaluate
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 rounded-lg bg-white text-slate-600 text-sm font-semibold border border-slate-300 hover:bg-slate-50 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Conditions reference */}
          <div className="mt-4 rounded-xl border border-slate-200 p-5">
            <h2 className="text-xs font-bold tracking-widest text-indigo-600 mb-3">
              CONDITIONS
            </h2>
            <ul className="grid grid-cols-2 gap-y-1 text-sm text-slate-700">
              <li><span className="font-semibold">90 - 100</span> → Excellent</li>
              <li><span className="font-semibold">85 - 89</span> → Very Good</li>
              <li><span className="font-semibold">80 - 84</span> → Good</li>
              <li><span className="font-semibold">75 - 79</span> → Passed</li>
              <li><span className="font-semibold">Below 75</span> → Failed</li>
              <li><span className="font-semibold">&lt;0 or &gt;100</span> → "Invalid score"</li>
            </ul>
          </div>

          {/* Result panel */}
          <div className="mt-4 rounded-xl bg-slate-900 p-6">
            <h2 className="text-xs font-bold tracking-widest text-sky-400 mb-4">
              RESULT
            </h2>

            {!result ? (
              <p className="text-sm text-slate-500">
                Enter a name and score, then press Evaluate.
              </p>
            ) : (
              <div className="space-y-3">
                <div>
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    Student Name
                  </span>
                  <p className="text-lg font-semibold text-white">{result.name}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    Score
                  </span>
                  <p className="text-lg font-semibold text-white">{result.score}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wide text-slate-400">
                    Remarks
                  </span>
                  <p className={`text-xl font-bold ${TONE_STYLES[result.remark.tone]}`}>
                    {result.remark.label}
                  </p>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default GradeEvaluation;