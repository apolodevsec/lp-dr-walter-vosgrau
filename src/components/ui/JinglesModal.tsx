"use client";

import { useEffect, useState } from "react";
import { X, Download, Music, Sparkles } from "lucide-react";

interface Jingle {
  id: string;
  name: string;
  file: string;
}

const jingles: Jingle[] = [
  { id: "1", name: "Jingle Tema 1", file: "/jingles/jingle-tema-1.mpeg" },
  { id: "2", name: "Jingle Tema 2", file: "/jingles/jingle-tema-2.mpeg" },
  { id: "3", name: "Jingle Tema 3", file: "/jingles/jingle-tema-3.mpeg" },
  { id: "4", name: "Jingle Tema 4", file: "/jingles/jingle-tema-4.mpeg" },
];

interface JinglesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JinglesModal({ isOpen, onClose }: JinglesModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-2xl bg-white rounded-[24px] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-brand-dark leading-none">
                  Jingles da Campanha
                </h2>

              </div>
              <p className="text-sm text-gray-500 mt-1">
                Ouça e baixe as músicas oficiais da campanha
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh] flex flex-col gap-4">
          {jingles.map((jingle) => (
            <div
              key={jingle.id}
              className="bg-[#F8FAFC] rounded-[16px] p-5 border border-gray-100 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-brand-dark truncate max-w-[200px] min-w-[120px]">
                    {jingle.name}
                  </h3>

                </div>
                <a
                  href={jingle.file}
                  download
                  className="inline-flex items-center gap-2 bg-brand-blue hover:bg-[#092B6B] text-white text-sm font-semibold py-2 px-4 rounded-xl transition-colors whitespace-nowrap"
                >
                  <Download className="w-4 h-4" />
                  Baixar Arquivo
                </a>
              </div>
              <div className="w-full mt-1">
                <audio
                  controls
                  className="w-full h-10 outline-none"
                  controlsList="nodownload"
                >
                  <source src={jingle.file} type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Músicas produzidas com auxílio de Inteligência Artificial</span>
          </div>
        </div>
      </div>
    </div>
  );
}
