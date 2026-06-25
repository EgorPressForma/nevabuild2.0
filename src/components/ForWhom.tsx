import { ArrowRight, CheckCircle } from '@phosphor-icons/react/dist/ssr'

const visitorsFeatures = [
  'Бесплатный вход для профессионалов отрасли',
  'Эксклюзивные новинки рынка строительства',
  'Деловая программа: форумы, мастер-классы',
  'Нетворкинг с 40 000+ специалистами',
  'Онлайн-регистрация без очереди на входе',
]

const exhibitorsFeatures = [
  'Прямой выход на b2b-аудиторию покупателей',
  'Стенды от 9 м² — любой формат участия',
  'Маркетинговая поддержка и PR-пакеты',
  'Деловые встречи через платформу matchmaking',
  'Специальные условия для якорных участников',
]

export default function ForWhom() {
  return (
    <section id="visitors" className="py-20 bg-nb-bg-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Visitors card — bright gradient */}
          <div
            className="relative rounded-3xl p-10 lg:p-12 overflow-hidden flex flex-col"
            style={{ background: 'linear-gradient(135deg, #12B669 0%, #a9ec46 55%, #d4f772 100%)' }}
          >
            {/* Glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 80% 20%, rgba(255,255,255,0.22) 0%, transparent 65%)' }}
            />
            <span className="font-manrope font-700 text-[13px] uppercase tracking-[3px] mb-6" style={{ color: '#00d2d0' }}>
              Посетителям
            </span>
            <h2 className="font-manrope font-800 text-[clamp(28px,3.5vw,42px)] leading-tight mb-4" style={{ color: '#0d2d06' }}>
              Откройте новые<br/>горизонты рынка
            </h2>
            <p className="font-mulish text-[15px] mb-8 max-w-[420px] leading-relaxed" style={{ color: '#1a4a0a' }}>
              Четыре дня погружения в мир строительства, архитектуры и дизайна интерьеров. Профессионалы, продукты и идеи — в одном месте.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {visitorsFeatures.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle weight="fill" size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#0d2d06' }}/>
                  <span className="font-mulish text-[14px]" style={{ color: '#1a4a0a' }}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#ticket"
              className="mt-auto inline-flex items-center gap-2 font-manrope font-800 text-[14.5px] px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 self-start"
              style={{ background: '#0e2d08', color: '#a9ec46', boxShadow: '0 8px 24px rgba(14,45,8,0.25)' }}
            >
              Зарегистрироваться
              <ArrowRight size={16} weight="bold"/>
            </a>
          </div>

          {/* Exhibitors card — light */}
          <div className="relative bg-white rounded-3xl p-10 lg:p-12 overflow-hidden border border-nb-border flex flex-col">
            <div
              className="absolute top-0 right-0 w-[280px] h-[280px] opacity-5 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #E11B22 0%, transparent 70%)' }}
            />
            <span className="font-manrope font-700 text-[13px] text-nb-teal uppercase tracking-[3px] mb-6">
              Экспонентам
            </span>
            <h2 className="font-manrope font-800 text-[clamp(28px,3.5vw,42px)] text-black leading-tight mb-4">
              Найдите клиентов<br/>и партнёров
            </h2>
            <p className="font-mulish text-[15px] text-black/65 mb-8 max-w-[420px] leading-relaxed">
              Представьте свой бренд перед профессиональной аудиторией. Получите заявки, заключите договоры и укрепите позиции на рынке.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {exhibitorsFeatures.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle weight="fill" size={18} className="text-nb-red flex-shrink-0 mt-0.5"/>
                  <span className="font-mulish text-[14px] text-black/75">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-3">
              <a
                href="#exhibitors"
                className="inline-flex items-center gap-2 font-manrope font-800 text-[14.5px] bg-nb-red hover:bg-nb-red-dark text-white px-6 py-3.5 rounded-xl shadow-lg shadow-nb-red/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                Забронировать стенд
                <ArrowRight size={16} weight="bold"/>
              </a>
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 font-manrope font-700 text-[14.5px] border border-nb-border hover:border-nb-lime text-nb-dark hover:text-nb-lime-dark px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                Скачать прайс-лист
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
