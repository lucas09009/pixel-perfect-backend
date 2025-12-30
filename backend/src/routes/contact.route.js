import express from "express";
import Message from "../models/Message.model.js";
import { transporter } from "../config/mailer.js";
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

    // Envoi email
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    console.log("Email envoyé ✅");

    res.status(200).json({
      success: true,
      message: newMessage
        ? "Message sauvegardé dans MongoDB et envoyé par email ✅"
        : "MongoDB non connecté, mais email envoyé ✅",
      data: newMessage
    });

  } catch (error) {
    console.error("Erreur route /api/contact :", error);
    res.status(500).json({ success: false, message: "Erreur serveur, impossible d’envoyer le message" });
  }
});

export default router;
