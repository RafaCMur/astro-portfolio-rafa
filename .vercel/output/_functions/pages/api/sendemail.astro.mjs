import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    console.log("(OK) Received email request:", body);
    if (!body.name || !body.email || !body.subject || !body.message) {
      console.error("(ERR) Missing fields in request");
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }
    console.log(
      "(OK) SMTP_USER:",
      "rafacabanillasm@gmail.com"
    );
    console.log(
      "(OK) SMTP_PASS:",
      "dnnzgzktdwhohwdm" ? "(HIDDEN)" : "(ERR) NOT FOUND"
    );
    if (false) ;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "rafacabanillasm@gmail.com",
        pass: "dnnzgzktdwhohwdm"
      }
    });
    const mailOptions = {
      from: `"${body.name}" <${body.email}>`,
      // Sender
      to: "rafacabanillasm@gmail.com",
      // Receiver (my email)
      subject: body.subject,
      text: `${body.name} (${body.email}) sent you a message:

${body.message}`,
      // Plain text fallback
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 1rem; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333;">New Email from Astro Portfolio</h2>
          <p><strong>From:</strong> ${body.name} (<a href="mailto:${body.email}">${body.email}</a>)</p>
          <p><strong>Subject:</strong> ${body.subject}</p>
          <p style="background: #f4f4f4; padding: 1rem; border-radius: 5px; font-style: italic;">
            ${body.message}
          </p>
          <hr />
          <p style="font-size: 12px; color: #888;">This message was sent from the contact form on <b>astro portfolio.</b></p>
        </div>
      `
    };
    console.log("(OK) Sending email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("(OK) Email sent successfully:", info.response);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("(ERR) API Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
