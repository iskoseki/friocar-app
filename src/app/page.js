"use client";

import Carrousel from "./components/Carrousel";
import Testimonials from "./components/Testimonials";
import Cta from "./components/cta";
import SimpleCta from "./components/SimpleCta";
import { PorqueNos } from "./components/porqueNos";

export default function Home() {
  return (
    <>
      <Carrousel />
      <PorqueNos />
      <Cta />
      <Testimonials />
      <SimpleCta />
    </>
  );
}
