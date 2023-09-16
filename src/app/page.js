"use client";

import Carrousel from "./components/Carrousel";
import Testimonials from "./components/Testimonials";
import Cta from "./components/cta";
import SimpleCta from "./components/SimpleCta";
import { Porque } from "./components/Porque";

export default function Home() {
  return (
    <>
      <Carrousel />
      <Porque />
      <Cta />
      <Testimonials />
      <SimpleCta />
    </>
  );
}
