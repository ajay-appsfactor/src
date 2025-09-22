import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { sendMail } from "@/lib/mailer";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
// import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // email to lowercase
    const normalizedEmail = email.toLowerCase();

    // Find the user email
    const tenantPrisma = await getTenantDbFromHeaders();
    const user = await tenantPrisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return NextResponse.json(
        { error: "No account with this email." },
        { status: 404 }
      );
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("OPT Generate :", otp);

    // Hash OTP before saving
    const hashedOtp = await bcrypt.hash(otp, 10);

    // Delete old OTPs for same email
    await tenantPrisma.passwordResetOTP.deleteMany({
      where: { user_id: user.id },
    });

    // Unique request ID
    const requestId = randomUUID();

    // Store OTP in DB with 30-min expiry
    await tenantPrisma.passwordResetOTP.create({
      data: {
        user_id: user.id,
        email: user.email,
        otp: hashedOtp,
        request_id: requestId,
        expires_at: new Date(Date.now() + 30 * 60 * 1000), // 30 min
      },
    });

    // HTML template
    // const htmlTemplate = `
    // <!DOCTYPE html>
    // <html lang="en">
    //   <body>
    //     <div
    //       style="
    //         font-family: Arial, sans-serif;
    //         max-width: 500px;
    //         margin: 5px;
    //         padding: 20px;
    //         background: #fff;
    //         border-radius: 8px;
    //         /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); */
    //       "
    //     >
    //       <!-- Logo Section -->
    //       <div style="text-align: left; margin-bottom: 20px">
    //         <img
    //           src="https://i.ibb.co/y7yp5s1/3d-logo.png"
    //           alt="Company Logo"
    //           style="max-width: 150px; height: auto"
    //         />
    //       </div>

    //       <h4 style="text-align: start; color: #333">Password Reset Request</h4>
    //       <p style="font-family: Arial, sans-serif; color: #333; font-size: 15px">
    //         To reset your password for <strong>3dquotpro</strong>, enter the OTP
    //         below:
    //       </p>

    //       <!-- OTP Box -->
    //       <div
    //         style="display: flex; align-items: center; gap: 10px; margin: 20px 0"
    //       >
    //         <div
    //           id="otp"
    //           style="
    //             flex: 1;
    //             font-size: 18px;
    //             font-weight: bold;
    //             background: #f6f6f6;
    //             border: 2px dashed #1e40af;
    //             border-radius: 6px;
    //             padding: 10px 20px;
    //             letter-spacing: 5px;
    //             text-align: center;
    //           "
    //         >
    //           ${otp}
    //         </div>
    //       </div>
    //       <p style="text-align: start">
    //         This code is valid for <b>30 minutes</b> and can only be used once.
    //       </p>
    //       <p style="text-align: start">
    //         Please don't share this code with anyone: we'll never ask for it on the
    //         phone or via email.
    //       </p>
    //       <p style="text-align: start; font-size: 12px; color: #888">
    //         If you didn’t request this, you can ignore this email.
    //       </p>
    //       <p style="text-align: start; font-size: 12px; color: #888">
    //         Thanks <br />
    //         &copy; 2025 3dquotpro
    //       </p>

    //       <!-- <div
    //         style="
    //           margin-top: 30px;
    //           font-size: 12px;
    //           text-align: start;
    //           color: #999;
    //         "
    //       >&copy; 2025 3dquotpro

    //       </div> -->
    //     </div>
    //   </body>
    // </html>
    //     `;

    // Send email
    // const result = await sendMail(
    //   email,
    //   "3dquotpro - Password Reset OTP",
    //   htmlTemplate
    // );

    // if (!result.success) {
    //   return NextResponse.json(
    //     { error: "Failed to send OTP." },
    //     { status: 500 }
    //   );
    // }

    return NextResponse.json(
      { message: "OTP sent to email.", requestId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "Failed to send OTP." }, { status: 500 });
  }
}

// Verify OTP
export async function PUT(req) {
  try {
    const { email, otp } = await req.json();

    console.log("Email :", email);
    console.log("OTP :", otp);
    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email & OTP required" },
        { status: 400 }
      );
    }

    // Find latest OTP for email
    const superAdminDb = await getTenantDbFromHeaders();
    const record = await superAdminDb.passwordResetOTP.findFirst({
      where: { email },
      orderBy: { created_at: "desc" },
    });
    if (!record) {
      return NextResponse.json({ error: "OTP not found." }, { status: 400 });
    }

    // Expiry check
    if (record.expires_at < new Date()) {
      return NextResponse.json({ error: "OTP expired." }, { status: 400 });
    }

    // Verify OTP
    const isValid = await bcrypt.compare(otp, record.otp);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid OTP." }, { status: 400 });
    }

    // Find company by email
    const user = await superAdminDb.user.findFirst({ where: { email } });
    // if (!company) {
    //   return NextResponse.json(
    //     { error: "Company not found." },
    //     { status: 404 }
    //   );
    // }

    if (!user) {
      return NextResponse.json(
        { error: "No account with this email." },
        { status: 404 }
      );
    }

    // Generate reset token (30 min valid)
    const resetToken = randomUUID();

    await superAdminDb.passwordResetToken.deleteMany({
      where: { user_id: user.id },
    });

    await superAdminDb.passwordResetToken.create({
      data: {
        user_id: user.id,
        token: resetToken,
        expires_at: new Date(Date.now() + 30 * 60 * 1000),
      },
    });

    // Cleanup OTP
    await superAdminDb.passwordResetOTP.delete({ where: { id: record.id } });

    return NextResponse.json(
      { message: "OTP verified successfully.", resetToken },
      { status: 200 }
    );
  } catch (error) {
    console.error("OTP verify error:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP." },
      { status: 500 }
    );
  }
}
