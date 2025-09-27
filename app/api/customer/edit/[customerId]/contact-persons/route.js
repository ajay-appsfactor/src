import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// Post : Create Contact Person
export async function POST(req, { params }) {
  try {
   const { tenantDb } = await getTenantDbFromHeaders();
    const body = await req.json();
    const { customerId } = await params;
    let {
      contact_name,
      contact_email,
      contact_phone,
      job_title,
      is_primary,
    } = body;

     // Convert email to lowercase
    if (contact_email) {
      contact_email = contact_email.toLowerCase();
    }


    // Step 1: Check if customer exists
    const existingCustomer = await tenantDb.customer.findUnique({
      where: { id: customerId },
    });

    if (!existingCustomer) {
      return NextResponse.json(
        { error: "Customer not found." },
        { status: 404 }
      );
    }

    // Step 2: Check existing contact persons for this customer
    const existingContacts = await tenantDb.customerContact.findMany({
      where: { customer_id: customerId },
    });

    let makePrimary = false;

    if (existingContacts.length === 0) {
      // First contact → automatically primary
      makePrimary = true;
    } else if (is_primary === true) {
      await tenantDb.customerContact.updateMany({
        where: {
          customer_id: customerId,
          is_primary: true,
        },
        data: { is_primary: false },
      });
      makePrimary = true;
    }

    // Step 3: Create new contact
    await tenantDb.customerContact.create({
      data: {
        customer_id: customerId,
        customer_name: existingCustomer.customer_name,
        contact_name,
        contact_email,
        contact_phone:contact_phone?.trim() || null,
        job_title :job_title?.trim() || null,
        is_primary: makePrimary,
      },
    });

    return NextResponse.json({ status: 201 });
  } catch (error) {
    // console.error("Error in POST /contact-person:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get All  Contact
export async function GET(req, { params }) {
  const { customerId } = await params;
  // const prisma = await getTenantDbFromHeaders();
  const { tenantDb } = await getTenantDbFromHeaders();
  const checkCustomer = await tenantDb.customer.findUnique({
    where: { id: customerId },
    select: { id: true, customer_name: true },
  });

  if (!checkCustomer)
    return NextResponse.json({ error: "Customer not found" }, { status: 404 });

  const data = await tenantDb.customerContact.findMany({
    orderBy: { created_at: "desc" },
  });

  // console.log("customer backend data :", data);

  return NextResponse.json(data);
}
