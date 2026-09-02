"use client";

import { useEffect, useState } from "react";
import { X, Download, Sticker, Eye, Check, ExternalLink, Sparkles } from "lucide-react";

interface AdesivoItem {
  id: string;
  title: string;
  category: string;
  tag?: string;
  badgeColor?: string;
  description: string;
  pdf: string;
  thumb: string;
  aspectRatio?: string; // e.g., 'aspect-square', 'aspect-[4/3]', 'aspect-[16/9]'
}

const adesivosGrouped = [
  {
    categoryTitle: "Adesivos Formato Coração",
    description: "Modelos em formato de coração para peito, veículos e apoio nas redes.",
    items: [
      {
        id: "coracao-foto",
        title: "Adesivo Coração com Foto",
        category: "Coração",
        tag: "Mais Popular",
        badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
        description: "Versão oficial em formato coração com foto em alta qualidade do Dr. Walter Vosgrau.",
        pdf: "/adesivos/adesivo-coracao-foto.pdf",
        thumb: "/adesivos/thumbs/adesivo-coracao-foto.png",
        aspectRatio: "aspect-square",
      },
      {
        id: "coracao",
        title: "Adesivo Coração Oficial",
        category: "Coração",
        tag: "Oficial",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "Design clássico em coração com a marca da campanha e número do candidato.",
        pdf: "/adesivos/adesivo-coracao.pdf",
        thumb: "/adesivos/thumbs/adesivo-coracao.png",
        aspectRatio: "aspect-square",
      },
    ],
  },
  {
    categoryTitle: "Adesivos Redondos",
    description: "Perfeitos para vidros de carros, para-choques e distribuição em eventos.",
    items: [
      {
        id: "redondo-vote",
        title: "Adesivo Redondo 'Vote'",
        category: "Redondo",
        tag: "Destaque",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        description: "Adesivo circular de grande destaque focado na chamada de voto.",
        pdf: "/adesivos/adesivo-redondo-vote.pdf",
        thumb: "/adesivos/thumbs/adesivo-redondo-vote.png",
        aspectRatio: "aspect-square",
      },
      {
        id: "redondo-1",
        title: "Adesivo Redondo Oficial",
        category: "Redondo",
        tag: "Versátil",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "Adesivo circular padrão para colagem rápida em diversas superfícies.",
        pdf: "/adesivos/adesivo-redondo.pdf",
        thumb: "/adesivos/thumbs/adesivo-redondo.png",
        aspectRatio: "aspect-square",
      },
      {
        id: "redondo-2",
        title: "Adesivo Redondo Modelo 2",
        category: "Redondo",
        tag: "Gráfica",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        description: "Variação gráfica do adesivo circular em altíssima resolução.",
        pdf: "/adesivos/adesivo-redondo-2.pdf",
        thumb: "/adesivos/thumbs/adesivo-redondo-2.png",
        aspectRatio: "aspect-square",
      },
    ],
  },
  {
    categoryTitle: "Adesivos Retangulares",
    description: "Formatos horizontais para para-choque de automóveis e vidros traseiros.",
    items: [
      {
        id: "retangular-to-com-ele",
        title: "Adesivo Retangular 'Tô com ele'",
        category: "Retangular",
        tag: "Veicular",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "Adesivo horizontal veicular ideal para colar no para-choque ou vidro traseiro.",
        pdf: "/adesivos/adesivo-retangular-to-com-ele.pdf",
        thumb: "/adesivos/thumbs/adesivo-retangular-to-com-ele.png",
        aspectRatio: "aspect-[16/6]",
      },
      {
        id: "retangular-numero",
        title: "Adesivo Retangular Número",
        category: "Retangular",
        tag: "Leitura Rápida",
        badgeColor: "bg-gray-100 text-gray-800 border-gray-200",
        description: "Formato retangular focado no nome e número do candidato para alta visibilidade.",
        pdf: "/adesivos/adesivo-retangular-numero.pdf",
        thumb: "/adesivos/thumbs/adesivo-retangular-numero.png",
        aspectRatio: "aspect-[16/6]",
      },
    ],
  },
];

interface AdesivosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdesivosModal({ isOpen, onClose }: AdesivosModalProps) {
  const [mounted, setMounted] = useState(false);
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string } | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

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

  const handleCopyLink = (path: string, id: string) => {
    const fullUrl = `${window.location.origin}${path}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-[2000] flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          className="absolute inset-0 bg-brand-dark/65 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal Window */}
        <div
          className={`relative w-full max-w-4xl bg-white rounded-[24px] shadow-2xl flex flex-col overflow-hidden transition-all duration-300 max-h-[90vh] ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#0B5FD8] flex items-center justify-center text-white shadow-md shadow-[#0B5FD8]/20">
                <Sticker className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black text-brand-dark leading-none">
                    Adesivos de Campanha
                  </h2>
                  <span className="bg-[#0B5FD8]/10 text-[#0B5FD8] text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#0B5FD8]/20">
                    PDF Vetorizado / Impressão
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Modelos de adesivos em formato coração, redondo e retangular para automóveis e eventos
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-8">
            {adesivosGrouped.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-4">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-lg font-black text-brand-dark flex items-center gap-2">
                    {group.categoryTitle}
                  </h3>
                  <p className="text-sm text-gray-500">{group.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#F8FAFC] rounded-[18px] p-4 border border-gray-200/80 flex flex-col justify-between hover:border-brand-blue/30 transition-all shadow-xs"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-bold text-brand-dark text-base leading-tight">
                            {item.title}
                          </h4>
                          {item.tag && (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${item.badgeColor}`}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                          {item.description}
                        </p>

                        {/* Thumbnail Box */}
                        <div
                          onClick={() =>
                            setPreviewImage({
                              src: item.thumb,
                              title: item.title,
                            })
                          }
                          className={`relative group cursor-pointer overflow-hidden rounded-xl bg-white border border-gray-200/80 ${item.aspectRatio || "aspect-square"} flex items-center justify-center mb-4 p-2 shadow-inner`}
                        >
                          <img
                            src={item.thumb}
                            alt={item.title}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/90 text-brand-dark font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                              <Eye className="w-3.5 h-3.5" /> Ampliar
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-auto">
                        <a
                          href={item.pdf}
                          download
                          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0B5FD8] hover:bg-[#084bb0] text-white text-xs font-bold py-2 px-3 rounded-xl transition-colors shadow-sm"
                        >
                          <Download className="w-3.5 h-3.5" /> Baixar PDF
                        </a>
                        <button
                          onClick={() => handleCopyLink(item.pdf, item.id)}
                          title="Copiar link do PDF"
                          className="p-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-100 text-gray-600 transition-colors"
                        >
                          {copiedId === item.id ? (
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          ) : (
                            <ExternalLink className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-yellow shrink-0" />
              <span>
                Todos os arquivos de adesivos estão prontos para gráfica em formato PDF vetorial de alta definição.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[2100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] bg-white rounded-2xl p-4 overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-3 mb-2 border-b border-gray-100">
              <h4 className="font-bold text-brand-dark">{previewImage.title}</h4>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-auto max-h-[75vh] flex items-center justify-center">
              <img
                src={previewImage.src}
                alt={previewImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
