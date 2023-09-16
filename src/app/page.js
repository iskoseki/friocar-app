"use client";

import Carrousel from "./components/Carrousel";
import Testimonials from "./components/Testimonials";
import Cta from "./components/cta";
import SimpleCta from "./components/SimpleCta";
import Porquenos from "./components/whyus";

export default function Home() {
  return (
    <>
      <Carrousel />
      <Porquenos />
      <Cta />
      <Testimonials />
      <SimpleCta />
    </>
  );
}
