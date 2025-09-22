import { NextResponse } from 'next/server';
import { superAdminDb } from '@/lib/db/superadmin';

export async function POST(req) {
  const body = await req.json();
  const { subdomain } = body;
  // console.log("sub_domain",body)

  if (!subdomain) {
    return NextResponse.json({ error: 'Subdomain is required' }, { status: 400 });
  }

  try {
    const company = await superAdminDb.company.findUnique({
      where: { sub_domain : subdomain },
    });

    if (!company) {
      return NextResponse.json({ error: 'Company does not exist' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error checking company:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
