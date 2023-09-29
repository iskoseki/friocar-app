"use client";

import Carrousel from "./components/Carrousel";
import Testimonials from "./components/Testimonials";
import Cta from "./components/cta";
import SimpleCta from "./components/SimpleCta";
import { Porque } from "./components/Porque";
import LogoBrands from "./components/brands";

export default function Home() {
  return (
    <>
      <Carrousel />
      <Porque />
      <LogoBrands />
      <Cta />

      <Testimonials />
      <SimpleCta />
    </>
  );
}
