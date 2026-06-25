import Link from 'next/link'
import { ArrowRight, Trophy, Globe, CalendarBlank } from '@phosphor-icons/react/dist/ssr'

export const metadata = { title: 'О выставке — NevaBuild 2026' }

const milestones = [
  { year: '2009', title: 'Первая NevaBuild', desc: 'Дебютная выставка в Ленэкспо. 120 экспонентов, 8 000 посетителей.' },
  { year: '2013', title: 'Переезд в Экспофорум', desc: 'Расширение до 2 павильонов. Первые международные экспозиции.' },
  { year: '2017', title: 'Международный статус', desc: 'UFI — признание на уровне ведущих мировых выставочных организаций.' },
  { year: '2020', title: 'Гибридный формат', desc: 'Онлайн-трансляции и virtual showroom. Рекорд посещаемости стримов — 200 000.' },
  { year: '2024', title: 'Рекорд экспозиции', desc: '800+ участников, 60 000 м². NevaBuild подтверждает лидерство на Северо-Западе.' },
  { year: '2026', title: 'Новая эра', desc: 'Открытие четвёртого павильона. AI-зона, robotics zone и расширенный Digital Hub.' },
]

const numbers = [
  { val: '15 лет', label: 'проводим выставку' },
  { val: '40 000+', label: 'посетителей ежегодно' },
  { val: '800+', label: 'компаний-участников' },
  { val: '70+', label: 'стран-участниц' },
]

const organizers = [
  { name: 'ООО «НевaBuild Expo»', role: 'Организатор', city: 'Санкт-Петербург' },
  { name: 'Экспофорум-Интернэшнл', role: 'Площадка-партнёр', city: 'Санкт-Петербург' },
  { name: 'Комитет по строительству СПб', role: 'При поддержке', city: 'Правительство СПб' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-nb-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-12"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 60%, #12B669, transparent)' }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="font-mulish text-white/40 text-sm hover:text-white/70 transition-colors">Главная</Link>
            <span className="text-white/25">/</span>
            <span className="font-mulish text-white/60 text-sm">О выставке</span>
          </div>
          <span className="font-manrope font-bold text-[13px] text-nb-teal uppercase tracking-[3px] mb-4 block">
            О выставке
          </span>
          <h1 className="font-manrope font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}>
            NevaBuild —<br />
            <span className="text-nb-green">15 лет лидерства</span>
          </h1>
          <p className="font-mulish text-white/55 text-[17px] leading-relaxed max-w-[600px]">
            С 2009 года NevaBuild объединяет профессионалов строительной, интерьерной и архитектурной отраслей Северо-Западного региона России.
          </p>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-nb-dark-card border-y border-white/8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/8">
            {numbers.map(({ val, label }) => (
              <div key={label} className="py-10 px-8 flex flex-col">
                <span className="font-manrope font-extrabold text-white leading-none mb-1.5"
                  style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}>{val}</span>
                <span className="font-mulish text-white/50 text-[14px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-manrope font-bold text-[13px] text-nb-teal uppercase tracking-[3px] mb-3 block">Миссия</span>
              <h2 className="font-manrope font-extrabold text-nb-dark mb-6" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
                Площадка для роста отрасли
              </h2>
              <p className="font-mulish text-nb-dark/60 text-[16px] leading-relaxed mb-6">
                NevaBuild создаёт экосистему, где строительные компании находят новых клиентов, специалисты открывают последние технологии, а инвесторы знакомятся с перспективными проектами.
              </p>
              <p className="font-mulish text-nb-dark/60 text-[16px] leading-relaxed mb-8">
                Мы не просто организуем выставку — мы формируем рынок. Каждый год NevaBuild задаёт тренды для всей строительной отрасли Северо-Запада России.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Trophy size={16} weight="fill" />, label: 'UFI-признание' },
                  { icon: <Globe size={16} weight="fill" />, label: '70+ стран' },
                  { icon: <CalendarBlank size={16} weight="fill" />, label: 'С 2009 года' },
                ].map(({ icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 font-manrope font-bold text-[13px] text-nb-green-dark bg-nb-bg-light border border-nb-green/20 px-4 py-2 rounded-xl">
                    {icon} {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-nb-dark rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-8"
                style={{ background: 'radial-gradient(circle at 80% 20%, #12B669, transparent 60%)' }} />
              <blockquote className="relative z-10">
                <div className="font-manrope font-extrabold text-nb-green text-[60px] leading-none mb-4 opacity-50">"</div>
                <p className="font-mulish text-white/80 text-[17px] leading-relaxed mb-6">
                  NevaBuild — это не просто выставка. Это место, где за четыре дня происходит то, что не случается за весь год переписки и звонков: живые знакомства, которые становятся долгосрочными партнёрствами.
                </p>
                <footer className="font-manrope font-bold text-white/50 text-[13px]">
                  — Алексей Воронов, генеральный директор NevaBuild Expo
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-nb-bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="font-manrope font-bold text-[13px] text-nb-teal uppercase tracking-[3px] mb-3 block">История</span>
          <h2 className="font-manrope font-extrabold text-nb-dark mb-14" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Вехи NevaBuild
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map(({ year, title, desc }) => (
              <div key={year} className="bg-white rounded-2xl border border-nb-border p-8 hover:border-nb-lime/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-nb-green/8 transition-all duration-300">
                <span className="font-manrope font-extrabold text-[42px] text-nb-green/25 leading-none block mb-3">{year}</span>
                <h3 className="font-manrope font-bold text-[18px] text-nb-dark mb-3">{title}</h3>
                <p className="font-mulish text-[14px] text-nb-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="font-manrope font-bold text-[13px] text-nb-teal uppercase tracking-[3px] mb-3 block">Организаторы</span>
          <h2 className="font-manrope font-extrabold text-nb-dark mb-10" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Кто стоит за выставкой
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {organizers.map(({ name, role, city }) => (
              <div key={name} className="rounded-2xl border border-nb-border p-7">
                <div className="font-manrope font-bold text-nb-muted text-[11px] uppercase tracking-wider mb-2">{role}</div>
                <h3 className="font-manrope font-bold text-nb-dark text-[17px] mb-1">{name}</h3>
                <p className="font-mulish text-nb-muted text-[14px]">{city}</p>
              </div>
            ))}
          </div>
          <Link href="/contacts"
            className="inline-flex items-center gap-2 font-manrope font-bold text-[14.5px] bg-nb-dark text-white px-6 py-3.5 rounded-xl hover:bg-nb-dark-card transition-all hover:-translate-y-0.5">
            Связаться с организаторами <ArrowRight size={15} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
