import { NextResponse } from "next/server";
import { hashPassword, verifyPassword } from "@/utils/hashPassword";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// Get Single User
export async function GET(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { error: "User ID is required." },
        { status: 400 }
      );
    }

    const { tenantDb } = await getTenantDbFromHeaders();

    const user = await tenantDb.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Return roles as they are (labels)
    const formattedUser = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone || "",
      roles: user.roles || [],
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return NextResponse.json(formattedUser, { status: 200 });
  } catch (error) {
    // console.error("GET User Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// PUT Method
export async function PUT(req, { params }) {
  const { id } = await params;

  try {
    const body = await req.json();
    // console.log("Body Result :", body);
    const { first_name, last_name, email, password, phone, roles } = body;

    const {tenantDb} = await getTenantDbFromHeaders();

    // Fetch existing user
    const existingUser = await tenantDb.user.findUnique({ where: { id } });
    if (!existingUser) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Validate required fields
    if (!first_name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "First name, email are required." },
        { status: 400 }
      );
    }

    if (password && password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    if (!Array.isArray(roles) || roles.length === 0) {
      return NextResponse.json(
        { error: "At least one role must be selected." },
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Check email conflicts across Users, Vendors, Customers (case-insensitive)
    if (normalizedEmail !== existingUser.email.toLowerCase()) {
      const [customerConflict, vendorConflict, userConflict] =
        await Promise.all([
          tenantDb.customer.findFirst({
            where: {
              email: { equals: normalizedEmail, mode: "insensitive" },
              NOT: { id: existingUser.customer_id || "" },
            },
          }),
          tenantDb.vendor.findFirst({
            where: {
              email: { equals: normalizedEmail, mode: "insensitive" },
              NOT: { id: existingUser.vendor_id || "" },
            },
          }),
          tenantDb.user.findFirst({
            where: {
              email: { equals: normalizedEmail, mode: "insensitive" },
              NOT: { id: existingUser.id },
            },
          }),
        ]);

      if (customerConflict) {
        return NextResponse.json(
          { error: "This email ID already exists in Customers." },
          { status: 400 }
        );
      }
      if (vendorConflict) {
        return NextResponse.json(
          { error: "This email ID already exists in Vendors." },
          { status: 400 }
        );
      }
      if (userConflict) {
        return NextResponse.json(
          { error: "This email ID already exists in Users." },
          { status: 400 }
        );
      }
    }

    // Hash password if provided
    const hashedPassword = password
      ? await hashPassword(password)
      : existingUser.password;

    // Full replace update
    const updateUser = await tenantDb.user.update({
      where: { id },
      data: {
        first_name: first_name.trim(),
        last_name: last_name?.trim() || null,
        email: normalizedEmail,
        phone: phone?.trim() || null,
        roles,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User updated successfully.", user: updateUser },
      { status: 200 }
    );
  } catch (error) {
    // console.error("PUT /users/:id error:", error);
    return NextResponse.json(
      { error: "Failed to update user." },
      { status: 500 }
    );
  }
}

// DELETE Method
export async function DELETE(req, { params }) {
  const { id } = await params;

  try {
    // Check if user exists
    const {tenantDb} = await getTenantDbFromHeaders();
    const existingUser = await tenantDb.user.findUnique({ where: { id } });
    if (!existingUser) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Delete user
    await tenantDb.user.delete({ where: { id } });

    return NextResponse.json(
      { message: "User deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete user." },
      { status: 500 }
    );
  }
}

// Manage Password
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const { oldPassword, password } = await req.json();
    // console.log("Old Password :", oldPassword ,"Password :", password)
    if (!oldPassword || !password) {
      return NextResponse.json(
        { error: "All fields required." },
        { status: 400 }
      );
    }

    const {tenantDb} = await getTenantDbFromHeaders();

    // Fetch user from DB
    const user = await tenantDb.user.findUnique({ where: { id } });
    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Verify old password
    const isValid = await verifyPassword(oldPassword, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Current password is incorrect." },
        { status: 400 }
      );
    }

    // Hash new password
    const hashedPassword = await hashPassword(password);

    // Update in DB
    await tenantDb.user.update({
      where: { id },
      data: { password: hashedPassword },
    });

    return NextResponse.json(
      { message: "Password updated successfully." },
      { status: 200 }
    );
  } catch (err) {
    // console.error(err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
