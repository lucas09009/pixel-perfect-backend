import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import contactRoute from "./routes/contact.route.js";
import { verifySMTP } from "./config/mailer.js";

dotenv.config();
const app = express();
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors({
  origin: ["https://pixel-perfect-portfolios-olive.vercel.app"],
  methods: ["GET", "POST"]
}));

let mongoConnected = false;
let smtpReady = false;
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

// Connexion MongoDB
console.log("Railway MONGO_URI =", process.env.MONGO_URI);
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("MongoDB connecté ✅");
    mongoConnected = true;

    // SMTP optionnel, erreur catchée
    try {
      await verifySMTP();
      smtpReady = true;
      console.log("SMTP ready ✅");
    } catch (err) {
      console.warn("SMTP échoué (ignorable pour dev) :", err.message);
    }

  })
  .catch(err => {
    console.error("⚠️ Impossible de se connecter à MongoDB :", err.message);
    console.warn("Le serveur continue quand même.");
  });

// Serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT} 🚀`);
});