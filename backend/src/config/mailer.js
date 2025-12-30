// src/config/mailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,          // au lieu de 465
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Fonction optionnelle pour tester le SMTP
export async function verifySMTP() {
  try {
    await transporter.verify();
    console.log("SMTP Gmail prêt ✅");
  } catch (err) {
    console.error("Erreur SMTP :", err);
  }
}
