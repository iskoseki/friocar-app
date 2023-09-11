"use client";

import Carrousel from "./components/Carrousel";
import Testimonials from "./components/Testimonials";
import Cta from "./components/cta";
import SimpleCta from "./components/SimpleCta";

export default function Home() {
  return (
    <div className="pt-[89px]">
      <Carrousel />
      <Cta />
      <Testimonials />
      <SimpleCta />
    </div>
  );
}
