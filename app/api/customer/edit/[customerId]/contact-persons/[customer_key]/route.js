import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  try {
    const body = await req.json();
    const { customer_key } = await params;

    let { contact_name, contact_email, contact_phone, job_title, is_primary } =
      body;

    // Convert email to lowercase
    if (contact_email) {
      contact_email = contact_email.toLowerCase();
    }

    const { tenantDb } = await getTenantDbFromHeaders();

    //  Get existing contact
    const existingContact = await tenantDb.customerContact.findUnique({
      where: { id: customer_key },
    });

    // console.log("Existing Data Contact :", existingContact)
    if (!existingContact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    //  Prevent unsetting last primary contact
    if (is_primary === false) {
      const otherPrimary = await tenantDb.customerContact.findFirst({
        where: {
          customer_id: existingContact.customer_id,
          is_primary: true,
          NOT: { id: customer_key },
        },
      });

      if (!otherPrimary) {
        return NextResponse.json(
          { error: "At least one primary contact must remain." },
          { status: 400 }
        );
      }
    }

    //  If making this primary, unset others
    if (is_primary === true) {
      await tenantDb.customerContact.updateMany({
        where: {
          customer_id: existingContact.customer_id,
          is_primary: true,
          NOT: { id: customer_key },
        },
        data: { is_primary: false },
      });
    }

    // Step 4: Update contact
    const updatedContact = await tenantDb.customerContact.update({
      where: { id: customer_key },
      data: {
        contact_name,
        contact_email,
        contact_phone: contact_phone?.trim() || null,
        job_title: job_title?.trim() || null,
        is_primary: is_primary === true,
      },
    });

    return NextResponse.json(updatedContact);
  } catch (error) {
    // console.error("Error in PUT /contact-person:", error);
    return NextResponse.json(
      { error: "Failed to update contact person" },
      { status: 500 }
    );
  }
}
