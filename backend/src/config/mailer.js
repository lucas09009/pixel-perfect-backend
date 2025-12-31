import dotenv from "dotenv";
import { Resend } from "resend";
dotenv.config();
const resend = new Resend(process.env.RESEND_API_KEY);

// EMAIL EN PRODUCTION AVEC RESEND
export async function sendEmail({ subject, text }) {
  return await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["luckpegan@gmail.com"],
    subject,
    text,
  });
}