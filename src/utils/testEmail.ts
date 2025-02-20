import nodemailer from "nodemailer";

// ------------ NOTE: This is a test script ------------
// Run with:
// $ bun ./src/utils/testEmail.ts
// ---------------------------------------------------

console.log("(LOG) SMTP_USER:", process.env.SMTP_USER);
console.log(
  "(LOG) SMTP_PASS:",
  process.env.SMTP_USER ? "(FOUND) ********" : "(ERR) No encontrada",
);

/**
 * Email service configuration
 * @see https://nodemailer.com/smtp/
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Test message
 * @see https://nodemailer.com/message/
 */
const message = {
  from: {
    name: "Mi Web",
    address: process.env.SMTP_USER ?? "error-user-not-found",
  },
  to: process.env.SMTP_USER,
  subject: "Prueba de Nodemailer",
  text: "<p>Esto es un email de prueba enviado con Nodemailer</p>",
};

/**
 * Send a test email
 * @see https://nodemailer.com/about/
 * @see https://nodemailer.com/message/
 * @see https://nodemailer.com/usage/
 */
async function sendTestEmail() {
  try {
    const info = await transporter.sendMail(message);

    console.log("Email enviado:", info.response);
  } catch (error) {
    console.error("Error al enviar email:", error);
  }
}

// Run the test
sendTestEmail();
