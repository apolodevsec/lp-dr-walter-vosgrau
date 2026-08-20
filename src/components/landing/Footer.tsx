import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70 pt-16 px-6 pb-10">
      <div className="max-w-[1240px] mx-auto flex gap-12 flex-wrap items-start">
        <div className="flex-[1_1_300px] flex flex-col gap-4">
          <Image
            src="/assets/78294787-1c50-453e-822f-0a70c8755148.jpg"
            alt="Dr. Walter Vosgrau"
            width={170}
            height={170}
            className="w-[170px] h-auto rounded-2xl"
          />
          <p className="text-base font-extrabold text-white">
            Dr. Walter Vosgrau · 45454
          </p>
          <p className="text-[15px] leading-[1.6]">
            Pré-candidato a Deputado Estadual em Goiás.<br />
            Cirurgião Cardiovascular.
          </p>
          <Image
            src="/assets/e01da7f4-d89a-49ee-a8ce-d5128061330a.png"
            alt="PSDB"
            width={120}
            height={40}
            className="w-[120px] h-auto"
          />
        </div>

        <div className="flex-[1_1_220px] flex flex-col gap-3 text-[15px]">
          <p className="mb-1 text-[13px] font-black tracking-[0.12em] uppercase text-brand-yellow">
            Navegação
          </p>
          <a href="#quem-sou" className="text-white/80 hover:text-white transition-colors">
            Quem sou
          </a>
          <a href="#causas" className="text-white/80 hover:text-white transition-colors">
            Causas e propostas
          </a>
          <a href="#contato" className="text-white/80 hover:text-white transition-colors">
            Contato
          </a>
        </div>

        <div className="flex-[1_1_380px]">
          <p className="mb-3.5 text-[13px] font-black tracking-[0.12em] uppercase text-brand-yellow">
            Conformidade eleitoral
          </p>
          <p className="text-sm leading-[1.7]">
            CNPJ da campanha: [inserir CNPJ registrado no TSE]
          </p>
          <p className="mt-2 text-sm leading-[1.7]">
            Responsável pela confecção da página: [Nome da Empresa], CNPJ nº [YY.YYY.YYY/0001-YY]
          </p>
          <p className="mt-3.5 p-4 bg-white/5 rounded-xl text-[13px] leading-[1.7]">
            “Material digital da campanha de Walter Vosgrau, CNPJ nº [XX.XXX.XXX/0001-XX], produzido por [Nome da Empresa], CNPJ nº [YY.YYY.YYY/0001-YY], por solicitação do comitê.”
          </p>
          <p className="mt-3.5 text-[13px] leading-[1.7]">
            Os dados enviados por apoiadores são tratados conforme a LGPD e as normas do TSE, utilizados exclusivamente para comunicação da campanha.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-10 pt-6 border-t border-white/10 flex justify-between gap-4 flex-wrap text-[13px]">
        <span>© 2026 Comitê Dr. Walter Vosgrau · PSDB · Goiás</span>
        <span>Cuidar das pessoas está no coração!</span>
      </div>
    </footer>
  );
}
