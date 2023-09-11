import Footer from "./Footer";
import Navigation from "./Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Friocar Full Service",
  description: "Friocar Full Service. Calefacción automotriz en Rosario",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
