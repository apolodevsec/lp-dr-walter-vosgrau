import { HeartPulse, Stethoscope, Users, UserRoundCheck, Sprout } from "lucide-react";

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
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 items-start">
          <div className="group bg-white text-brand-dark rounded-[20px] p-8 flex flex-col gap-3 hover:shadow-2xl hover:shadow-[#0A3A8B]/20 hover:-translate-y-1.5 transition-all duration-500 min-h-[260px]">
            <div className="w-11 h-11 rounded-xl bg-brand-green flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="mt-2 text-[22px] leading-[1.15] font-black text-[#0A3A8B]">
              Saúde Pública e SUS
            </h3>
            <p className="text-base leading-[1.6] text-[#3B4A63]">
              Fortalecimento do SUS em todo o estado e luta por uma saúde pública de qualidade.
            </p>
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <ul className="pt-3 flex flex-col gap-2.5 text-sm text-[#3B4A63] border-t border-gray-100 mt-2">
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Fortalecimento da Rede do SUS:</strong> Atuação firme pela alocação de recursos e investimentos contínuos para manter as unidades de saúde abastecidas e preparadas.
                  </li>
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Redução das Filas de Espera:</strong> Organização e agilização da rede pública para acelerar o atendimento de urgência e procedimentos fundamentais.
                  </li>
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Gestão e Eficiência em Saúde:</strong> Apoio a ações de governança que garantam transparência e aplicação correta das verbas públicas na saúde.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group bg-white text-brand-dark rounded-[20px] p-8 flex flex-col gap-3 hover:shadow-2xl hover:shadow-[#0A3A8B]/20 hover:-translate-y-1.5 transition-all duration-500 min-h-[260px]">
            <div className="w-11 h-11 rounded-xl bg-[#0B5FD8] flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="mt-2 text-[22px] leading-[1.15] font-black text-[#0A3A8B]">
              Acesso à Saúde e Cuidado Humanizado
            </h3>
            <p className="text-base text-[16px] leading-[1.6] text-[#3B4A63]">
              Ampliação do acesso a exames, consultas e cirurgias com atendimento humano e eficiente.
            </p>
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <ul className="pt-3 flex flex-col gap-2.5 text-sm text-[#3B4A63] border-t border-gray-100 mt-2">
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Consultas e Cirurgias Especializadas:</strong> Trabalho para expandir a oferta de procedimentos e cirurgias, diminuindo o tempo de espera da população.
                  </li>
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Atendimento Digno e Humanizado:</strong> Valorização do acolhimento respeitoso ao paciente e seus familiares em momentos vulneráveis.
                  </li>
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Descentralização dos Serviços:</strong> Incentivo ao acesso a exames e especialidades mais perto de casa, evitando deslocamentos desnecessários.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group bg-white text-brand-dark rounded-[20px] p-8 flex flex-col gap-3 hover:shadow-2xl hover:shadow-[#0A3A8B]/20 hover:-translate-y-1.5 transition-all duration-500 min-h-[260px]">
            <div className="w-11 h-11 rounded-xl bg-brand-dark flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:scale-110">
              <UserRoundCheck className="w-6 h-6" />
            </div>
            <h3 className="mt-2 text-[22px] leading-[1.15] font-black text-[#0A3A8B]">
              Profissionais da Saúde
            </h3>
            <p className="text-base leading-[1.6] text-[#3B4A63]">
              Valorização de quem cuida: médicos, enfermeiros e todos os profissionais da área.
            </p>
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <ul className="pt-3 flex flex-col gap-2.5 text-sm text-[#3B4A63] border-t border-gray-100 mt-2">
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Condições Dignas de Trabalho:</strong> Defesa de ambientes equipados, seguros e com estrutura adequada para o exercício dos profissionais de saúde.
                  </li>
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Valorização das Categorias:</strong> Respeito aos direitos, salários e jornadas de toda a equipe multidisciplinar de saúde.
                  </li>
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Capacitação e Formação Contínua:</strong> Incentivo ao aperfeiçoamento constante dos trabalhadores que atuam no atendimento.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group bg-white text-brand-dark rounded-[20px] p-8 flex flex-col gap-3 hover:shadow-2xl hover:shadow-[#0A3A8B]/20 hover:-translate-y-1.5 transition-all duration-500 min-h-[260px]">
            <div className="w-11 h-11 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-dark shrink-0 transition-transform duration-500 group-hover:scale-110">
              <Sprout className="w-6 h-6" />
            </div>
            <h3 className="mt-2 text-[22px] leading-[1.15] font-black text-[#0A3A8B]">
              Agricultura Familiar
            </h3>
            <p className="text-base leading-[1.6] text-[#3B4A63]">
              Incentivo e fortalecimento do produtor, garantindo renda no campo, segurança e o escoamento da produção.
            </p>
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <ul className="pt-3 flex flex-col gap-2.5 text-sm text-[#3B4A63] border-t border-gray-100 mt-2">
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Apoio ao Produtor:</strong> Fomento a políticas públicas de incentivo, acesso a crédito e assistência técnica para o meio rural.
                  </li>
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Geração de Renda no Campo:</strong> Fortalecimento da comercialização local, valorizando a produção das famílias.
                  </li>
                  <li className="leading-snug">
                    <strong className="text-[#0A3A8B] font-bold">Infraestrutura e Segurança no Campo:</strong> Ações por maior segurança física para as famílias rurais e pela melhoria das estradas vicinais, garantindo o escoamento rápido e seguro da produção.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
