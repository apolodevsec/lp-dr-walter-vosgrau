import Image from "next/image";

export function Trajetoria() {
  return (
    <section className="bg-[#FCFCFA] py-24 px-6">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-sm font-black tracking-[0.14em] uppercase text-brand-green">
          Uma vida dedicada ao cuidado
        </p>
        <h2 className="mt-3.5 mb-10 text-[clamp(30px,3.4vw,46px)] leading-[1.04] font-black tracking-tight text-brand-dark max-w-[22ch] text-balance">
          Perto das pessoas, todos os dias
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#E9EEF6] md:col-span-2 min-w-[280px] relative min-h-[300px]">
            <Image
              src="/assets/667f3187-940a-4935-9a5e-729bed2e9521.jpg"
              alt="Dr. Walter Vosgrau com uma paciente"
              fill
              className="object-cover"
            />
          </figure>
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#E9EEF6] relative min-h-[300px]">
            <Image
              src="/assets/1e079f63-e26a-4d99-b18f-5592ccf20631.jpg"
              alt="Dr. Walter Vosgrau"
              fill
              className="object-cover object-[center_30%]"
            />
          </figure>
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#E9EEF6] relative min-h-[260px]">
            <Image
              src="/assets/09a646f1-2614-4d10-bf01-cc0e2f9115b6.jpg"
              alt="Dr. Walter Vosgrau em atendimento"
              fill
              className="object-cover"
            />
          </figure>
          <figure className="m-0 rounded-[20px] overflow-hidden bg-brand-blue flex items-center justify-center p-9 min-h-[260px]">
            <p className="text-[clamp(22px,2.4vw,32px)] leading-[1.1] font-black text-white text-balance text-center">
              É Goiás no coração!
            </p>
          </figure>
          <figure className="m-0 rounded-[20px] overflow-hidden bg-[#E9EEF6] relative min-h-[260px]">
            <Image
              src="/assets/5fa730e6-3b39-431b-b465-e05ee4ea6b9b.jpg"
              alt="Vista da cidade em Goiás"
              fill
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
