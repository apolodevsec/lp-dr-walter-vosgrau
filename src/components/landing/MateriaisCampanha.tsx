"use client";

import { useState } from "react";
import { Download, Image as ImageIcon, Music, Sticker, FileText, Shirt } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JinglesModal } from "@/components/ui/JinglesModal";
import { SantinhosModal } from "@/components/ui/SantinhosModal";
import { AdesivosModal } from "@/components/ui/AdesivosModal";

export function MateriaisCampanha() {
  const [isJinglesModalOpen, setIsJinglesModalOpen] = useState(false);
  const [isSantinhosModalOpen, setIsSantinhosModalOpen] = useState(false);
  const [isAdesivosModalOpen, setIsAdesivosModalOpen] = useState(false);

  const materiais = [
    {
      id: "santinhos",
      title: "Santinhos",
      description: "Compartilhe nossas propostas com amigos e familiares.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-brand-blue",
      href: "#",
    },
    {
      id: "fotos",
      title: "Fotos de Perfil",
      description: "Use em suas redes sociais e mostre seu apoio.",
      icon: <ImageIcon className="w-6 h-6" />,
      color: "bg-brand-green",
      href: "#",
    },
    {
      id: "jingles",
      title: "Jingles",
      isAi: true,
      description: "Baixe as músicas da nossa campanha e cante junto.",
      icon: <Music className="w-6 h-6" />,
      color: "bg-brand-yellow",
      textClass: "text-brand-dark",
      href: "#",
    },
    {
      id: "adesivos",
      title: "Adesivos",
      description: "Cole no carro ou distribua para seus contatos.",
      icon: <Sticker className="w-6 h-6" />,
      color: "bg-[#0B5FD8]",
      href: "#",
    },
    {
      id: "camiseta",
      title: "Camiseta",
      description: "Arte da estampa da camiseta oficial pronta para impressão.",
      icon: <Shirt className="w-6 h-6" />,
      color: "bg-purple-600",
      href: "/Camiseta.pdf",
    },
  ];

  return (
    <section id="materiais" className="bg-[#F8FAFC] py-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-end gap-8 flex-wrap mb-12">
          <div className="flex-[1_1_420px]">
            <p className="text-sm font-black tracking-[0.14em] uppercase text-brand-blue">
              Downloads
            </p>
            <h2 className="mt-3.5 text-[clamp(32px,3.8vw,52px)] leading-[1.02] font-black tracking-tight text-brand-dark text-balance">
              Materiais de Campanha
            </h2>
          </div>
          <p className="flex-[1_1_300px] text-lg leading-[1.6] text-brand-dark/70">
            Baixe nossos materiais, compartilhe com seus amigos e ajude a espalhar a nossa mensagem por toda Goiás.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {materiais.map((item, index) => (
            <ScrollReveal key={item.id} animation="zoom" delay={index * 100} className="bg-white border border-gray-100 rounded-[20px] p-5 flex flex-col justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center ${item.textClass || 'text-white'} mb-3`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg leading-tight font-black text-brand-dark mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 mb-2">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {item.id === "jingles" ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsJinglesModalOpen(true);
                  }}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-brand-blue hover:bg-[#072B6B] text-white text-sm rounded-xl font-bold transition-colors cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar / Ouvir</span>
                </button>
              ) : item.id === "santinhos" ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSantinhosModalOpen(true);
                  }}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-brand-blue hover:bg-[#072B6B] text-white text-sm rounded-xl font-bold transition-colors cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Ver / Baixar</span>
                </button>
              ) : item.id === "adesivos" ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAdesivosModalOpen(true);
                  }}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-brand-blue hover:bg-[#072B6B] text-white text-sm rounded-xl font-bold transition-colors cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Ver / Baixar</span>
                </button>
              ) : (
                <a 
                  href={item.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-brand-blue hover:bg-[#072B6B] text-white text-sm rounded-xl font-bold transition-colors cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar</span>
                </a>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>

      <JinglesModal isOpen={isJinglesModalOpen} onClose={() => setIsJinglesModalOpen(false)} />
      <SantinhosModal isOpen={isSantinhosModalOpen} onClose={() => setIsSantinhosModalOpen(false)} />
      <AdesivosModal isOpen={isAdesivosModalOpen} onClose={() => setIsAdesivosModalOpen(false)} />
    </section>
  );
}
