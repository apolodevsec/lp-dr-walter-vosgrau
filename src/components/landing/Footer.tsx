import { ArrowRight } from "lucide-react";

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

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.5-.8-2.5-1.4-3.5-3.1-.3-.5.3-.4.7-1.4.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2 .9 2.7.9 3.7.8.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z" />
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
        <div className="max-w-[1120px] mx-auto">
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
            href="#apoiar"
            className="inline-flex items-center gap-2 mt-7 bg-[#f5b800] hover:bg-[#ffc61f] text-[#0e2c5e] text-[17px] font-extrabold tracking-wide px-9 py-4 rounded-xl shadow-[0_3px_0_rgba(0,0,0,0.15)] transition-all duration-150 hover:-translate-y-0.5"
          >
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            MEU VOTO É 45454
          </a>
        </div>
      </section>

      {/* ================= RODAPÉ =================
          pb generoso (e maior no mobile) para o botão flutuante do WhatsApp
          NÃO cobrir o texto de conformidade eleitoral (exigência de legibilidade) */}
      <footer className="bg-[#0b1c3a] pt-10 px-6 pb-24 md:pb-8">
        <div className="max-w-[1120px] mx-auto">
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
                {/* TODO: trocar SEUPERFIL pelas URLs reais dos perfis */}
                <a
                  href="https://instagram.com/SEUPERFIL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-[#dbe4f5] px-4 py-2 border border-white/20 rounded-full transition-all duration-150 hover:bg-white/10 hover:border-white"
                >
                  <InstagramIcon className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://facebook.com/SEUPERFIL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-[#dbe4f5] px-4 py-2 border border-white/20 rounded-full transition-all duration-150 hover:bg-white/10 hover:border-white"
                >
                  <FacebookIcon className="w-4 h-4" />
                  Facebook
                </a>
                {/* TODO: confirmar o número antes de publicar (55 + DDD + número) */}
                <a
                  href="https://wa.me/5562994348092"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-[#dbe4f5] px-4 py-2 border border-white/20 rounded-full transition-all duration-150 hover:bg-[#25d366] hover:border-[#25d366] hover:text-white"
                >
                  <WhatsAppIcon className="w-4 h-4" />
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
              <a href="#material" className="block text-sm text-[#aebbd4] py-1.5 hover:text-white transition-colors duration-150">
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
                className="text-[13px] text-[#aebbd4] hover:text-white flex items-center gap-2 mb-2 transition-colors duration-150"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25d366]" />
                (62) 9 9434-8092
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
              68.519.226/0001-37, produzido por agência contratada, CNPJ nº
              48.330.675/0001-25, por solicitação do comitê financeiro do candidato.
            </p>
            <p className="text-[11px] text-[#94a3c4] leading-[1.65]">
              Propaganda eleitoral em conformidade com a Lei nº 9.504/97 e resoluções do
              TSE. Dados coletados neste site são tratados conforme a LGPD (Lei nº
              13.709/2018).
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}