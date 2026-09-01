import Image from "next/image";
import quemSouImg from "@/img/quemSou.png";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function QuemSou() {
  return (
    <section id="quem-sou" className="bg-[#FCFCFA] py-24 px-6">
      <div className="max-w-[1240px] mx-auto flex gap-16 items-center flex-wrap">
        <ScrollReveal animation="slide-right" className="flex-[0_1_400px] relative">
          <div className="absolute -left-4 -top-4 right-6 bottom-6 bg-brand-green rounded-3xl" />
          <Image
            src={quemSouImg}
            alt="Dr. Walter Vosgrau em atendimento"
            width={450}
            height={550}
            className="relative -translate-x-[10px] translate-y-[-23.9px] w-full rounded-[10px] object-cover object-top aspect-[0.7]"
          />
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={200} className="flex-[1_1_460px]">
          <p className="text-sm font-black tracking-[0.14em] uppercase text-brand-green">
            Quem é Dr. Walter Vosgrau
          </p>
          <h2 className="mt-3.5 text-[clamp(32px,3.8vw,52px)] leading-[1.02] font-black tracking-tight text-brand-dark text-balance">
            Antes de ocupar qualquer cargo público, já tinha escolhido servir.
          </h2>
          <p className="mt-6 text-[19px] leading-[1.65] text-[#3B4A63] text-pretty">
            Como cirurgião cardiovascular, Dr. Walter dedicou sua vida a cuidar de pessoas, acolher famílias e lutar pela saúde. Esteve presente em alguns dos momentos mais importantes da vida das pessoas: cuidando, acolhendo e salvando vidas.
          </p>
          <p className="mt-4 text-[19px] leading-[1.65] text-[#3B4A63] text-pretty">
            Sua trajetória na medicina e na gestão pública foi construída ouvindo pessoas, entendendo desafios e buscando soluções. Quem vive os desafios da saúde pública conhece de perto as necessidades da população — e essa experiência agora busca contribuir ainda mais com o estado de Goiás.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-8">
            <div className="flex-[1_1_200px] bg-white border border-[#E3E9F2] border-l-[6px] border-l-[#0B5FD8] rounded-xl p-5">
              <p className="text-[15px] font-extrabold text-[#0A3A8B]">
                Cirurgião Cardiovascular
              </p>
              <p className="mt-1.5 text-[15px] text-[#3B4A63]">
                Décadas ao lado de pacientes e famílias.
              </p>
            </div>
            <div className="flex-[1_1_200px] bg-white border border-[#E3E9F2] border-l-[6px] border-l-brand-green rounded-xl p-5">
              <p className="text-[15px] font-extrabold text-[#0A3A8B]">
                Vice-prefeito de Anápolis
              </p>
              <p className="mt-1.5 text-[14px] text-[#3B4A63]">
                Dedicação contínua ao serviço público e às pessoas.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
