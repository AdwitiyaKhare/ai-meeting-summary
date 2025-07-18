// backend/services/whisperService.js
import { OpenAI } from "openai";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const transcribeAudio = async (filePath) => {
  try {
    const response = await openai.audio.transcriptions.create({
      file: fs.createReadStream(filePath),
      model: "whisper-1",
      response_format: "text",
    });

    return response; // This is plain text
  } catch (err) {
    console.error("Whisper transcription failed:", err);
    throw new Error("Transcription failed");
  }
};
