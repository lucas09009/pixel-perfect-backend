import express from "express";
import Message from "../models/Message.model.js";
import { sendEmail } from "../config/mailer.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Tous les champs sont requis" });
    }

    let newMessage = null;
    console.log("MongoDB readyState:", mongoose.connection.readyState);

    // Sauvegarde dans Mongo seulement si MongoDB est connecté
    if (mongoose.connection.readyState === 1) {
      try {
        newMessage = await Message.create({ name, email, message });
        console.log("Message sauvegardé dans MongoDB ✅", newMessage);
      } catch(err) {
        console.error("Erreur MongoDB:", err.message);
      }
    } else {
      console.warn("⚠️ MongoDB non connecté : message non sauvegardé en DB");
    }

  // Envoi d'Email avec Resend en production
    await sendEmail({
    subject: "📩 Nouveau message portfolio",
    text: `
      Nom: ${name}
      Email: ${email}
  
      Message:
      ${message}
        `,
    });
    console.log("Email envoyé via Resend ✅");
    res.status(200).json({
      success: true,
      message: newMessage
        ? "Message sauvegardé dans MongoDB et envoyé par email ✅"
        : "MongoDB non connecté, mais email envoyé ✅",
      data: newMessage
    });

  } catch (err) {
    console.error("Erreur lors de l'envoi du message:", err.message);
    return res.status(500).json({ success: false, message: "Erreur lors de l'envoi du message" });
    }
});
export default router