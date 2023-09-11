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

export default function Carrousel() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Servicio
                  <br class="hidden lg:inline-block" />
                  Calefacción{" "}
                </h1>
                <p class="mb-8 leading-relaxed">
                  Reparamos todo tipo de calefacción en vehículos. Revisamos
                  fallas por computadora. Contamos con amplia experiencia.
                </p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                    Button
                  </button>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Direcciones
                  <br class="hidden lg:inline-block" />
                  hidráulicas
                </h1>
                <p class="mb-8 leading-relaxed">
                  Reparación de direcciones hidráulicas en vehículos de toda
                  gama.
                </p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                    Button
                  </button>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  Servicio de
                  <br class="hidden lg:inline-block" />
                  Tren delantero
                </h1>
                <p class="mb-8 leading-relaxed">
                  Realizamos una revisión y diagnóstico del tren delantero de tu
                  vehículo, para luego desarrollar el trabajo de reparación en
                  forma certera.
                </p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                    Button
                  </button>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}