```markdown
# AI Meeting Summary Generator – Frontend

This is the frontend interface for an AI-powered tool that allows users to upload **meeting transcripts** or **audio files**, and view summarized results including **summary**, **objections**, **resolutions**, and **action items**.

It is built with:

- React (using Vite)
- TailwindCSS
- Axios for API communication
- LocalStorage for summary history

---

## Features

- Upload `.txt`, `.mp3`, `.wav`, or `.m4a` files
- Toggle between **Light** and **Dark** mode
- Displays AI-generated CRM-style summary output
- Download results as **JSON** or **CSV**
- Saves previous results locally (in browser)

---

## Project Structure

```

frontend/
├── main.jsx                 # React entry point
├── App.jsx                  # Core layout & state
├── components/
│   └── FileUploader.jsx     # Upload logic and UI
├── pages/
│   └── Dashboard.jsx        # Summary output + export
├── index.css                # TailwindCSS styling
├── vite.config.js           # Vite configuration
└── public/
└── favicon, assets...

````

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-meeting-summary-frontend.git
cd ai-meeting-summary-frontend/frontend
````

### 2. Install Dependencies

```bash
npm install
```

Or with Yarn:

```bash
yarn
```

### 3. Run the App Locally

```bash
npm run dev
```

Or:

```bash
yarn dev
```

By default, the frontend will be available at:

```
http://localhost:5173
```

---

## Connecting to Backend

Make sure your backend server is running at:

```
http://localhost:5000
```

You can modify the backend URL in `FileUploader.jsx` if needed:

```js
const res = await axios.post("http://localhost:5000/api/process", formData);
```

To deploy both frontend and backend, use:

* Netlify (for this React app)
* Render / Railway (for the backend)


---

## File Upload Support

* `.txt` — processed directly
* `.mp3`, `.wav`, `.m4a` — transcribed using Whisper (backend)

The file type can be toggled using the dropdown in the upload box.

---

## Output Format

The AI-generated output includes:

* **Summary**: A high-level overview
* **Objections**: Common concerns raised in the meeting
* **Resolutions**: How those concerns were addressed
* **Action Items**: Next steps identified

These can be exported using:

* `Export JSON`
* `Export CSV`

---

## Developer Links

* [GitHub Repository](https://github.com/AdwitiyaKhare/ai-meeting-summary)
* [Developer Portfolio](https://adwitiyakhare.vercel.app/)

---

## License

MIT License

---
