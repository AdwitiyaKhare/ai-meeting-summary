import React from "react";

const Dashboard = ({ data, darkMode }) => {
  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meeting-summary.json";
    a.click();
  };

  const downloadCSV = () => {
    const rows = [
      ["Section", "Content"],
      ["Summary", data.summary],
      ["Objections", data.objections?.join("; ")],
      ["Resolutions", data.resolutions?.join("; ")],
      ["Action Items", data.action_items?.join("; ")],
    ];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meeting-summary.csv";
    a.click();
  };

  const renderSection = (title, content, icon) => (
    <div className="mb-8">
      <h2
        className={`text-2xl font-bold mb-3 flex items-center gap-2 ${
          darkMode ? "text-blue-400" : "text-blue-600"
        }`}
      >
        <span className="text-xl">{icon}</span> {title}
      </h2>
      {Array.isArray(content) ? (
        <ul
          className={`list-disc pl-6 space-y-2 text-base ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p
          className={`text-base ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          {content}
        </p>
      )}
    </div>
  );

  return (
    <div>
      {renderSection("Summary", data.summary, "")}
      {renderSection("Objections", data.objections, "")}
      {renderSection("Resolutions", data.resolutions, "")}
      {renderSection("Action Items", data.action_items, "")}

      {/* Removed Timeline Section */}

      <div className="text-right mt-6 flex flex-wrap gap-4 justify-end">
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg transition-all shadow"
          onClick={downloadJSON}
        >
          Export JSON
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-all shadow"
          onClick={downloadCSV}
        >
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
