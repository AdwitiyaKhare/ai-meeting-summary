---

```markdown
# AI Meeting Summary Generator – Backend

This is the backend service for an AI-powered tool that summarizes business meeting transcripts or audio recordings. It supports `.txt`, `.mp3`, `.wav`, and `.m4a` file uploads. The backend uses:

- OpenAI Whisper for audio transcription
- Hugging Face's `bart-large-cnn-samsum` model for summarization
- Express.js for API handling
- Multer for file uploads

---

## Features

- Upload text or audio files via API
- Transcribe audio using OpenAI Whisper
- Generate summaries using Hugging Face’s free summarization model
- Graceful fallback when structured CRM insights aren't supported
- Fully modular code structure (controllers, routes, services)

---

## Project Structure

```

backend/
├── app.js                   # Entry point
├── routes/
│   └── api.js               # Defines API route `/api/process`
├── controllers/
│   └── aiController.js      # Handles file processing and response
├── services/
│   ├── whisperService.js    # Uses OpenAI Whisper for audio transcription
│   └── openaiService.js     # Uses Hugging Face or GPT-4 for summarization
├── uploads/                 # Temporary file uploads (auto-created)
├── .env                     # Environment variables (excluded from Git)
└── .env.example             # Template for environment setup

````

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-meeting-summary-backend.git
cd ai-meeting-summary-backend/backend
````

### 2. Install Dependencies

Using Yarn:

```bash
yarn
```

Or with npm:

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file using the provided `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```
OPENAI_API_KEY=your-openai-api-key
HUGGINGFACE_API_TOKEN=your-huggingface-api-token
PORT=5000
```

You can obtain keys from:

* OpenAI: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)
* Hugging Face: [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

### 4. Start the Server

```bash
yarn start
```

Or:

```bash
npm start
```

Server will run at:

```
http://localhost:5000
```

---

## API Endpoint

### `POST /api/process`

Uploads a `.txt` or audio file and returns a summarized version.

**Request:**

* Form Data:

  * `file`: `.txt`, `.mp3`, `.wav`, or `.m4a`

**Example using `curl`:**

```bash
curl -X POST http://localhost:5000/api/process \
  -H "Content-Type: multipart/form-data" \
  -F "file=@/path/to/meeting.mp3"
```

**Example Response (using Hugging Face):**

```json
{
  "summary": "The team discussed Q3 deliverables and blockers.",
  "objections": ["N/A (free model limitation)"],
  "resolutions": ["N/A (free model limitation)"],
  "action_items": ["N/A (free model limitation)"]
}
```

---

## Testing Locally

You can use tools like:

* Postman
* curl
* Your React frontend UI (connected to this backend)

---

## License

MIT

---
