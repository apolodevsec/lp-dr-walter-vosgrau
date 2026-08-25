import { HeartPulse, Stethoscope, Users, UserRoundCheck } from "lucide-react";

export function Causas() {
  return (
    <section id="causas" className="bg-brand-blue text-white py-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex items-end gap-8 flex-wrap mb-12">
          <div className="flex-[1_1_420px]">
            <p className="text-sm font-black tracking-[0.14em] uppercase text-brand-yellow">
              Causas e bandeiras
            </p>
            <h2 className="mt-3.5 text-[clamp(32px,3.8vw,52px)] leading-[1.02] font-black tracking-tight text-balance">
              As causas que movem minha caminhada
            </h2>
          </div>
          <p className="flex-[1_1_300px] text-lg leading-[1.6] text-white/80">
            Saúde, cuidado com as pessoas, humanização, experiência, família, respeito, trabalho, compromisso e vida.
          </p>
        </div>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          <div className="bg-white text-brand-dark rounded-[20px] p-8 flex flex-col gap-3 hover:shadow-2xl hover:shadow-[#0A3A8B]/20 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-brand-green flex items-center justify-center text-white">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="mt-2 text-[22px] leading-[1.15] font-black text-[#0A3A8B]">
              Saúde Pública e SUS
            </h3>
            <p className="text-base leading-[1.6] text-[#3B4A63]">
              Luta por uma saúde pública de qualidade e pelo fortalecimento do SUS em todo o estado.
            </p>
          </div>

          <div className="bg-white text-brand-dark rounded-[20px] p-8 flex flex-col gap-3 hover:shadow-2xl hover:shadow-[#0A3A8B]/20 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#0B5FD8] flex items-center justify-center text-white">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="mt-2 text-[22px] leading-[1.15] font-black text-[#0A3A8B]">
              Acesso à Saúde
            </h3>
            <p className="text-base leading-[1.6] text-[#3B4A63]">
              Ampliação do acesso a consultas, exames e cirurgias para a população goiana.
            </p>
          </div>

          <div className="bg-white text-brand-dark rounded-[20px] p-8 flex flex-col gap-3 hover:shadow-2xl hover:shadow-[#0A3A8B]/20 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-dark">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="mt-2 text-[22px] leading-[1.15] font-black text-[#0A3A8B]">
              Cuidado Humanizado
            </h3>
            <p className="text-base leading-[1.6] text-[#3B4A63]">
              Um atendimento mais humano e eficiente, com profundo respeito às famílias goianas.
            </p>
          </div>

          <div className="bg-white text-brand-dark rounded-[20px] p-8 flex flex-col gap-3 hover:shadow-2xl hover:shadow-[#0A3A8B]/20 hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-brand-dark flex items-center justify-center text-white">
              <UserRoundCheck className="w-6 h-6" />
            </div>
            <h3 className="mt-2 text-[22px] leading-[1.15] font-black text-[#0A3A8B]">
              Profissionais da Saúde
            </h3>
            <p className="text-base leading-[1.6] text-[#3B4A63]">
              Valorização de quem cuida: médicos, enfermeiros e todos os profissionais da área.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
