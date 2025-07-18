---

```markdown
# 🧠 AI Meeting Summary & CRM Note Generator (Backend)

This backend service supports a full-stack AI tool to help sales, customer success, and operations teams summarize client meetings and extract actionable insights. It receives meeting transcripts (currently `.txt` files) and uses **OpenAI GPT-4** to generate:

- A summary of the meeting  
- Client objections  
- Team resolutions  
- Action items and follow-ups

---

## 🚀 Features

✅ Upload `.txt` meeting transcript files  
✅ Use GPT-4 to generate structured summaries  
✅ Simple POST API for frontend integration  
✅ Organized codebase with modular services  
✅ Ready to extend for Whisper (audio), email, CRM integration

---

## 🛠 Tech Stack

| Component   | Tech Stack Used    |
|-------------|--------------------|
| Runtime     | Node.js (Express)  |
| AI Engine   | OpenAI GPT-4       |
| File Upload | Multer             |
| Env Config  | dotenv             |
| HTTP Client | axios              |

---

## 📁 Folder Structure

```

backend/
├── app.js                    # Main Express app
├── routes/
│   └── api.js                # API route: /api/process
├── controllers/
│   └── aiController.js       # File handling and LLM processing
├── services/
│   ├── openaiService.js      # GPT-4 logic
│   └── whisperService.js     # (Optional) Whisper support
├── utils/
│   └── fileHandler.js        # File reading and helpers
├── uploads/                  # Temporary file uploads
├── config/
│   └── env.js                # .env loader
├── .env.example              # Sample environment config
└── README.md                 # Project info

```

---

## 🔐 Environment Variables

Create a `.env` file in the `backend/` directory:

```

OPENAI\_API\_KEY=your-openai-key
PORT=5000

```

Refer to `.env.example` in the repo.

---

## 🧩 Install & Run

### 1. Install Dependencies

```

npm install

```

### 2. Start the Server

```

node app.js

```

The server will start at:  
**http://localhost:5000**

---

## 📤 API Endpoint

### POST `/api/process`

Accepts a `.txt` file and returns a JSON summary of the meeting.

#### Request  
**Content-Type**: `multipart/form-data`  
**Form Data**:  
- `file`: uploaded `.txt` transcript

#### Sample Request (using `curl`)
```

curl -X POST [http://localhost:5000/api/process](http://localhost:5000/api/process)&#x20;
-F 'file=@transcript.txt'

```

#### Response (Example)
```

{
"summary": "The team discussed project goals and next steps.",
"objections": \["Client is concerned about budget.", "Timeline may be too tight."],
"resolutions": \["We offered payment plans.", "Flexible scheduling was proposed."],
"action\_items": \["Send revised proposal", "Schedule follow-up meeting"]
}

```

---

## 🧠 Prompt Template

> You are an assistant summarizing a business meeting. Based on the transcript, extract:  
> - Summary  
> - Objections raised  
> - Resolutions or team responses  
> - Action Items  
> Return in structured JSON format.

---

## ✅ Health Check Route (Optional)

You can hit `/api/ping` for a simple test:

```

GET /api/ping
→ { "message": "Backend is alive 🧠" }

```

---

## 🛠️ Next Features (To-Do)

| Feature                        | Status  |
|-------------------------------|---------|
| Audio transcription via Whisper API | ⬜ Planned |
| Export summary as CSV/JSON     | ✅ (frontend handles) |
| Email the summary via Nodemailer | ⬜ Planned |
| CRM integration (e.g., HubSpot) | ⬜ Optional |
| Token limits & error handling  | ⬜ Optional |

---

## 📄 License

MIT © 2025 Adwitiya Khare  
Feel free to use, fork, and contribute!

---

## 🤝 Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📬 Contact

Created by **Adwitiya Khare**  
📧 adwitiyakhare222004@gmail.com  
🔗 [LinkedIn](https://linkedin.com) | [GitHub](https://github.com)
```

---
