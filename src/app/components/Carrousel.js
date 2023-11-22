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
import Image from "next/image";
import Btn from "./Btn";
export default function Carrousel({ data }) {
  return (
    <>
      <Swiper
        pagination={{}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mb-12"
      >
        {data.map((x) => {
          return (
            <SwiperSlide key={x.id}>
              <section className="text-gray-600  body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                      {x.title}
                      <br className="hidden lg:inline-block" />
                      readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">
                      Copper mug try-hard pitchfork pour-over freegan heirloom
                      neutra air plant cold-pressed tacos poke beard tote bag.
                      Heirloom echo park mlkshk tote bag selvage hot chicken
                      authentic tumeric truffaut hexagon try-hard chambray.
                    </p>
                    <div className="flex justify-center gap-2">
                      <Btn color={"red"}>Primary</Btn>
                      <Btn color={"gray"}>Second</Btn>
                    </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                      className="object-cover object-center rounded"
                      alt="hero"
                      width={720}
                      height={600}
                      src="/Prueba carrusel 7260 x 600.jpg"
                    />
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
