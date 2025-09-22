import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function POST(req) {
  try {
    const { token, password, email } = await req.json();

    console.log("Token..:", token);
    console.log("Password :", password);
    console.log("Email :", email);

    if (!token || !password || !email) {
      return NextResponse.json(
        { error: "Token and password are required" },
        { status: 400 }
      );
    }

    // email to lowercase
    const normalizedEmail = email.toLowerCase();

    // Find token record
    const tenantDb = await getTenantDbFromHeaders();

    const user = await tenantDb.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return NextResponse.json(
        { error: "No account with this email." },
        { status: 404 }
      );
    }

    const resetRecord = await tenantDb.PasswordResetToken.findUnique({
      where: { token },
    });

    // console.log("ResetRecord Get :", resetRecord);

    if (!resetRecord) {
      return NextResponse.json({ error: "Invalid token." }, { status: 400 });
    }

    // Check expiry
    if (!resetRecord.expires_at || resetRecord.expires_at < new Date()) {
      return NextResponse.json({ error: "Token expired." }, { status: 400 });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password
    const updatedUser = await tenantDb.user.update({
      where: { id: resetRecord.user_id },
      data: { password: hashedPassword },
    });

    // Delete token after use
    await tenantDb.passwordResetToken.delete({
      where: { id: resetRecord.id },
    });

    // console.log("Reset Token Deleted..");

    return NextResponse.json({
      success: true,
      message: "Password updated successfully.",
    });
  } catch (err) {
    console.error("Reset password error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
