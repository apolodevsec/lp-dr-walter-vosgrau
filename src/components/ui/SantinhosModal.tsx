"use client";

import { useEffect, useState } from "react";
import { X, Download, FileText, Eye, Check, ExternalLink, Sparkles, QrCode } from "lucide-react";
import Image from "next/image";

interface SantinhoItem {
  id: string;
  title: string;
  tag?: string;
  badgeColor?: string;
  description: string;
  frente: {
    title: string;
    pdf: string;
    thumb: string;
  };
  verso: {
    title: string;
    pdf: string;
    thumb: string;
  };
}

const santinhosList: SantinhoItem[] = [
  {
    id: "qr-code",
    title: "Santinho com QR Code",
    tag: "Recomendado",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    description: "Versão oficial atualizada com QR Code para acesso rápido às redes e propostas.",
    frente: {
      title: "Frente (QR Code)",
      pdf: "/santinhos/santinho-frente-qr.pdf",
      thumb: "/santinhos/thumbs/santinho-frente-qr.png",
    },
    verso: {
      title: "Verso (QR Code)",
      pdf: "/santinhos/santinho-verso-qr.pdf",
      thumb: "/santinhos/thumbs/santinho-verso-qr.png",
    },
  },
  {
    id: "novo",
    title: "Santinho Novo",
    tag: "Atualizado",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    description: "Layout de alta qualidade pronto para impressão gráfica e distribuição digital.",
    frente: {
      title: "Frente Novo",
      pdf: "/santinhos/santinho-frente-novo.pdf",
      thumb: "/santinhos/thumbs/santinho-frente-novo.png",
    },
    verso: {
      title: "Verso OK",
      pdf: "/santinhos/santinho-verso-ok.pdf",
      thumb: "/santinhos/thumbs/santinho-verso-ok.png",
    },
  },
  {
    id: "classico",
    title: "Santinho Clássico",
    tag: "Padrão",
    badgeColor: "bg-gray-100 text-gray-700 border-gray-200",
    description: "Versão tradicional do santinho da campanha Dr. Walter Vosgrau.",
    frente: {
      title: "Frente Clássico",
      pdf: "/santinhos/santinho-frente-classico.pdf",
      thumb: "/santinhos/thumbs/santinho-frente-classico.png",
    },
    verso: {
      title: "Verso Clássico",
      pdf: "/santinhos/santinho-verso-classico.pdf",
      thumb: "/santinhos/thumbs/santinho-verso-classico.png",
    },
  },
];

interface SantinhosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SantinhosModal({ isOpen, onClose }: SantinhosModalProps) {
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
              <div className="w-11 h-11 rounded-2xl bg-brand-blue flex items-center justify-center text-white shadow-md shadow-brand-blue/20">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black text-brand-dark leading-none">
                    Santinhos de Campanha
                  </h2>
                  <span className="bg-brand-yellow/20 text-brand-dark text-xs font-bold px-2.5 py-0.5 rounded-full border border-brand-yellow/40">
                    PDF / Alta Resolução
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Visualize e baixe os santinhos oficiais para impressão ou compartilhamento digital
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
            {santinhosList.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8FAFC] rounded-[20px] p-6 border border-gray-200/80 shadow-xs hover:border-brand-blue/30 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-black text-brand-dark">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 w-full sm:w-auto">
                    {item.description}
                  </p>
                </div>

                {/* Grid of Frente and Verso */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                  {/* Frente Card */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {item.frente.title}
                        </span>
                        <button
                          onClick={() =>
                            setPreviewImage({
                              src: item.frente.thumb,
                              title: `${item.title} - ${item.frente.title}`,
                            })
                          }
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline"
                        >
                          <Eye className="w-3.5 h-3.5" /> Ampliar
                        </button>
                      </div>

                      <div
                        onClick={() =>
                          setPreviewImage({
                            src: item.frente.thumb,
                            title: `${item.title} - ${item.frente.title}`,
                          })
                        }
                        className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 border border-gray-200/60 aspect-[3/4] flex items-center justify-center mb-4"
                      >
                        <img
                          src={item.frente.thumb}
                          alt={item.frente.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white/90 text-brand-dark font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                            <Eye className="w-4 h-4" /> Expandir Imagem
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={item.frente.pdf}
                        download
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-[#072B6B] text-white text-sm font-bold py-2.5 px-3 rounded-xl transition-colors shadow-sm"
                      >
                        <Download className="w-4 h-4" /> Baixar PDF
                      </a>
                      <button
                        onClick={() => handleCopyLink(item.frente.pdf, `${item.id}-frente`)}
                        title="Copiar link do PDF"
                        className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        {copiedId === `${item.id}-frente` ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Verso Card */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {item.verso.title}
                        </span>
                        <button
                          onClick={() =>
                            setPreviewImage({
                              src: item.verso.thumb,
                              title: `${item.title} - ${item.verso.title}`,
                            })
                          }
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:underline"
                        >
                          <Eye className="w-3.5 h-3.5" /> Ampliar
                        </button>
                      </div>

                      <div
                        onClick={() =>
                          setPreviewImage({
                            src: item.verso.thumb,
                            title: `${item.title} - ${item.verso.title}`,
                          })
                        }
                        className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 border border-gray-200/60 aspect-[3/4] flex items-center justify-center mb-4"
                      >
                        <img
                          src={item.verso.thumb}
                          alt={item.verso.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white/90 text-brand-dark font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                            <Eye className="w-4 h-4" /> Expandir Imagem
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={item.verso.pdf}
                        download
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-[#072B6B] text-white text-sm font-bold py-2.5 px-3 rounded-xl transition-colors shadow-sm"
                      >
                        <Download className="w-4 h-4" /> Baixar PDF
                      </a>
                      <button
                        onClick={() => handleCopyLink(item.verso.pdf, `${item.id}-verso`)}
                        title="Copiar link do PDF"
                        className="p-2.5 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        {copiedId === `${item.id}-verso` ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-yellow shrink-0" />
              <span>
                Todos os arquivos estão em formato PDF vetorizado pronto para impressão gráfica.
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
