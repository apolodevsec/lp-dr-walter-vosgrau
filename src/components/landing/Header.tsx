import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import perfilImg from "@/img/perfil.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-blue border-b-[7px] border-[#FFC814] shadow-[0_2px_18px_rgba(16,35,63,0.08)]">
      <div className="max-w-[1240px] mx-auto px-6 py-3.5 flex items-center gap-7 flex-wrap justify-between xl:justify-start">
        <a href="#topo" className="flex items-center gap-3.5 flex-shrink-0">
          <Image
            src={perfilImg}
            alt="Dr. Walter Vosgrau"
            width={100}
            height={100}
            className="w-[60px] h-[60px] rounded-full object-cover border-4 border-[#FFC814] shrink-0"
          />
          <Image
            src="/assets/8c397e14-7a09-4da8-97d9-cbbc6be636ac.png"
            alt="Dr. Walter Vosgrau"
            width={120}
            height={40}
            className="w-auto h-10"
          />
        </a>
        <nav className="hidden xl:flex items-center gap-6 ml-auto text-sm font-bold tracking-[0.04em] uppercase">
          <a href="#quem-sou" className="text-white/90 hover:text-[#FFC814] transition-colors">
            Quem Sou
          </a>
          <a href="#causas" className="text-white/90 hover:text-[#FFC814] transition-colors">
            Causas e Propostas
          </a>
          <a href="#contato" className="text-white/90 hover:text-[#FFC814] transition-colors">
            Contato
          </a>
        </nav>
        <div className="flex items-center gap-2.5 ml-auto xl:ml-0">
          <a
            href="https://instagram.com/drwalter.vosgrau"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[38px] h-[38px] rounded-xl bg-[#EEF3FB] text-[#0A3A8B] flex items-center justify-center text-xs font-extrabold hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white transition-all"
            title="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/556239021267"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[38px] h-[38px] rounded-xl bg-[#EEF3FB] text-[#0A3A8B] flex items-center justify-center text-xs font-extrabold hover:bg-brand-green hover:text-white transition-colors"
            title="WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/556239021267"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-[#FFC814] text-white text-sm font-extrabold tracking-[0.02em] whitespace-nowrap hover:bg-[#E5B70F] hover:border-[#E5B70F] transition-all duration-300"
          >
            APOIAR
          </a>
        </div>
      </div>
    </header>
  );
}
