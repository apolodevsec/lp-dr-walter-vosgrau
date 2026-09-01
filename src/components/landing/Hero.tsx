import Image from "next/image";
import heroImg from "@/img/hero.png";
import heroGoianiaImg from "@/img/heroGoiania.webp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section className="relative bg-brand-blue text-white overflow-hidden">
      <Image
        src={heroGoianiaImg}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-[rgba(10,58,139,0.92)] to-[rgba(0, 0, 0, 0.55)]" />
      <div className="relative max-w-[1240px] mx-auto px-6 pt-14 flex items-end gap-10 flex-wrap">
        <ScrollReveal animation="slide-up" delay={100} className="flex-[1_1_460px] pb-16">
          <div className="inline-flex items-center gap-3 bg-brand-yellow text-[#0A3A8B] px-4 py-2 rounded-full text-sm font-black tracking-widest uppercase">
            PSDB · 45454
          </div>
          <h1 className="mt-5 text-[clamp(38px,5.2vw,72px)] leading-[0.94] font-black tracking-tight text-balance">
            Dr. Walter Vosgrau
          </h1>
          <p className="mt-4 text-[clamp(17px,1.7vw,23px)] font-bold text-[#BFE0FF] tracking-wide">
            Candidato a Deputado Estadual · 45454
          </p>
          <p className="mt-7 text-[clamp(26px,3.4vw,46px)] leading-[1.05] font-black text-white max-w-[15ch]">
            Cuidar das pessoas está no coração!
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/85 max-w-[46ch]">
            Cirurgião cardiovascular e vice-prefeito de Anápolis. Uma vida dedicada a cuidar das pessoas — um compromisso que agora alcança Goiás.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-8">
            <a
              href="https://wa.me/5562994348092"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 rounded-full bg-brand-green text-white text-lg font-black tracking-wide hover:bg-[#0E8642] transition-colors"
            >
              QUERO APOIAR ESSA CAUSA
            </a>
            <a
              href="#causas"
              className="px-8 py-5 rounded-full border-2 border-white/50 text-white text-lg font-extrabold hover:bg-white hover:text-brand-blue transition-colors"
            >
              Ver as causas
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="slide-left" delay={300} className="flex-[0_1_420px] flex justify-center items-end min-h-[420px]">
          <Image
            src={heroImg}
            alt=""
            aria-hidden="true"
            width={430}
            height={500}
            className="w-full max-w-[430px] h-auto object-contain drop-shadow-[0_24px_50px_rgba(3,20,50,0.45)]"
            priority
          />
        <div className="barra absolute bottom-0 left-0 right-0"></div>
        </ScrollReveal>

      </div>

    </section>
  );
}
