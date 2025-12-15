import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // const { emailTo, subject, message } = await req.json();
    const body = await req.json();

    console.log("BODY:", body);
    const { emailTo, subject, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"3D QuotePro" <${process.env.EMAIL_USER}>`,
      to: emailTo,
      subject,
      html: message,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
