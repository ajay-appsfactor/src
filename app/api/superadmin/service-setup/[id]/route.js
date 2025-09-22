import { NextResponse } from "next/server";
import { superAdminDb } from "@/lib/db/superadmin";

// Get Single Service
export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const service = await superAdminDb.service.findUnique({
      where: { id: id },
      include: {
        materials: true,
        finishes: true,
      },
    });

    if (!service) {
      return NextResponse.json(
        { error: "Service not found." },
        { status: 404 }
      );
    }

    const formattedService = {
      id: service.id,
      name: service.name,
      exclude_inspection : service.exclude_inspection,
      invoice50 : service.invoice50,
      fob_china : service.fob_china,
      require_deposit_invoice : service.require_deposit_invoice,
      materials: service.materials.map((m) => ({ id: m.id, name: m.name })),
      finishes: service.finishes.map((f) => ({ id: f.id, name: f.name })),
    };

    // console.log("Single service get :", formattedService);
    return NextResponse.json(formattedService, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch service" },
      { status: 500 }
    );
  }
}

// Delete Service
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    if (!id)
      return NextResponse.json(
        { error: "Service id is required." },
        { status: 400 }
      );

    await superAdminDb.service.delete({ where: { id } });

    return NextResponse.json({ message: "Service deleted successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete service" },
      { status: 500 }
    );
  }
}

// Update Service
export async function PATCH(req, { params }) {
  const { id } = await params;

  try {
    const body = await req.json();
    const {
      name,
      materials,
      finishes,
      exclude_inspection,
      invoice50,
      fob_china,
      require_deposit_invoice,
    } = body;

    // Validate input
    if (!name || name.trim() === "") {
      return NextResponse.json(
        { error: "Service name is required" },
        { status: 400 }
      );
    }

    // Update service including checkbox fields
    await superAdminDb.service.update({
      where: { id },
      data: {
        name: name.trim(),
        exclude_inspection: exclude_inspection ?? false,
        invoice50: invoice50 ?? false,
        fob_china: fob_china ?? false,
        require_deposit_invoice: require_deposit_invoice ?? false,
      },
    });

    // Update materials: remove old ones, add new ones
    await superAdminDb.material.deleteMany({ where: { service_id: id } });
    if (materials && materials.length > 0) {
      const materialData = materials.map((m) => ({
        name: m,
        service_id: id,
      }));
      await superAdminDb.material.createMany({ data: materialData });
    }

    // Update finishes: remove old ones, add new ones
    await superAdminDb.finish.deleteMany({ where: { service_id: id } });
    if (finishes && finishes.length > 0) {
      const finishesData = finishes.map((f) => ({
        name: f,
        service_id: id,
      }));
      await superAdminDb.finish.createMany({ data: finishesData });
    }

    return NextResponse.json(
      { message: "Service updated successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to update service" },
      { status: 500 }
    );
  }
}
