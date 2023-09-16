import Link from "next/link";
import Cta from "../components/SimpleCta";
import Testimonials from "../components/Testimonials";

export const Abouthead = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRhbGxlciUyMG1lY2FuaWNvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60)] bg-cover bg-center w-full bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl  sm:text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Quienes somos
            <strong className="block font-extrabold text-rose-700">
              FRIOCAR Full Service
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Taller integral del automotor. Servicios generales de mecánica
            automotriz, aire acondicionado, reparación de tren delantero,
            electricidad y más.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Nuestros Servicios
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Escribinos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

function About() {
  return (
    <>
      <Abouthead />
      <Testimonials />
      <Cta />
    </>
  );
}
export default About;
