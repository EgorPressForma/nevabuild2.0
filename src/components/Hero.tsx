import Countdown from './Countdown'
import { MapPin, CalendarBlank, ArrowRight } from '@phosphor-icons/react/dist/ssr'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-nb-dark-deep">
        {/* Geometric accent — diagonal green strip */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 70% 40%, #0E9355 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background: 'radial-gradient(ellipse 50% 50% at 20% 80%, #12B669 0%, transparent 60%)',
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex flex-col max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-[120px] pb-10">

        {/* Top badge */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-nb-green/15 border border-nb-green/30 text-nb-green font-manrope font-700 text-[12px] px-4 py-2 rounded-full uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-nb-green animate-pulse inline-block" />
            Регистрация открыта
          </span>
          <span className="text-white/40 font-mulish text-sm">17–20 марта 2026</span>
        </div>

        {/* Headline */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-manrope font-800 leading-[0.92] tracking-tight text-white mb-6 animate-fade-up animate-delay-100">
            <span className="block text-[clamp(64px,10vw,148px)]">Neva</span>
            <span className="block text-[clamp(64px,10vw,148px)] text-nb-green">Build</span>
            <span className="block text-[clamp(18px,2.8vw,36px)] text-white/55 font-600 tracking-normal mt-3 leading-snug">
              Международная строительно-интерьерная выставка
            </span>
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap gap-5 mb-10 animate-fade-up animate-delay-200">
            <div className="flex items-center gap-2 text-white/70 font-mulish text-[15px]">
              <MapPin weight="fill" size={16} className="text-nb-green flex-shrink-0"/>
              Экспофорум, Санкт-Петербург, павильоны E, F, G
            </div>
            <div className="flex items-center gap-2 text-white/70 font-mulish text-[15px]">
              <CalendarBlank weight="fill" size={16} className="text-nb-green flex-shrink-0"/>
              17–20 марта 2026
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up animate-delay-300">
            <a
              href="#ticket"
              className="inline-flex items-center gap-2.5 font-manrope font-800 text-[15.5px] bg-nb-red hover:bg-nb-red-dark text-white px-7 py-4 rounded-2xl shadow-xl shadow-nb-red/35 transition-all duration-200 hover:-translate-y-1"
            >
              Получить билет
              <ArrowRight size={18} weight="bold"/>
            </a>
            <a
              href="#exhibitors"
              className="inline-flex items-center gap-2.5 font-manrope font-800 text-[15.5px] bg-white/10 hover:bg-white/18 border border-white/25 hover:border-white/50 text-white px-7 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm"
            >
              Стать экспонентом
            </a>
          </div>
        </div>

        {/* Countdown strip — signature element */}
        <div className="animate-fade-up animate-delay-400">
          <div className="border-t border-white/10 pt-8">
            <p className="font-mulish text-[12px] text-white/40 uppercase tracking-widest mb-5">
              До открытия выставки
            </p>
            <Countdown />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-white animate-pulse"/>
        <span className="font-manrope text-[10px] text-white uppercase tracking-[3px] rotate-90 origin-center translate-y-4">scroll</span>
      </div>
    </section>
  )
}
