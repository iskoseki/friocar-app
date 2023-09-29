import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import Image from "next/image";
import Carrousel from "@/app/components/Carrousel";
import Cta from "@/app/components/SimpleCta";
import Btn from "@/app/components/Btn";
import { loadAllServices } from "@/app/utils/getAllServices";

// async function loadAllServices() {
//   const res = await prisma.service.findMany();
//   return res;
// }
const data = await loadAllServices();

export default function Page({ params }) {
  async function loadServices() {
    try {
      const serviceById = await prisma.service.findUnique({
        where: {
          id: Number(params.id),
        },
      });
      return (
        <section
          key={serviceById.id}
          className="text-gray-600 body-font overflow-hidden"
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={serviceById.cover}
                width={400}
                height={400}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {serviceById.title}
                </h1>
                <p className="leading-relaxed">{serviceById.description}</p>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    $58.00
                  </span>
                  <Btn color="red">Hola</Btn>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center -mb-4">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Ver mas servicios 👇
            </h1>
          </div>
          <Carrousel data={data} />
          <Cta />
        </section>
      );
    } catch (error) {
      return NextResponse.json(error.message);
    }
  }
  return loadServices();
}
