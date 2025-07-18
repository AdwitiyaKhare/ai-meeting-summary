import React, { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const FileUploader = ({ setSummaryData, darkMode }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileType, setFileType] = useState("txt");

  const handleSubmit = async () => {
    if (!file) return alert("Please select a file first.");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/process",
        formData
      );
      setSummaryData(res.data);
    } catch (err) {
      alert("Error processing file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* File Picker */}
      <div className="w-full md:w-1/2 h-72 border-2 border-dashed rounded-xl bg-white text-center hover:shadow-lg transition">
        <label
          htmlFor="file-upload"
          className="w-full h-full flex flex-col justify-center items-center cursor-pointer px-6 py-6"
        >
          <input
            id="file-upload"
            type="file"
            accept={fileType === "txt" ? ".txt" : "audio/*"}
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
          <p className="text-lg font-semibold text-blue-600">
            {file
              ? file.name
              : `Choose a ${
                  fileType === "txt" ? "Transcript (.txt)" : "Audio File"
                }`}
          </p>
          <p className="text-sm text-gray-500 mt-1">Click anywhere to upload</p>

          {/* Dropdown */}
          <select
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
            className="mt-4 px-3 py-2 border rounded text-sm text-gray-700"
            onClick={(e) => e.stopPropagation()} // prevent label from triggering input click
          >
            <option value="txt">Transcript (.txt)</option>
            <option value="audio">Audio File (.mp3/.wav)</option>
          </select>
        </label>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full md:w-1/2 h-72 flex flex-col justify-center items-center rounded-xl ${
          loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        } ${
          darkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
        } hover:bg-blue-700 transition-all`}
      >
        {loading ? (
          <FaSpinner className="animate-spin text-2xl" />
        ) : (
          <h2 className="text-2xl font-semibold">Upload & Analyze</h2>
        )}
        <p className="text-sm mt-2">
          {fileType === "audio"
            ? "Audio will be transcribed via Whisper"
            : "Processed directly"}
        </p>
      </button>
    </div>
  );
};

export default FileUploader;
