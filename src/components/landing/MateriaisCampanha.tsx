"use client";

import { useState } from "react";
import { Download, Image as ImageIcon, Music, Sticker, FileText, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JinglesModal } from "@/components/ui/JinglesModal";

export function MateriaisCampanha() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {materiais.map((item, index) => (
            <ScrollReveal key={item.id} animation="zoom" delay={index * 150} className="bg-white border border-gray-100 rounded-[20px] p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center ${item.textClass || 'text-white'}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-[22px] leading-[1.15] font-black text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-base leading-[1.6] text-gray-600 mb-6">
                  {item.description}
                </p>
              </div>
              
              {item.id === "jingles" ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-brand-dark rounded-xl font-bold transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Baixar / Ouvir</span>
                </button>
              ) : (
                <a 
                  href={item.href}
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-brand-dark rounded-xl font-bold transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>Baixar</span>
                </a>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>

      <JinglesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
