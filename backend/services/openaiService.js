import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

// GPT-4 version (commented out)
// import { OpenAI } from "openai";
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// export async function processWithOpenAI(transcript) {
//   const prompt = `
// You are an AI assistant summarizing business meetings.

// Transcript:
// """${transcript}"""

// Return JSON with:
// 1. summary
// 2. objections
// 3. resolutions
// 4. action_items
// `;

//   const completion = await openai.chat.completions.create({
//     model: "gpt-4",
//     messages: [{ role: "user", content: prompt }],
//     temperature: 0.3,
//   });

//   const text = completion.choices[0].message.content;

//   // Try to parse it as JSON
//   try {
//     return JSON.parse(text);
//   } catch (err) {
//     return { raw_output: text }; // fallback if not JSON
//   }
// }

/**
 * 🚫 GPT-4 is not accessible without a paid OpenAI plan.
 * ✅ This version uses Hugging Face's `facebook/bart-large-cnn` for free summarization.
 * ⚠️ It only returns a summary (no objections/resolutions/etc.)
 */

export async function processWithOpenAI(transcript) {
  const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/philschmid/bart-large-cnn-samsum",
      {
        inputs: transcript,
      },
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
        },
        timeout: 60000,
      }
    );

    return {
      summary: response.data[0]?.summary_text || "No summary generated.",
      objections: ["N/A (free model limitation)"],
      resolutions: ["N/A (free model limitation)"],
      action_items: ["N/A (free model limitation)"],
    };
  } catch (error) {
    console.error("Hugging Face summarization failed:", error.message);
    throw new Error("Summarization failed");
  }
}
