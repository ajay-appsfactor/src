import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { hashPassword } from "@/utils/hashPassword";

export async function POST(req) {
  const {tenantDb} = await getTenantDbFromHeaders();
  const body = await req.json();

  const {
    first_name,
    last_name,
    email,
    password,
    phone,
    company_name = "",
    type = "",
    website = "",
    notes = "",
  } = body;

  //  Validate required fields
  const missingFields = [];
  if (!first_name) missingFields.push("first_name");
  if (!last_name) missingFields.push("last_name");
  if (!company_name) missingFields.push("company_name");
  if (!email) missingFields.push("email");
  if (!type) missingFields.push("type");
  if (!password) missingFields.push("password");

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missingFields.join(", ")}` },
      { status: 400 }
    );
  }

  //  normalize email (lowercase + trim spaces)
  const normalizedEmail = email.toLowerCase().trim();

  try {
    // Cross-check in Vendor table (case-insensitive)
    const vendorExists = await tenantDb.vendor.findFirst({
      where: { email: { equals: normalizedEmail, mode: "insensitive" } },
    });
    if (vendorExists) {
      return NextResponse.json(
        { error: "Email already exists in Vendors." },
        { status: 400 }
      );
    }

    // Cross-check in Customer table (case-insensitive)
    const customerExists = await tenantDb.customer.findFirst({
      where: { email: { equals: normalizedEmail, mode: "insensitive" } },
    });
    if (customerExists) {
      return NextResponse.json(
        { error: "Email already exists in Customers." },
        { status: 400 }
      );
    }

    // Cross-check in User table (case-insensitive)
    const existingUser = await tenantDb.user.findFirst({
      where: { email: { equals: normalizedEmail, mode: "insensitive" } },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists in Users." },
        { status: 400 }
      );
    }

    // 3. Hash password
    const hashedPassword = await hashPassword(password);

    // 4. Create User
    const newUser = await tenantDb.user.create({
      data: {
        first_name,
        last_name,
        email: normalizedEmail,
        password: hashedPassword,
        phone: phone?.trim() || null,
        roles: ["customer"],
      },
    });

    // 5. Create Customer and link to User
    const newCustomer = await tenantDb.customer.create({
      data: {
        first_name,
        last_name,
        customer_name: `${first_name} ${last_name}`,
        company_name,
        email: normalizedEmail,
        password: hashedPassword,
        phone: phone?.trim() || null,
        type,
        website: website?.trim() || null,
        notes: notes?.trim() || null,
        is_active: "Active",
        user: { connect: { id: newUser.id } },
      },
    });

    return NextResponse.json(
      {
        message: "Customer created successfully.",
        customer_id: newCustomer.id,
      },
      { status: 201 }
    );
  } catch (error) {
    // console.error("Create Customer Error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
