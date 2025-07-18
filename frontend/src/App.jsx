import React, { useState, useEffect } from "react";
import FileUploader from "./components/FileUploader";
import Dashboard from "./pages/Dashboard";

function App() {
  const [summaryData, setSummaryData] = useState(null);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("summaries") || "[]");
    setHistory(saved);
  }, []);

  useEffect(() => {
    if (summaryData) {
      const updated = [...history, summaryData];
      setHistory(updated);
      localStorage.setItem("summaries", JSON.stringify(updated));
    }
  }, [summaryData]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors`}
    >
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-3">
            AI Meeting Summary Generator
          </h1>
          <p className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto">
            Upload meeting transcripts or audio to generate CRM-ready summaries,
            objections, resolutions, and action items.
          </p>
          <div className="mt-4 flex justify-center">
            <button
              className="px-4 py-2 text-sm border rounded-md hover:bg-blue-500 hover:text-white transition"
              onClick={toggleMode}
            >
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </button>
          </div>
        </header>

        {/* Upload */}
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          } rounded-2xl p-6 shadow-lg border mb-12`}
        >
          <FileUploader setSummaryData={setSummaryData} darkMode={darkMode} />
        </div>

        {/* Dashboard */}
        {summaryData && (
          <>
            <h2 className="text-2xl font-bold mb-4 text-center text-green-400">
              AI Summary Result
            </h2>
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              } rounded-2xl p-6 shadow-lg border`}
            >
              <Dashboard data={summaryData} darkMode={darkMode} />
            </div>
          </>
        )}

        {/* Previous */}
        {history.length > 1 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              Previous Uploads
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
              {history.slice(0, -1).map((item, idx) => (
                <li key={idx} className="truncate max-w-xl">
                  {item.summary.substring(0, 80)}...
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-10 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://github.com/AdwitiyaKhare/ai-meeting-summary"
              target="_blank"
              className="px-6 py-2 text-sm border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
            <a
              href="https://adwitiyakhare.vercel.app/"
              target="_blank"
              className="px-6 py-2 text-sm border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-all"
              rel="noopener noreferrer"
            >
              Developer Portfolio
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
