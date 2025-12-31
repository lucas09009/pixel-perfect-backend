import dotenv from "dotenv";
import { Resend } from "resend";
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);

// EMAIL EN PRODUCTION AVEC RESEND
export async function sendEmail({ subject, text }) {
  try {
    return await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["luckpegan@gmail.com"],
      subject,
      text,
    });
  } catch (err) {
    console.error("Erreur Resend :", err);
    throw err; // relance pour que la route gère l'erreur
  }
}
