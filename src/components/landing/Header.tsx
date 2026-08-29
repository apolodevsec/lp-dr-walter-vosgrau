"use client";

import { useState } from "react";
import Image from "next/image";
import perfilImg from "@/img/perfil.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("quem-sou");

  return (
    <nav className="sticky top-0 z-[1000] bg-[#1a3fb0] border-b-[3px] border-[#f5b800]">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Marca: foto de perfil + nome */}
        <a href="#" className="flex items-center gap-2 min-[480px]:gap-[11px] no-underline shrink-0 min-w-0">
          <Image 
            src={perfilImg} 
            alt="Dr. Walter Vosgrau"
            width={52}
            height={52}
            className="w-[42px] h-[42px] min-[480px]:w-[52px] min-[480px]:h-[52px] shrink-0 rounded-full border-2 border-[#f5b800] object-cover block bg-[#2e5bd6]"
          />
          <span className="leading-tight min-[480px]:leading-[1.50] flex flex-col min-w-0">
            <span className="text-[16px] min-[480px]:text-[21px] font-semibold text-white truncate">Dr. Walter Vosgrau</span>
            <span className="text-[12px] min-[480px]:text-[16px] font-medium text-[#f5b800] truncate">Candidato a Deputado Estadual · 45454</span>
          </span>
        </a>

        {/* Botão hambúrguer (mobile) */}
        <button 
          className="min-[861px]:hidden bg-transparent border-none text-white cursor-pointer p-1.5 flex items-center justify-center"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          aria-controls="menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-[26px] h-[26px]">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6"/>
                <line x1="4" y1="12" x2="20" y2="12"/>
                <line x1="4" y1="18" x2="20" y2="18"/>
              </>
            )}
          </svg>
        </button>

        {/* Links + botão */}
        <div 
          id="menu"
          className={`${isOpen ? 'flex' : 'hidden'} min-[861px]:flex absolute min-[861px]:relative top-full min-[861px]:top-auto left-0 right-0 flex-col min-[861px]:flex-row min-[861px]:items-center gap-0 min-[861px]:gap-6 bg-[#16368f] min-[861px]:bg-transparent border-b-[3px] border-[#f5b800] min-[861px]:border-none px-6 pb-5 min-[861px]:p-0`}
        >
          <ul className="flex flex-col min-[861px]:flex-row min-[861px]:items-center gap-0 min-[861px]:gap-[26px] list-none w-full min-[861px]:w-auto m-0 p-0">
            <li className="w-full min-[861px]:w-auto">
              <a 
                href="#quem-sou" 
                onClick={() => { setIsOpen(false); setActiveSection("quem-sou"); }}
                className={`block relative text-[14px] no-underline py-3.5 min-[861px]:py-1 border-b border-white/10 min-[861px]:border-none transition-colors group ${activeSection === "quem-sou" ? "text-white" : "text-white/80 hover:text-white"}`}
              >
                Quem sou
                <span className={`hidden min-[861px]:block absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#f5b800] origin-left transition-transform duration-150 ${activeSection === "quem-sou" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </a>
            </li>
            <li className="w-full min-[861px]:w-auto">
              <a 
                href="#causas" 
                onClick={() => { setIsOpen(false); setActiveSection("causas"); }}
                className={`block relative text-[14px] no-underline py-3.5 min-[861px]:py-1 border-b border-white/10 min-[861px]:border-none transition-colors group ${activeSection === "causas" ? "text-white" : "text-white/80 hover:text-white"}`}
              >
                Causas e propostas
                <span className={`hidden min-[861px]:block absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#f5b800] origin-left transition-transform duration-150 ${activeSection === "causas" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </a>
            </li>
            <li className="w-full min-[861px]:w-auto">
              <a 
                href="#contato" 
                onClick={() => { setIsOpen(false); setActiveSection("contato"); }}
                className={`block relative text-[14px] no-underline py-3.5 min-[861px]:py-1 border-b border-white/10 min-[861px]:border-none transition-colors group ${activeSection === "contato" ? "text-white" : "text-white/80 hover:text-white"}`}
              >
                Contato
                <span className={`hidden min-[861px]:block absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#f5b800] origin-left transition-transform duration-150 ${activeSection === "contato" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </a>
            </li>
          </ul>

          <a 
            href="#apoiar" 
            onClick={() => setIsOpen(false)}
            className="mt-4 min-[861px]:mt-0 inline-flex items-center justify-center gap-[7px] bg-[#22a559] hover:bg-[#1c8f4c] text-white text-[14px] font-semibold py-[9px] px-[18px] rounded-[22px] no-underline transition-colors w-full min-[861px]:w-auto"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5 8.5 5 10 6 12 8c2-2 3.5-3 5.5-3C21 5 23.5 8.5 21.5 12.5 19 16.65 12 21 12 21z"/>
            </svg>
            Apoiar · 45454
          </a>
        </div>
      </div>
    </nav>
  );
}
