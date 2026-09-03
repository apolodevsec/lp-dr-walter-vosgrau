import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FaWhatsapp } from "react-icons/fa";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.9V11H7.5v3H10v8h3z" />
    </svg>
  );
}



export function Footer() {
  return (
    <>
      {/* ================= FAIXA DE ADESÃO (CTA) =================
          Correções:
          - fundo mais claro (#12336b) para separar visualmente do rodapé
          - borda amarela inferior reforçando a divisão entre as seções
          - separadores "·" entre os slogans (some no mobile, onde eles empilham) */}
      <section className="bg-[#12336b] border-b-[3px] border-[#f5b800] py-12 px-6 text-center">
        <ScrollReveal animation="zoom" className="max-w-[1120px] mx-auto">
          <div className="text-[clamp(30px,5vw,46px)] font-extrabold text-white tracking-wide leading-none">
            DR. WALTER VOSGRAU <span className="text-[#f5b800]">45454</span>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-x-4 gap-y-1.5 mt-5 max-md:flex-col">
            <span className="text-base font-semibold text-[#9fb6de]">
              Experiência para cuidar.
            </span>
            <span className="text-[#5f7cae] max-md:hidden" aria-hidden="true">·</span>
            <span className="text-base font-semibold text-[#9fb6de]">
              Coragem para mudar.
            </span>
            <span className="text-[#5f7cae] max-md:hidden" aria-hidden="true">·</span>
            <span className="text-base font-semibold text-[#9fb6de]">
              Compromisso com Goiás.
            </span>
          </div>

          <a
            href="https://wa.me/5562994348092"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-7 bg-[#f5b800] hover:bg-[#ffc61f] text-[#0e2c5e] text-[17px] font-extrabold tracking-wide px-9 py-4 rounded-xl shadow-[0_3px_0_rgba(0,0,0,0.15)] transition-all duration-150 hover:-translate-y-0.5"
          >
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            MEU VOTO É 45454
          </a>
        </ScrollReveal>
      </section>

      {/* ================= RODAPÉ =================
          pb generoso (e maior no mobile) para o botão flutuante do WhatsApp
          NÃO cobrir o texto de conformidade eleitoral (exigência de legibilidade) */}
      <footer className="bg-[#0b1c3a] pt-10 px-6 pb-24 md:pb-8">
        <ScrollReveal animation="fade" delay={100} className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-9 md:gap-[36px]">
            {/* Marca + credenciais + redes */}
            <div>
              <div className="text-[22px] font-extrabold text-white tracking-wide">
                DR. WALTER VOSGRAU <span className="text-[#f5b800]">45454</span>
              </div>

              {/* Hierarquia: 1ª linha (cargo) em destaque, resto em apoio */}
              <p className="text-[13px] leading-[1.7] mt-2.5">
                <span className="text-[#c7d3e8] italic">Cuidar das pessoas está no coração.</span><br />
                <span className="text-white font-semibold">Candidato a Deputado Estadual por Goiás · PSDB.</span><br />
                <span className="text-[#aebbd4]">Vice-prefeito de Anápolis · Cirurgião cardiovascular.</span>
              </p>

              <div className="flex flex-wrap gap-2.5 mt-4">
                <a
                  href="https://instagram.com/drwalter.vosgrau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-[#dbe4f5] px-4 py-2 border border-white/20 rounded-full transition-all duration-150 hover:bg-white/10 hover:border-white"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://facebook.com/drwaltervosgrau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-[#dbe4f5] px-4 py-2 border border-white/20 rounded-full transition-all duration-150 hover:bg-white/10 hover:border-white"
                >
                  <FacebookIcon className="w-4 h-4" />
                  Facebook
                </a>
                <a
                  href="https://wa.me/5562994348092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-[#dbe4f5] px-4 py-2 border border-white/20 rounded-full transition-all duration-150 hover:bg-[#25d366] hover:border-[#25d366] hover:text-white group"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#25d366] group-hover:text-white transition-colors" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <div className="text-[12px] font-semibold tracking-widest uppercase text-[#f5b800] mb-3">
                Navegação
              </div>
              <a href="#quem-sou" className="block text-sm text-[#aebbd4] py-1.5 hover:text-white transition-colors duration-150">
                Quem sou
              </a>
              <a href="#causas" className="block text-sm text-[#aebbd4] py-1.5 hover:text-white transition-colors duration-150">
                Causas e propostas
              </a>
              <a href="#materiais" className="block text-sm text-[#aebbd4] py-1.5 hover:text-white transition-colors duration-150">
                Material de campanha
              </a>
              <a href="#contato" className="block text-sm text-[#aebbd4] py-1.5 hover:text-white transition-colors duration-150">
                Contato
              </a>
            </div>

            {/* Contato + Partido */}
            <div>
              <div className="text-[12px] font-semibold tracking-widest uppercase text-[#f5b800] mb-3">
                Contato
              </div>
              <a
                href="https://wa.me/5562994348092"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#aebbd4] hover:text-white flex items-center gap-2 mb-2 transition-colors duration-150 group"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25d366] shrink-0 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: +55 (62) 99434-8092</span>
              </a>

              <div className="text-[12px] font-semibold tracking-widest uppercase text-[#f5b800] mt-5 mb-2">
                Coligação
              </div>
              <div className="text-[13px] text-[#aebbd4] leading-[1.6]">
                Goiás Pode Muito Mais:<br />
                PSDB - Cidadania - DC
              </div>
            </div>
          </div>

          {/* Conformidade eleitoral — contraste elevado para legibilidade (TSE) */}
          <div className="border-t border-white/10 mt-7 pt-5">
            <p className="text-[11px] text-[#94a3c4] leading-[1.65] mb-2">
              Material digital da campanha de <strong className="text-[#c2cee4] font-bold">Walter Vosgrau</strong>, CNPJ nº
              68.492.204/0001-20, produzido por agência contratada, CNPJ nº
              48.330.675/0001-25, por solicitação do comitê financeiro do candidato.
            </p>
            <p className="text-[11px] text-[#94a3c4] leading-[1.65]">
              Propaganda eleitoral em conformidade com a Lei nº 9.504/97 e resoluções do
              TSE. Dados coletados neste site são tratados conforme a LGPD (Lei nº
              13.709/2018).
            </p>
          </div>
        </ScrollReveal>
      </footer>
    </>
  );
}