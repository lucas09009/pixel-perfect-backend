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
app.use(cors());

let mongoConnected = false;

// Connexion MongoDB
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log("MongoDB connecté ✅");
    mongoConnected = true;
    await verifySMTP();
  })
  .catch(err => {
    console.error("⚠️ Impossible de se connecter à MongoDB :", err.message);
    console.warn("Le serveur continue quand même. MongoDB est optionnel pour l'instant.");
  });

// Route contact
app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT} 🚀`);
});
