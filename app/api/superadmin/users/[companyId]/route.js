import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/hashPassword";
import { superAdminDb } from "@/lib/db/superadmin";
import { getTenantDb } from "@/lib/db/getTenantClient";

// User Create
export async function POST(req, { params }) {
  try {
    const { companyId } = await params;
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      roles,
      phone,
    } = body;

    // normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // Validation
    if (!firstName || !normalizedEmail || !password || !confirmPassword) {
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

    const company = await superAdminDb.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return NextResponse.json(
        { error: "Company not found." },
        { status: 400 }
      );
    }

    // Connect to tenant DB
    const prisma = await getTenantDb(company.db_url);
    // Cross-check in Customers
    const existingCustomer = await prisma.customer.findFirst({
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
    const existingVendor = await prisma.vendor.findFirst({
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
    const existingUser = await prisma.user.findFirst({
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
    await prisma.user.create({
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
    console.error("Create User Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get all users with pagination, search, sorting
export async function GET(req, { params }) {
  try {
    const { companyId } = await params;

    const company = await superAdminDb.company.findUnique({
      where: { id: companyId },
    });

    if (!company) {
      return NextResponse.json(
        { error: "Company not found." },
        { status: 400 }
      );
    }

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

    // Combine filters
    const where = { ...searchFilter };

    // Connect to tenant DB
    const prisma = await getTenantDb(company.db_url);

    const [data, totalCount] = await Promise.all([
      prisma.user.findMany({
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
      prisma.user.count({ where }),
    ]);

    return NextResponse.json({
      company: {
        id: company.id,
        name: company.company_name,
      },
      data,
      totalCount,
      page,
      pageSize,
    });
  } catch (error) {
    // console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
