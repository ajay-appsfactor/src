import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

export async function PATCH(req, { params }) {
  const { id } =await params;
  try {
    const body = await req.json();
    const updated = await superAdminDb.currency.update({
      where: { id },
      data: {
        code: body.code,
        name: body.name,
        symbol: body.symbol,
        is_active: body.is_active,
      },
    });
    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update currency" },
      { status: 500 }
    );
  }
}



// Delete Currency 
export async function DELETE(req, { params }) {
  const { id } =  await params;
  try {
    await superAdminDb.currency.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE currency error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete currency" },
      { status: 500 }
    );
  }
}