import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/hashPassword";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";
import { formatDates } from "@/utils/formatDates";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      roles,
      phone
    } = body;

    // normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Validation
    if (
      !firstName ||
      !normalizedEmail ||
      !password ||
      !confirmPassword
    ) {
      return NextResponse.json(
        { error: "First name, email, and passwords are required" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    if (!Array.isArray(roles) || roles.length === 0) {
      return NextResponse.json(
        { error: "At least one role must be selected" },
        { status: 400 }
      );
    }

    const {tenantDb} = await getTenantDbFromHeaders();

    // Cross-check in Customers
    const existingCustomer = await tenantDb.customer.findFirst({
      where: {
        email: { equals: normalizedEmail, mode: "insensitive" },
      },
    });
    if (existingCustomer) {
      return NextResponse.json(
        { error: "This email already exists in Customers." },
        { status: 400 }
      );
    }

    // Cross-check in Vendors
    const existingVendor = await tenantDb.vendor.findFirst({
      where: {
        email: { equals: normalizedEmail, mode: "insensitive" },
      },
    });
    if (existingVendor) {
      return NextResponse.json(
        { error: "This email already exists in Vendors." },
        { status: 400 }
      );
    }

    // Cross-check in Users
    const existingUser = await tenantDb.user.findFirst({
      where: {
        email: { equals: normalizedEmail, mode: "insensitive" },
      },
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "This email already exists in Users." },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create User
    await tenantDb.user.create({
      data: {
        first_name: firstName,
        last_name: lastName || null,
        email: normalizedEmail,
        phone: phone || null,
        password: hashedPassword,
        roles,
      },
    });

    return NextResponse.json(
      { message: "User created successfully." },
      { status: 201 }
    );
  } catch (error) {
    // console.error("Create User Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get all users with pagination, search, sorting
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Pagination
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
    const pageSize = Math.min(
      Math.max(parseInt(searchParams.get("pageSize") || "10", 10), 1),
      100
    );

    // Search & Sorting
    const search = searchParams.get("search")?.trim() || "";
    const sort = searchParams.get("sort") || "created_at";
    const order = searchParams.get("order") === "asc" ? "asc" : "desc";

    const allowedSortFields = [
      "first_name",
      "last_name",
      "email",
      "phone",
      "created_at",
    ];
    const sortField = allowedSortFields.includes(sort) ? sort : "created_at";

    // Search filter (name, email, phone)
    const searchFilter = search
      ? {
          OR: [
            { first_name: { contains: search, mode: "insensitive" } },
            { last_name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { phone: { contains: search, mode: "insensitive" } },
          ],
        }
      : {};

    // Roles filter:  "customer" & "vendor"
    const rolesFilter = {
      NOT: [
        { roles: { array_contains: "customer" } },
        { roles: { array_contains: "vendor" } },
        // { roles: { array_contains: "ceosSeniorExecutives" } },
      ],
    };

    // Combine filters
    const where = { ...searchFilter, ...rolesFilter };

    const {tenantDb, timezone} = await getTenantDbFromHeaders();

    const [data, totalCount] = await Promise.all([
      tenantDb.user.findMany({
        where,
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { [sortField]: order },
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          phone: true,
          roles: true,
          created_at: true,
          updated_at: true,
        },
      }),
      tenantDb.user.count({ where }),
    ]);

    const formattedData = formatDates(data, timezone);

    return NextResponse.json({ data:formattedData, totalCount, page, pageSize });
  } catch (error) {
    // console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch users." },
      { status: 500 }
    );
  }
}

