import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/hashPassword";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

export async function PUT(req, { params }) {
  const { customerId } = await params;
  const body = await req.json();

  const tenantDb = await getTenantDbFromHeaders();

  const {
    first_name,
    last_name,
    email,
    company_name = "",
    phone = "",
    type = "",
    website = "",
    notes = "",
    password = "",
  } = body;

  // normalize email
  const normalizedEmail = email.toLowerCase().trim();

  try {
    const customer = await tenantDb.customer.findUnique({
      where: { id: customerId },
      include: { user: true },
    });

    if (!customer) {
      return NextResponse.json(
        { error: "Customer not found." },
        { status: 404 }
      );
    }

    // Cross-check email if changed
    if (normalizedEmail !== customer.email.toLowerCase()) {
      // Vendor check
      const vendorWithSameEmail = await tenantDb.vendor.findFirst({
        where: { email: { equals: normalizedEmail, mode: "insensitive" } },
      });

      if (vendorWithSameEmail) {
        return NextResponse.json(
          { error: "Email already exists in Vendors." },
          { status: 400 }
        );
      }

      // Customer check (ignore current customer)
      const anotherCustomer = await tenantDb.customer.findFirst({
        where: {
          email: { equals: normalizedEmail, mode: "insensitive" },
          NOT: { id: customerId },
        },
      });

      if (anotherCustomer) {
        return NextResponse.json(
          { error: "Email already exists in Customers." },
          { status: 400 }
        );
      }

      // User check (ignore current user)
      const userWithSameEmail = await tenantDb.user.findFirst({
        where: {
          email: { equals: normalizedEmail, mode: "insensitive" },
          NOT: { id: customer.user_id },
        },
      });

      if (userWithSameEmail) {
        return NextResponse.json(
          { error: "Email already exists in Users." },
          { status: 400 }
        );
      }
    }

    const name = `${first_name.trim()} ${last_name.trim()}`;

    // prepare customer update
    const updateCustomerData = {
      customer_name: name,
      first_name,
      last_name,
      email: normalizedEmail,
      company_name,
      phone,
      website,
      type,
      notes,
    };

    // prepare user update
    const updateUserData = {
      first_name,
      last_name,
      email: normalizedEmail,
      phone,
    };

    if (password && password.trim() !== "") {
      const hashedPassword = await hashPassword(password);
      updateCustomerData.password = hashedPassword;
      updateUserData.password = hashedPassword;
    }

    // update customer
    await tenantDb.customer.update({
      where: { id: customerId },
      data: updateCustomerData,
    });

    // update user
    await tenantDb.user.update({
      where: { id: customer.user_id },
      data: updateUserData,
    });

    return NextResponse.json(
      { message: "Customer successfully updated." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

// export async function PUT(req, { params }) {
//   const { customerId } = await params;
//   const body = await req.json();

//   const tenantDb = await getTenantDbFromHeaders();

//   const {
//     first_name,
//     last_name,
//     email,
//     company_name = "",
//     phone = "",
//     type = "",
//     website = "",
//     notes = "",
//     password = "",
//   } = body;

//   try {
//     const customer = await tenantDb.customer.findUnique({
//       where: { id: customerId },
//       include: { user: true },
//     });

//     if (!customer) {
//       return NextResponse.json(
//         { error: "Customer not found." },
//         { status: 404 }
//       );
//     }

//     // Cross-check email in Vendors
//     if (email !== customer.email) {
//       const vendorWithSameEmail = await tenantDb.vendor.findUnique({
//         where: { email },
//       });

//       if (vendorWithSameEmail) {
//         return NextResponse.json(
//           { error: "Email already exists in Vendors." },
//           { status: 400 }
//         );
//       }

//       // Cross-check email in Customers
//       const anotherCustomer = await tenantDb.customer.findUnique({
//         where: { email },
//       });

//       if (anotherCustomer) {
//         return NextResponse.json(
//           { error: "Email already exists in Customers." },
//           { status: 400 }
//         );
//       }

//       // Cross-check email in Users
//       const userWithSameEmail = await tenantDb.user.findUnique({
//         where: { email },
//       });

//       if (userWithSameEmail) {
//         return NextResponse.json(
//           { error: "Email already exists in Users." },
//           { status: 400 }
//         );
//       }
//     }

//     const name = `${first_name.trim()} ${last_name.trim()}`;

//     // prepare customer update
//     const updateCustomerData = {
//       customer_name: name,
//       first_name,
//       last_name,
//       email,
//       company_name,
//       phone,
//       website,
//       type,
//       notes,
//     };

//     // prepare user update
//     const updateUserData = {
//       first_name,
//       last_name,
//       email,
//       phone,
//     };

//     if (password && password.trim() !== "") {
//       // Hash password
//       const hashedPassword = await hashPassword(password);
//       updateCustomerData.password = hashedPassword;
//       updateUserData.password = hashedPassword;
//     }

//     // update customer
//     await tenantDb.customer.update({
//       where: { id: customerId },
//       data: updateCustomerData,
//     });

//     // update user
//     await tenantDb.user.update({
//       where: { id: customer.user_id },
//       data: updateUserData,
//     });

//     return NextResponse.json(
//       { message: "Customer successfully updated." },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Update error:", error);
//     return NextResponse.json(
//       { error: "Something went wrong." },
//       { status: 500 }
//     );
//   }
// }
