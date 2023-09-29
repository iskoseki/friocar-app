"use client";
import React from "react";
import { Button } from "flowbite-react";

async function loadServices() {
  const res = await fetch("http://localhost:3000/api/services");
  const x = await res.json();
  return x;
}
export default async function CatalogServices() {
  const data = await loadServices();
  return (
    <>
      <section className="text-gray-600 body-font" suppressHydrationWarning>
        <div className="container px-6 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Nuestros Servicios
              </h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Servicios generales de mecánica automotriz, aire acondicionado,
              reparación de tren delantero, electricidad y más.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {data.map((x) => {
              return (
                <div
                  key={x.id}
                  className=" xl:w-1/3   md:w-1/2  p-4 hover:scale-105 transition-all"
                >
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={x.cover}
                      alt="content"
                    />
                    <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                      SERVICIO DE
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      {x.title}
                    </h2>
                    <p className="leading-relaxed text-base">{x.description}</p>
                    <Button
                      size="xs"
                      href={`/servicios/${x.id}`}
                      gradientMonochrome="failure"
                      className="mt-4 "
                    >
                      Ver mas
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
