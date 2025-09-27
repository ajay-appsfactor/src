import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { hashPassword } from "@/utils/hashPassword";

export async function POST(req) {
  const {tenantDb}  = await getTenantDbFromHeaders();
  const body = await req.json();

  const {
    first_name,
    last_name,
    email,
    password,
    phone,
    vendor_type = "",
    website = "",
  } = body;

  // normalize email
  const normalizedEmail = email.toLowerCase().trim();

  try {
    // 1. Cross-check in Customers
    const customerExists = await tenantDb.customer.findFirst({
      where: { email: { equals: normalizedEmail, mode: "insensitive" } },
    });
    if (customerExists) {
      return NextResponse.json(
        { error: "Email already exists in Customers" },
        { status: 400 }
      );
    }

    // 2. Cross-check in Vendors
    const vendorExists = await tenantDb.vendor.findFirst({
      where: { email: { equals: normalizedEmail, mode: "insensitive" } },
    });
    if (vendorExists) {
      return NextResponse.json(
        { error: "Email already exists in Vendors" },
        { status: 400 }
      );
    }

    // 3. Cross-check in Users
    const userExists = await tenantDb.user.findFirst({
      where: { email: { equals: normalizedEmail, mode: "insensitive" } },
    });
    if (userExists) {
      return NextResponse.json(
        { error: "Email already exists in Users" },
        { status: 400 }
      );
    }

    // 4. Hash password
    const hashedPassword = await hashPassword(password);

    // 5. Create User
    const newUser = await tenantDb.user.create({
      data: {
        first_name,
        last_name,
        email: normalizedEmail,
        password: hashedPassword,
        phone: phone.trim() || null,
        roles: ["vendor"],
      },
    });

    // 6. Create Vendor and link to User
    const newVendor = await tenantDb.vendor.create({
      data: {
        first_name,
        last_name,
        vendor_name: `${first_name} ${last_name}`,
        vendor_type,
        email: normalizedEmail,
        password: hashedPassword,
        phone: phone.trim() || null,
        website: website.trim() || null,
        user: { connect: { id: newUser.id } },
      },
    });

    return NextResponse.json(
      {
        message: "Vendor successfully created.",
        vendor_id: newVendor.id,
      },
      { status: 201 }
    );
  } catch (error) {
    // console.error("Create Vendor Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
