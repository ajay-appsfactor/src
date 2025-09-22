import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const updated = await superAdminDb.payment_terms.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description,
        due_days: body.due_days,
        discount_days :body.discount_days,
        discount_percent:body.discount_percent,
        is_active: body.is_active,
      },
    });
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update payment terms" },
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
    console.error("Delete payment terms error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete payment terms" },
      { status: 500 }
    );
  }
}
