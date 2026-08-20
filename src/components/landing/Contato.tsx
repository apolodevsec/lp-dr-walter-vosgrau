export function Contato() {
  return (
    <section id="contato" className="bg-brand-green text-white py-24 px-6">
      <div className="max-w-[1240px] mx-auto flex gap-10 items-center justify-between flex-wrap">
        <div className="flex-[1_1_440px]">
          <h2 className="text-[clamp(30px,3.6vw,48px)] leading-[1.03] font-black tracking-tight text-balance">
            Cuidar das pessoas está no coração. 
            <br></br>
            E também nas suas mãos.
          </h2>
          <p className="mt-4 text-lg leading-[1.6] text-white/90 max-w-[50ch]">
            Entre em contato conosco, fale com a equipe e acompanhe a caminhada pelas redes.
          </p>
        </div>
        <div className="flex-[0_1_340px] flex flex-col gap-3 w-full">
          <a
            href="https://wa.me/556239021267"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-5 rounded-full border-2 border-white/60 text-white text-[17px] font-extrabold text-center hover:bg-white hover:text-[#0A7A3C] transition-colors"
          >
            WHATSAPP
          </a>
          <a
            href="https://instagram.com/drwalter.vosgrau"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-5 rounded-full border-2 border-white/60 text-white text-[17px] font-extrabold text-center hover:bg-white hover:text-[#0A7A3C] transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href="https://facebook.com/drwaltervosgrau"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-5 rounded-full border-2 border-white/60 text-white text-[17px] font-extrabold text-center hover:bg-white hover:text-[#0A7A3C] transition-colors"
          >
            FACEBOOK
          </a>
        </div>
      </div>
    </section>
  );
}
