import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoute from "./routes/contact.route.js";
import { Resend } from "resend";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:8080", "https://pixel-perfect-portfolios-olive.vercel.app", ],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true, 
}));


// Initialisation Resend
let emailReady = false;
let resendClient;
if (process.env.RESEND_API_KEY) {
  resendClient = new Resend(process.env.RESEND_API_KEY);
  console.log("✅ Clé Resend trouvée, système d'email prêt à tester");
  // emailReady = true;
  console.log("emailReady:", !emailReady);
} else {
  console.warn("⚠️ RESEND_API_KEY manquant, le système d'email ne fonctionnera pas");
}


let mongoConnected = false;
// Route racine
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Backend is running 🚀",
    mongoConnected
  });
});

// Route contact
app.use("/api/contact", contactRoute);


// MongoDB (optionnel)
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connecté ✅");
    mongoConnected = true;
  })
  .catch(err => {
    console.warn("MongoDB indisponible :", err.message);
  });

// Serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT} 🚀`);
});