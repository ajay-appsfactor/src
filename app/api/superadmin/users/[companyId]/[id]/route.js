import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/hashPassword";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDb } from "@/lib/db/getTenantClient";

// Get Single User
export async function GET(req, { params }) {
  try {
    const { companyId, id } = await params;

    // SuperAdmin DB se company fetch
    const company = await superAdminDb.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return NextResponse.json(
        { error: "Company not found." },
        { status: 404 }
      );
    }

    // Tenant DB connect
    const prisma = await getTenantDb(company.db_url);

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("GET User Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// User Delete
export async function DELETE(req, { params }) {
  const { companyId, id } = await params;

  try {
    // SuperAdmin DB se company fetch
    const company = await superAdminDb.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return NextResponse.json(
        { error: "Company not found." },
        { status: 404 }
      );
    }

    // Tenant DB connect
    const prisma = await getTenantDb(company.db_url);

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Delete user
    await prisma.user.delete({ where: { id } });

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

// User Update
export async function PUT(req, { params }) {
  try {
    const { companyId, id } = await params;
    const body = await req.json();

    const company = await superAdminDb.company.findUnique({
      where: { id: companyId },
    });
    if (!company)
      return NextResponse.json(
        { error: "Company not found." },
        { status: 404 }
      );

    const prisma = await getTenantDb(company.db_url);

    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    const { password, first_name, last_name, email, phone, roles } = body;

    // Hash password if provided
    const hashedPassword = password
      ? await hashPassword(password)
      : user.password;

    await prisma.user.update({
      where: { id },
      data: {
        first_name,
        last_name: last_name || null,
        email,
        phone: phone || null,
        roles,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    // console.error("PUT User Error:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
