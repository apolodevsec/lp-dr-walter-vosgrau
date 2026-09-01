import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contato() {
  return (
    <section id="contato" className="bg-[#1d9e4a] border-t-[3px] border-[#f5b800] py-14 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-10 flex-wrap">

        {/* Texto */}
        <ScrollReveal animation="slide-right" delay={100} className="flex-1 min-w-[280px]">
          <h2 className="text-[clamp(24px,3vw,34px)] font-bold text-white leading-[1.15] tracking-[-0.5px] max-[720px]:text-[24px]">
            Cuidar das pessoas está no coração.<br />
            <span className="text-[#ffe27a]">E também nas suas mãos.</span>
          </h2>
          <p className="text-[16px] text-white/90 mt-4 leading-[1.55] max-w-[460px]">
            Fale direto com a equipe, acompanhe a caminhada e ajude a levar o
            número <strong className="text-white font-bold">45454</strong> mais longe.
          </p>
        </ScrollReveal>

        {/* Ações */}
        <ScrollReveal animation="slide-left" delay={300} className="flex flex-col gap-3 min-w-[260px] max-[720px]:w-full">
          
          {/* Principal: WhatsApp */}
          <a 
            href="https://wa.me/5562994348092" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[9px] bg-white text-[#1a7a39] text-[16px] font-semibold py-[14px] px-[22px] rounded-[26px] shadow-[0_2px_0_rgba(0,0,0,0.08)] hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition-all duration-150 no-underline"
          >
            <FaWhatsapp className="w-[22px] h-[22px] shrink-0" />
            Falar no WhatsApp
          </a>

          {/* Secundários: redes sociais */}
          <div className="flex gap-3">
            <a 
              href="https://instagram.com/drwalter.vosgrau" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-[9px] text-white text-[14px] font-medium py-[11px] px-[14px] rounded-[26px] border-[1.5px] border-white/40 bg-transparent hover:bg-white/12 hover:border-white transition-all duration-150 no-underline"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="w-[20px] h-[20px] shrink-0">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
            <a 
              href="https://facebook.com/drwaltervosgrau" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-[9px] text-white text-[14px] font-medium py-[11px] px-[14px] rounded-[26px] border-[1.5px] border-white/40 bg-transparent hover:bg-white/12 hover:border-white transition-all duration-150 no-underline"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[20px] h-[20px] shrink-0">
                <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7.5v3H10v8h3z"/>
              </svg>
              Facebook
            </a>
          </div>

          {/* Voluntário */}
          <a 
            href="https://wa.me/5562994348092" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[9px] bg-[#f5b800] text-[#4a3400] text-[14px] font-semibold py-[12px] px-[18px] rounded-[26px] hover:bg-[#ffc61f] transition-all duration-150 no-underline"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-[18px] h-[18px] shrink-0">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>
            </svg>
            Quero ser voluntário
          </a>

        </ScrollReveal>
      </div>
    </section>
  );
}
