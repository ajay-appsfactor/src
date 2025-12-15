import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function GET(req, { params }) {
  try {
    const { customerId } = await params;

    if (!customerId) {
      return NextResponse.json(
        { error: "Customer ID is required" },
        { status: 400 }
      );
    }
    const { tenantDb } = await getTenantDbFromHeaders();

    //  customer with addressess
    const customer = await tenantDb.customer.findUnique({
      where: { user_id: customerId },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        company_name: true,
        phone: true,
        addresses: {
          select: {
            id: true,
            billing_address: true,
            billing_address2: true,
            billing_city: true,
            billing_state: true,
            billing_zip: true,
            billing_country: true,

            shipping_address: true,
            shipping_address2: true,
            shipping_city: true,
            shipping_state: true,
            shipping_zip: true,
            shipping_country: true,

            is_default: true,
          },
        },
      },
    });

    if (!customer) {
      return NextResponse.json(
        { error: "Customer not found for this user" },
        { status: 404 }
      );
    }
    // console.log("Customer data :", customer);

    return NextResponse.json({ customer }, { status: 200 });
  } catch (err) {
    // console.error("API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { customerId } = await params;
    if (!customerId) {
      return NextResponse.json(
        { error: "Customer ID is required" },
        { status: 400 }
      );
    }

    const body = await req.json();
    // console.log("Update Request Body:", body);
    const { customer, address } = body;
    // Get tenant DB
    const { tenantDb } = await getTenantDbFromHeaders();

    // Fetch existing user
    const existingUser = await tenantDb.user.findUnique({
      where: { id: customerId },
    });
    if (!existingUser) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    const { first_name, last_name, email, company_name, phone } = customer;

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

    // Full replace update
    await tenantDb.user.update({
      where: { id: customerId },
      data: {
        first_name: first_name.trim(),
        last_name: last_name?.trim() || null,
        email: normalizedEmail,
        phone: phone?.trim() || null,
        updated_at: new Date(),
      },
    });

    const customerRecord = await tenantDb.customer.findUnique({
      where: { user_id: customerId },
      select: { id: true },
    });

    if (!customerRecord) {
      return NextResponse.json(
        { error: "Customer not found" },
        { status: 404 }
      );
    }
    // Step 1: Update Customer Basic Info
    const updatedCustomer = await tenantDb.customer.update({
      where: { id: customerRecord.id },
      data: {
        first_name,
        last_name,
        customer_name: first_name + " " + last_name,
        email: normalizedEmail,
        company_name,
        phone,
        updated_at: new Date(),
      },
      select: {
        first_name: true,
        last_name: true,
        email: true,
        company_name: true,
        phone: true,
      },
    });

    // Step 2: Handle address update
    let addressResult;

    if (address) {
      // If address data is provided with an ID, update it
      if (address.id) {
        // Check if the address belongs to this customer
        const existingAddress = await tenantDb.customerAddress.findFirst({
          where: {
            id: address.id,
            customer_id: customerRecord.id,
          },
        });

        if (!existingAddress) {
          return NextResponse.json(
            { error: "Address not found or doesn't belong to this customer" },
            { status: 404 }
          );
        }

        // Update existing address
        addressResult = await tenantDb.customerAddress.update({
          where: { id: address.id },
          data: {
            billing_address:
              address.billing_address || existingAddress.billing_address,
            billing_address2:
              address.billing_address2 || existingAddress.billing_address2,
            billing_city: address.billing_city || existingAddress.billing_city,
            billing_state:
              address.billing_state || existingAddress.billing_state,
            billing_zip: address.billing_zip || existingAddress.billing_zip,
            billing_country:
              address.billing_country || existingAddress.billing_country,
            shipping_address:
              address.shipping_address || existingAddress.shipping_address,
            shipping_address2:
              address.shipping_address2 || existingAddress.shipping_address2,
            shipping_city:
              address.shipping_city || existingAddress.shipping_city,
            shipping_state:
              address.shipping_state || existingAddress.shipping_state,
            shipping_zip: address.shipping_zip || existingAddress.shipping_zip,
            shipping_country:
              address.shipping_country || existingAddress.shipping_country,
            is_default:
              address.is_default !== undefined
                ? address.is_default
                : existingAddress.is_default,
            updated_at: new Date(),
          },
        });
      } else {
        // If no address ID provided but address data exists, create new
        addressResult = await tenantDb.customerAddress.create({
          data: {
            customer_id: customerRecord.id,
            billing_address: address.billing_address || "",
            billing_address2: address.billing_address2 || "",
            billing_city: address.billing_city || "",
            billing_state: address.billing_state || "",
            billing_zip: address.billing_zip || "",
            billing_country: address.billing_country || "",
            shipping_address: address.shipping_address || "",
            shipping_address2: address.shipping_address2 || "",
            shipping_city: address.shipping_city || "",
            shipping_state: address.shipping_state || "",
            shipping_zip: address.shipping_zip || "",
            shipping_country: address.shipping_country || "",
            is_default: address.is_default || false,
            created_at: new Date(),
            updated_at: new Date(),
          },
        });
      }
    }
    // console.log("updated customer :", updatedCustomer);

    return NextResponse.json(
      {
        message: "Account updated successfully",
        customer: updatedCustomer,
        // address: addressResult,
      },
      { status: 200 }
    );
  } catch (err) {
    // console.error("Update Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
