import Link from 'next/link'
import { CheckCircle, CalendarBlank, Clock, MapPin, ArrowRight, Ticket, Users, Star } from '@phosphor-icons/react/dist/ssr'

export const metadata = { title: 'Посетителям — NevaBuild 2026' }

const howItWorks = [
  { step: '01', title: 'Регистрация онлайн', desc: 'Заполните форму на сайте — займёт 2 минуты. Получите QR-код на e-mail.' },
  { step: '02', title: 'Получите бейдж', desc: 'На входе в Экспофорум покажите QR-код — бейдж будет готов мгновенно.' },
  { step: '03', title: 'Посетите выставку', desc: 'Изучайте экспозицию, посещайте мероприятия деловой программы, общайтесь с экспонентами.' },
]

const tickets = [
  {
    type: 'Стандартный',
    price: 'Бесплатно',
    note: 'Для специалистов отрасли',
    features: ['Доступ в выставочные павильоны', 'Каталог участников онлайн', 'Навигация по экспозиции'],
    color: 'border-nb-border',
    btn: 'bg-nb-green text-white hover:bg-nb-lime-dark',
  },
  {
    type: 'VIP-посетитель',
    price: '5 000 ₽',
    note: 'Расширенный доступ',
    features: ['Всё из стандартного', 'Форумы и конференции бесплатно', 'VIP-зона нетворкинга', 'Ланч-сессии со спикерами', 'Приоритетный вход без очереди'],
    color: 'border-nb-red ring-1 ring-nb-red/20',
    btn: 'bg-nb-red text-white hover:bg-nb-red-dark',
    badge: 'Популярный',
  },
  {
    type: 'Группа (от 5 чел)',
    price: 'от 2 000 ₽/чел',
    note: 'Корпоративный визит',
    features: ['Групповая регистрация', 'Корпоративный гид по выставке', 'Встреча с экспонентами по списку', 'Отчёт по итогам посещения'],
    color: 'border-nb-border',
    btn: 'bg-nb-dark text-white hover:bg-nb-dark-card',
  },
]

const schedule = [
  { time: '9:30–10:00', label: 'Вход и регистрация' },
  { time: '10:00',      label: 'Официальное открытие' },
  { time: '10:00–18:00',label: 'Работа экспозиции' },
  { time: '10:30–17:00',label: 'Деловая программа' },
  { time: '18:00',      label: 'Закрытие павильонов' },
]

export default function VisitorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-nb-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, #12B669, transparent)' }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="font-mulish text-white/40 text-sm hover:text-white/70 transition-colors">Главная</Link>
            <span className="text-white/25">/</span>
            <span className="font-mulish text-white/60 text-sm">Посетителям</span>
          </div>
          <span className="font-manrope font-bold text-[11px] text-nb-green uppercase tracking-[3px] mb-4 block">
            Посетителям
          </span>
          <h1 className="font-manrope font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}>
            Откройте для себя<br />
            <span className="text-nb-green">NevaBuild 2026</span>
          </h1>
          <p className="font-mulish text-white/55 text-[17px] leading-relaxed max-w-[560px] mb-10">
            Четыре дня погружения в мир строительства, архитектуры и дизайна. Регистрация для профессионалов отрасли — бесплатно.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#register"
              className="inline-flex items-center gap-2.5 font-manrope font-extrabold text-[15px] bg-nb-red text-white px-7 py-4 rounded-2xl shadow-lg shadow-nb-red/30 hover:bg-nb-red-dark hover:-translate-y-0.5 transition-all">
              <Ticket size={18} weight="fill" />
              Зарегистрироваться бесплатно
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-nb-dark-card border-y border-white/8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 grid sm:grid-cols-3 gap-6">
          {[
            { icon: <CalendarBlank size={18} weight="fill" className="text-nb-green" />, label: 'Даты', val: '18–21 марта 2026' },
            { icon: <Clock size={18} weight="fill" className="text-nb-green" />, label: 'Время работы', val: '10:00 – 18:00' },
            { icon: <MapPin size={18} weight="fill" className="text-nb-green" />, label: 'Место', val: 'ЭкспоФорум, Санкт-Петербург' },
          ].map(({ icon, label, val }) => (
            <div key={label} className="flex items-center gap-3">
              {icon}
              <div>
                <div className="font-mulish text-white/40 text-[12px]">{label}</div>
                <div className="font-manrope font-bold text-white text-[15px]">{val}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-nb-bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="font-manrope font-bold text-[11px] text-nb-green uppercase tracking-[3px] mb-3 block">Как это работает</span>
          <h2 className="font-manrope font-extrabold text-nb-dark mb-14" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            3 шага до выставки
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl p-8 border border-nb-border hover:border-nb-lime/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-nb-green/8 transition-all duration-300">
                <span className="font-manrope font-extrabold text-[40px] text-nb-green/20 leading-none block mb-4">{step}</span>
                <h3 className="font-manrope font-bold text-[18px] text-nb-dark mb-3">{title}</h3>
                <p className="font-mulish text-[14px] text-nb-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tickets */}
      <section id="register" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="font-manrope font-bold text-[11px] text-nb-green uppercase tracking-[3px] mb-3 block">Билеты</span>
          <h2 className="font-manrope font-extrabold text-nb-dark mb-14" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Выберите формат участия
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tickets.map(({ type, price, note, features, color, btn, badge }) => (
              <div key={type} className={`relative rounded-2xl border-2 p-8 flex flex-col ${color}`}>
                {badge && (
                  <span className="absolute -top-3 left-6 font-manrope font-bold text-[11px] bg-nb-red text-white px-3 py-1 rounded-full">
                    {badge}
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="font-manrope font-bold text-[16px] text-nb-dark mb-1">{type}</h3>
                  <p className="font-mulish text-nb-muted text-[13px]">{note}</p>
                </div>
                <div className="font-manrope font-extrabold text-nb-dark mb-6" style={{ fontSize: 'clamp(28px,3vw,36px)' }}>
                  {price}
                </div>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle size={16} weight="fill" className="text-nb-green flex-none mt-0.5" />
                      <span className="font-mulish text-[14px] text-nb-dark/70">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`font-manrope font-extrabold text-[14.5px] py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${btn}`}>
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-nb-bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-manrope font-bold text-[11px] text-nb-green uppercase tracking-[3px] mb-3 block">Распорядок дня</span>
              <h2 className="font-manrope font-extrabold text-nb-dark mb-8" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
                Каждый день выставки
              </h2>
              <div className="flex flex-col gap-0">
                {schedule.map(({ time, label }, i) => (
                  <div key={i} className="flex items-center gap-5 py-4 border-b border-nb-border last:border-0">
                    <span className="font-manrope font-bold text-nb-green text-[14px] w-[130px] flex-none tabular-nums">{time}</span>
                    <span className="font-mulish text-nb-dark text-[15px]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-nb-dark rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 opacity-10"
                style={{ background: 'radial-gradient(circle, #12B669, transparent)' }} />
              <Users size={40} weight="thin" className="text-nb-green mb-6 opacity-60" />
              <h3 className="font-manrope font-extrabold text-white text-[26px] mb-4">Нетворкинг-зона</h3>
              <p className="font-mulish text-white/50 text-[15px] leading-relaxed mb-8">
                На каждом этаже Экспофорума работает зона для деловых встреч. Платформа matchmaking помогает найти нужные контакты до начала выставки.
              </p>
              <Link href="/program"
                className="inline-flex items-center gap-2 font-manrope font-bold text-[14px] text-nb-green hover:text-nb-lime-muted transition-colors">
                Деловая программа <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
