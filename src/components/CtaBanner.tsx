import { ArrowRight, Ticket } from '@phosphor-icons/react/dist/ssr'

export default function CtaBanner() {
  return (
    <section id="ticket" className="py-20 bg-nb-dark relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #a9ec46 0%, transparent 65%)' }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nb-lime/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nb-lime/20 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <span className="font-manrope font-700 text-[13px] text-nb-teal uppercase tracking-[3px] mb-5 block">
          17–20 марта 2026 · Экспофорум · Санкт-Петербург
        </span>
        <h2 className="font-manrope font-800 text-[clamp(36px,6vw,80px)] text-white leading-tight tracking-tight mb-6 max-w-[900px] mx-auto">
          Станьте частью<br/>
          <span className="text-nb-lime">NevaBuild 2026</span>
        </h2>
        <p className="font-mulish text-[17px] text-white/50 max-w-[560px] mx-auto mb-12 leading-relaxed">
          Регистрация для профессионалов строительной отрасли — бесплатно. Ограниченное количество билетов VIP-доступа.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#register"
            className="inline-flex items-center gap-3 font-manrope font-800 text-[16px] px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #a9ec46 0%, #8dd62e 100%)',
              color: '#0d2d06',
              boxShadow: '0 12px 40px rgba(169,236,70,0.28)',
            }}
          >
            <Ticket size={20} weight="fill" />
            Получить бесплатный билет
            <ArrowRight size={18} weight="bold" />
          </a>
          <a
            href="#exhibitors"
            className="inline-flex items-center gap-2.5 font-manrope font-800 text-[16px] border-2 border-white/20 hover:border-nb-lime text-white hover:text-nb-lime px-8 py-4 rounded-2xl transition-all duration-200"
          >
            Участвовать как экспонент
          </a>
        </div>
      </div>
    </section>
  )
}
