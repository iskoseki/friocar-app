import { prisma } from "@/libs/prisma";

// Find all Services with prisma instances
export async function loadAllServices() {
  const res = await prisma.service.findMany();
  return res;
}
