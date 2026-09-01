import Image from "next/image";
import trajetoriaImg from "@/img/tragetoria.png";
import cidadeImg from "@/img/cidade.png";
import pctImg from "@/img/img-pct.jpg";
import foto4Img from "@/img/4.png";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Trajetoria() {
  return (
    <div className="bg-[#fafbf8] text-[#0e2c5e]">
      <div className="max-w-[1120px] mx-auto py-14 px-6">
        {/* ================= GALERIA ================= */}
        <section>
          <ScrollReveal animation="slide-up">
            <div className="text-[12px] font-semibold tracking-[1.5px] text-[#2b8a3e] uppercase">
              Uma vida dedicada ao cuidado
            </div>
            <h2 className="text-[clamp(26px,3.2vw,34px)] font-bold text-[#0e2c5e] leading-[1.1] mt-1.5">
              Perto das pessoas,<br />todos os dias
            </h2>
          </ScrollReveal>

        <div className="mt-7 grid grid-cols-[2fr_1fr] auto-rows-[1fr] gap-4 max-[720px]:grid-cols-1">
          
          {/* Foto grande: momento principal */}
          <ScrollReveal animation="fade" delay={100} className="relative rounded-[14px] overflow-hidden min-h-[210px] max-[720px]:min-h-[200px] row-span-2 max-[720px]:row-auto group cursor-pointer" tabIndex={0}>
              <Image
                src="/assets/667f3187-940a-4935-9a5e-729bed2e9521.jpg"
                alt="Atendimento humanizado"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 pt-10 px-4 pb-3.5 bg-gradient-to-t from-[rgba(10,30,70,0.92)] to-transparent text-white text-[14px] leading-[1.35] translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0 max-[720px]:translate-y-0 max-[720px]:pt-10">
                <span className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#8ce04a] mb-1">
                  Atendimento humanizado
                </span>
                Presença e cuidado humanizado em cada etapa do atendimento.
              </div>
            </ScrollReveal>

            {/* Retrato institucional (âncora) */}
            <ScrollReveal animation="fade" delay={200} className="relative rounded-[14px] overflow-hidden min-h-[210px] max-[720px]:min-h-[200px]">
              <Image
                src={foto4Img}
                alt="Dr. Walter Vosgrau"
                fill
                className="object-cover object-[center_calc(50%+90px)]"
              />
              <div className="absolute left-3 bottom-3 bg-[rgba(255,255,255,0.92)] text-[#0e2c5e] text-[12px] font-semibold py-[5px] px-[12px] rounded-[13px]">
                Dr. Walter Vosgrau
              </div>
            </ScrollReveal>

            {/* Foto de ação */}
            <ScrollReveal animation="fade" delay={300} className="relative rounded-[14px] overflow-hidden min-h-[210px] max-[720px]:min-h-[200px] group cursor-pointer" tabIndex={0}>
              <Image
                src={pctImg}
                alt="Escuta de verdade"
                fill
                className="object-cover object-[center_calc(50%-70px)]"
              />
              <div className="absolute inset-x-0 bottom-0 pt-10 px-4 pb-3.5 bg-gradient-to-t from-[rgba(10,30,70,0.92)] to-transparent text-white text-[14px] leading-[1.35] translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0 max-[720px]:translate-y-0 max-[720px]:pt-10">
                <span className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#8ce04a] mb-1">
                  Escuta de verdade
                </span>
                Consulta que começa ouvindo.
              </div>
            </ScrollReveal>

            {/* Bloco azul com número */}
            <ScrollReveal animation="fade" delay={400} className="relative rounded-[14px] overflow-hidden min-h-[210px] max-[720px]:min-h-[200px] bg-[#0e3a86] flex flex-col items-center justify-center text-center p-5">
              <span className="text-[14px] font-medium text-[#9fc0ec]">+40 anos</span>
              <span className="text-[22px] font-bold text-white leading-[1.15] my-1.5">cuidando de<br />vidas e de pessoas</span>
              <span className="text-[16px] font-semibold text-[#8ce04a]">Com Goiás e nossa gente no coração!</span>
            </ScrollReveal>

            {/* Foto da cidade / região */}
            <ScrollReveal animation="fade" delay={500} className="relative rounded-[14px] overflow-hidden min-h-[210px] max-[720px]:min-h-[200px] group cursor-pointer" tabIndex={0}>
              <Image
                src={cidadeImg}
                alt="Compromisso com Goiás"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 pt-10 px-4 pb-3.5 bg-gradient-to-t from-[rgba(10,30,70,0.92)] to-transparent text-white text-[14px] leading-[1.35] translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0 max-[720px]:translate-y-0 max-[720px]:pt-10">
                <span className="block text-[11px] font-semibold tracking-[1px] uppercase text-[#8ce04a] mb-1">
                  Compromisso com Goiás
                </span>
                Das ruas de Anápolis para todo o estado.
              </div>
            </ScrollReveal>

          </div>
        </section>

        {/* ================= BLOCO-FECHO: ANÚNCIO ================= */}
        <ScrollReveal animation="slide-up" delay={150} className="mt-6 bg-white border border-[#e6e9e2] border-l-4 border-l-[#1d9e4a] rounded-[14px] py-[30px] px-7">
          <span className="inline-flex items-center gap-1.5 bg-[#e7f3ea] text-[#1a7a39] text-[11px] font-semibold tracking-[1px] uppercase py-1.5 px-[13px] rounded-[14px]">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[14px] h-[14px]">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.9-4.9 1.4 1.4-6.3 6.3z"/>
            </svg>
            Faça parte dessa história
          </span>
          
          <h3 className="text-[clamp(29px,2.4vw,24px)] font-bold text-[#0e2c5e] leading-[1.25] mt-4 mb-3 max-w-[600px]">
            Minha candidatura a deputado estadual está confirmada.
          </h3>

          <p className="text-[18px] text-[#41485a] leading-[1.65] max-w-[640px]">
            Levo comigo mais de 40 anos dedicados à medicina, o compromisso com a saúde
            pública e a responsabilidade de continuar servindo a população. Meu propósito
            é trabalhar por Anápolis, pela nossa região e por todo o estado de Goiás —
            lutando por mais investimentos na saúde, fortalecendo o SUS e defendendo
            políticas públicas que melhorem a vida das pessoas. Essa caminhada começa com
            diálogo, trabalho e compromisso.
          </p>

          <p className="text-[18px] font-semibold text-[#0e2c5e] mt-[14px]">
            Vamos juntos construir um Goiás mais forte.
          </p>

          <a href="#apoiar" className="inline-flex items-center gap-2 mt-[28px] bg-[#1d9e4a] text-white text-[19px] font-semibold py-3 px-[22px] rounded-[24px] no-underline transition-all duration-300 hover:bg-[#178040] hover:-translate-y-1 hover:shadow-lg">
            Faça parte dessa caminhada
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-4 h-4">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </ScrollReveal>

      </div>
    </div>
  );
}
