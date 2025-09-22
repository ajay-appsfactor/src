import nodemailer from "nodemailer";


export const transporter = nodemailer.createTransport({
  host: process.env.MAILGUN_SMTP_HOST,
  port: Number(process.env.MAILGUN_SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 2525, 
  auth: {
    user: process.env.MAILGUN_SMTP_USER,
    pass: process.env.MAILGUN_SMTP_PASS,
  },
});


// export const transporter = nodemailer.createTransport({
//   host: process.env.MAILGUN_SMTP_HOST,
//   port: process.env.MAILGUN_SMTP_PORT,
//   secure: false,
//   auth: {
//     user: process.env.MAILGUN_SMTP_USER,
//     pass: process.env.MAILGUN_SMTP_PASS,
//   },
// });

// export const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

transporter.verify(function (error, success) {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("Server is ready to take messages");
  }
});

//  service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//     }

// Reusable function
export async function sendMail(to, subject, html) {
  try {
    await transporter.sendMail({
      from: `"3dquotpro Support" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error };
  }
}
