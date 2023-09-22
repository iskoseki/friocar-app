"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import DefaultModal from "./DefaultModal";

export default function CarrouselServicios() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-6 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Nuestros Servicios
              </h1>
              <div class="h-1 w-20 bg-red-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Servicios generales de mecánica automotriz, aire acondicionado,
              reparación de tren delantero, electricidad y más.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://ss-static-01.esmsv.com/id/100847/productos/obtenerimagen/?id=3&useDensity=false&width=1280&height=720&tipoEscala"
                  alt="content"
                />
                <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Calefacción
                </h2>
                <p class="leading-relaxed text-base">
                  Reparamos calefacción en vehículos y revisamos fallas por
                  computadora.
                </p>

                <DefaultModal />
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://ss-static-01.esmsv.com/id/100847/productos/obtenerimagen/?id=54&useDensity=true&width=2880&height=1580&tipoEscala"
                  alt="content"
                />
                <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Tren delantero
                </h2>
                <p class="leading-relaxed text-base">
                  Realizamos una revisión, diagnóstico y reparación del tren
                  delantero de tu vehículo.
                </p>
                <DefaultModal />
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://ss-static-01.esmsv.com/id/100847/productos/obtenerimagen/?id=5&useDensity=true&width=2880&height=1580&tipoEscala"
                  alt="content"
                />
                <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Electricidad{" "}
                </h2>
                <p class="leading-relaxed text-base">
                  Contamos con personal especializado y la tecnología apropiada.
                </p>
                <DefaultModal />
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://ss-static-01.esmsv.com/id/100847/productos/obtenerimagen/?id=50&useDensity=true&width=2880&height=1580&tipoEscala"
                  alt="content"
                />
                <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Alza cristales
                </h2>
                <p class="leading-relaxed text-base">
                  Reparación de sistema levanta cristales de vehiculos.
                </p>
                <DefaultModal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
