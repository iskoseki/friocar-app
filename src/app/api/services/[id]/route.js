import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const serviceById = await prisma.service.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(serviceById);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function PUT(request, { params }) {
  const data = await request.json(); //get request data
  const updatedService = prisma.service.update({
    where: {
      id: Number(params.id),
    },
    data,
  });
  return NextResponse.json(updatedService);
}

export async function DELETE(request, { params }) {
  try {
    const removeService = await prisma.service.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(removeService);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
