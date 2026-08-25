import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { QuemSou } from "@/components/landing/QuemSou";
import { Causas } from "@/components/landing/Causas";
import { Trajetoria } from "@/components/landing/Trajetoria";
import { MateriaisCampanha } from "@/components/landing/MateriaisCampanha";
import { Contato } from "@/components/landing/Contato";
import { Footer } from "@/components/landing/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSou />
        <Causas />
        <Trajetoria />
        <MateriaisCampanha />
        <Contato />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/556239021267"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 w-16 h-16 flex items-center justify-center rounded-full bg-brand-green text-white shadow-[0_14px_34px_rgba(6,60,30,0.4)] hover:bg-[#0E8642] hover:scale-110 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </>
  );
}
