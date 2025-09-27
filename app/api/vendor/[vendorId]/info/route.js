import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/hashPassword";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  try {
    const {tenantDb} = await getTenantDbFromHeaders();
    const { vendorId } = await params;
    const body = await req.json();

    const {
      first_name,
      last_name,
      email,
      phone = "",
      vendor_type = "",
      website = "",
      password = "",
    } = body;

    // normalize email
    const normalizedEmail = email.toLowerCase().trim();

    // validate required
    if (!first_name || !last_name || !normalizedEmail || !vendor_type) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // find vendor with linked user
    const vendor = await tenantDb.vendor.findUnique({
      where: { id: vendorId },
      include: { user: true },
    });

    if (!vendor) {
      return NextResponse.json({ error: "Vendor not found." }, { status: 404 });
    }

    // check email conflicts if changed
    if (normalizedEmail !== vendor.email.toLowerCase()) {
      // Vendors (excluding self)
      const existingVendor = await tenantDb.vendor.findFirst({
        where: {
          email: { equals: normalizedEmail, mode: "insensitive" },
          NOT: { id: vendorId },
        },
      });
      if (existingVendor) {
        return NextResponse.json(
          { error: "Email already exists in Vendors." },
          { status: 400 }
        );
      }

      // Customers
      const existingCustomer = await tenantDb.customer.findFirst({
        where: {
          email: { equals: normalizedEmail, mode: "insensitive" },
        },
      });
      if (existingCustomer) {
        return NextResponse.json(
          { error: "Email already exists in Customers." },
          { status: 400 }
        );
      }

      // Users (excluding linked user)
      const existingUser = await tenantDb.user.findFirst({
        where: {
          email: { equals: normalizedEmail, mode: "insensitive" },
          NOT: { id: vendor.user_id },
        },
      });
      if (existingUser) {
        return NextResponse.json(
          { error: "Email already exists in Users." },
          { status: 400 }
        );
      }
    }

    const vendor_name = `${first_name.trim()} ${last_name.trim()}`;

    // prepare vendor update
    const updateVendorData = {
      vendor_name,
      first_name,
      last_name,
      email: normalizedEmail,
      phone,
      website,
      vendor_type,
    };

    // prepare user update
    const updateUserData = {
      first_name,
      last_name,
      email: normalizedEmail,
      phone,
    };

    // handle password update
    if (password && password.trim() !== "") {
      const hashedPassword = await hashPassword(password);
      updateVendorData.password = hashedPassword;
      updateUserData.password = hashedPassword;
    }

    // update vendor
    await tenantDb.vendor.update({
      where: { id: vendorId },
      data: updateVendorData,
    });

    // update linked user
    if (vendor.user_id) {
      await tenantDb.user.update({
        where: { id: vendor.user_id },
        data: updateUserData,
      });
    }

    return NextResponse.json(
      { message: "Vendor successfully updated." },
      { status: 200 }
    );
  } catch (error) {
    // console.error("Update error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}


