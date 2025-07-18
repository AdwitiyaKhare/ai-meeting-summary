import { processWithOpenAI } from "../services/openaiService.js";
import { transcribeAudio } from "../services/whisperService.js";
import path from "path";
import fs from "fs/promises";

export const handleUploadAndProcess = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    let transcript = "";

    // Handle text files
    if (file.mimetype === "text/plain") {
      transcript = await fs.readFile(file.path, "utf-8");
    }

    // Handle audio files (e.g., mp3, wav, m4a)
    else if (
      file.mimetype.startsWith("audio/") ||
      [".mp3", ".m4a", ".wav"].some((ext) => file.originalname.endsWith(ext))
    ) {
      transcript = await transcribeAudio(file.path);
    } else {
      return res.status(400).json({ error: "Unsupported file type" });
    }

    const summary = await processWithOpenAI(transcript);
    res.json(summary);
  } catch (error) {
    console.error("Processing error:", error.message);
    res.status(500).json({ error: "Server error during processing" });
  }
};
