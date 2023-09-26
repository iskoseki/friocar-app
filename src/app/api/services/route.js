import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

//Getting all of services
export async function GET() {
  const allServices = await prisma.service.findMany();
  return NextResponse.json(allServices);
}

//POST all of services
export async function POST(request) {
  const { title, description } = await request.json();
  const newService = await prisma.service.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newService);
}
