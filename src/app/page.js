import Carrousel from "./components/Carrousel";
import Testimonials from "./components/Testimonials";
import Cta from "./components/cta";
import SimpleCta from "./components/SimpleCta";
import { Porque } from "./components/Porque";
import LogoBrands from "./components/brands";
import { loadAllServices } from "@/app/utils/getAllServices";

export default async function Home({}) {
  const data = await loadAllServices();
  return (
    <>
      <Carrousel data={data} />
      <Porque />
      <LogoBrands />
      <Cta />

      <Testimonials />
      <SimpleCta />
    </>
  );
}
