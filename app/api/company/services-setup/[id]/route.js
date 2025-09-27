import { NextResponse } from "next/server";
import { getTenantDbFromHeaders } from "@/lib/db/getTenantDbFromRequest";

// Get Single Service
export async function GET(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Service ID is required." }, { status: 400 });
    }

    const {tenantDb} = await getTenantDbFromHeaders();
    const service = await tenantDb.companyService.findUnique({
      where: { id },
      include: {
        materials: true,
        finishes: true,
      },
    });

    if (!service) {
      return NextResponse.json({ error: "Service not found." }, { status: 404 });
    }

    const formattedService = {
      id: service.id,
      name: service.name,
      exclude_inspection: service.exclude_inspection,
      invoice50: service.invoice50,
      fob_china: service.fob_china,
      require_deposit_invoice: service.require_deposit_invoice,
      materials: service.materials.map(m => ({ id: m.id, name: m.name })),
      finishes: service.finishes.map(f => ({ id: f.id, name: f.name })),
    };

    return NextResponse.json(formattedService, { status: 200 });
  } catch (error) {
    // console.error(error);
    return NextResponse.json({ error: "Failed to fetch service." }, { status: 500 });
  }
}

// Delete Service
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Service ID is required." }, { status: 400 });
    }

    const {tenantDb} = await getTenantDbFromHeaders();
    await tenantDb.companyService.delete({ where: { id } });

    return NextResponse.json({ message: "Service deleted successfully." }, { status: 200 });
  } catch (error) {
    // console.error(error);
    return NextResponse.json({ error: "Failed to delete service." }, { status: 500 });
  }
}

// Update Service
export async function PATCH(req, { params }) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Service ID is required." }, { status: 400 });
    }

    const body = await req.json();
    const {
      name,
      materials = [],
      finishes = [],
      exclude_inspection = false,
      invoice50 = false,
      fob_china = false,
      require_deposit_invoice = false,
    } = body;

    if (!name || name.trim() === "") {
      return NextResponse.json({ error: "Service name is required." }, { status: 400 });
    }

    const {tenantDb} = await getTenantDbFromHeaders();

    // Update main service fields
    await tenantDb.companyService.update({
      where: { id },
      data: {
        name: name.trim(),
        exclude_inspection,
        invoice50,
        fob_china,
        require_deposit_invoice,
      },
    });

    // Replace materials
    await tenantDb.companyMaterial.deleteMany({ where: { service_id: id } });
    if (materials.length > 0) {
      await tenantDb.companyMaterial.createMany({
        data: materials.map(m => ({ name: m, service_id: id })),
      });
    }

    // Replace finishes
    await tenantDb.companyFinish.deleteMany({ where: { service_id: id } });
    if (finishes.length > 0) {
      await tenantDb.companyFinish.createMany({
        data: finishes.map(f => ({ name: f, service_id: id })),
      });
    }

    return NextResponse.json({ message: "Service updated successfully." }, { status: 200 });
  } catch (error) {
    // console.error(error);
    return NextResponse.json({ error: "Failed to update service" }, { status: 500 });
  }
}
