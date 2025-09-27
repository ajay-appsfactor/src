import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// safe number parser with fallback
function parseNumber(value, fallback = 0) {
  const num = Number(value);
  return isNaN(num) ? fallback : num;
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json(); 

    const updated = await superAdminDb.payment_terms.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description?.trim() === "" ? null : body.description,
        due_days: parseNumber(body.due_days, 0),
        discount_days:parseNumber(body.discount_days, 0),
        discount_percent: parseNumber(body.discount_percent, 0),
        is_active: Boolean(body.is_active),
      },
    });

    // console.log("updated payment terms:", updated)
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    // console.error(error);
    return NextResponse.json(
      { error: "Failed to update payment terms." },
      { status: 500 }
    );
  }
}

// Delete Currency
export async function DELETE(req, { params }) {
  const { id } = await params;
  try {
    await superAdminDb.payment_terms.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // console.error("Delete payment terms error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete payment terms" },
      { status: 500 }
    );
  }
}
