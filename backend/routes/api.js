// backend/routes/api.js
import express from "express";
import multer from "multer";
import { handleUploadAndProcess } from "../controllers/aiController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/process", upload.single("file"), handleUploadAndProcess);

export default router;
