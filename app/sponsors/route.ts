import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const sponsors = await prisma.sponsor.findMany({
    where: { active: true },
    orderBy: { tier: "asc" },
  });
  return NextResponse.json(sponsors);
}

export async function POST(req: Request) {
  const body = await req.json();
  const sponsor = await prisma.sponsor.create({
    data: body,
  });
  return NextResponse.json(sponsor);
}
