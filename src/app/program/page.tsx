'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Clock, MapPin, Users, ArrowRight, MicrophoneStage } from '@phosphor-icons/react'

const days = [
  { label: 'День 1', date: '18 марта, вт' },
  { label: 'День 2', date: '19 марта, ср' },
  { label: 'День 3', date: '20 марта, чт' },
  { label: 'День 4', date: '21 марта, пт' },
]

const events: Record<number, Array<{ time: string; title: string; type: string; location: string; speakers?: string; highlight?: boolean }>> = {
  0: [
    { time: '10:00', title: 'Торжественное открытие NevaBuild 2026', type: 'Церемония', location: 'Атриум, павильон E', speakers: 'Губернатор Санкт-Петербурга, оргкомитет', highlight: true },
    { time: '11:30', title: 'Пленарное заседание: строительный рынок России — 2026', type: 'Форум', location: 'Конгресс-центр, зал A', speakers: 'Министр строительства РФ и ведущие девелоперы' },
    { time: '13:00', title: 'Тур по экспозиции с лидерами отрасли', type: 'Тур', location: 'Павильоны E–G', speakers: '' },
    { time: '14:30', title: 'Круглый стол: энергоэффективность в многоквартирном жилье', type: 'Дискуссия', location: 'Конгресс-центр, зал B', speakers: 'ROCKWOOL, ТЕХНОНИКОЛЬ, Knauf' },
    { time: '16:00', title: 'Мастер-класс: BIM как стандарт проектирования', type: 'Мастер-класс', location: 'Digital-зона, сцена 2', speakers: 'Архитектурное бюро CITYMAKERS' },
    { time: '17:30', title: 'Нетворкинг-сессия: девелоперы и подрядчики', type: 'Нетворкинг', location: 'VIP-зона, павильон F', speakers: '' },
  ],
  1: [
    { time: '10:00', title: 'День архитектора: тренды фасадных решений 2026', type: 'Форум', location: 'Конгресс-центр, зал A', speakers: 'Ведущие архитекторы СПб и Москвы', highlight: true },
    { time: '12:00', title: 'Финские строительные технологии: презентации', type: 'Презентация', location: 'Национальная экспозиция Финляндии', speakers: '' },
    { time: '14:00', title: 'Деревянное строительство: CLT в России', type: 'Конференция', location: 'Конгресс-центр, зал C', speakers: 'SEGEZHA GROUP, Русский Деревянный Дом' },
    { time: '15:30', title: 'Умный дом: от проекта до реализации', type: 'Мастер-класс', location: 'Digital-зона, сцена 1', speakers: 'Яндекс Дом и HDL Automation' },
    { time: '17:00', title: 'Встреча с инвесторами: поиск финансирования для проектов', type: 'B2B', location: 'Деловой центр, зал 2', speakers: '' },
  ],
  2: [
    { time: '10:00', title: 'День дизайнера интерьеров — главный тематический день', type: 'Тема дня', location: 'Павильон G, зона Interior', speakers: '', highlight: true },
    { time: '11:00', title: 'Конкурс «Интерьер года»: финальный тур и объявление победителей', type: 'Конкурс', location: 'Сцена Interior, павильон G', speakers: 'Члены жюри — топ-дизайнеры России' },
    { time: '13:00', title: 'Закупочная сессия: ритейлеры и поставщики', type: 'B2B', location: 'Деловой центр, зал 3', speakers: '' },
    { time: '15:00', title: 'Ландшафтный дизайн: городские сады и дворы будущего', type: 'Лекция', location: 'Конгресс-центр, зал B', speakers: 'Победители конкурса GreenCity 2025' },
    { time: '16:30', title: 'Мастер-класс: работа с натуральным камнем в интерьере', type: 'Мастер-класс', location: 'Digital-зона, сцена 1', speakers: 'Студия FORMA' },
  ],
  3: [
    { time: '10:00', title: 'Инвестиции в строительные проекты СЗ России', type: 'Форум', location: 'Конгресс-центр, зал A', speakers: 'Банки, фонды, девелоперы', highlight: true },
    { time: '12:00', title: 'Подведение итогов NevaBuild 2026', type: 'Пресс-конференция', location: 'Пресс-центр', speakers: 'Оргкомитет, лауреаты премий' },
    { time: '14:00', title: 'Торжественная церемония награждения NevaBuild Awards', type: 'Церемония', location: 'Атриум, павильон E', speakers: '' },
    { time: '16:00', title: 'Закрытие NevaBuild 2026', type: 'Финал', location: 'Центральная сцена', speakers: '' },
  ],
}

const typeColors: Record<string, string> = {
  'Церемония':      'bg-nb-green/10 text-nb-green-dark',
  'Форум':          'bg-blue-50 text-blue-700',
  'Тур':            'bg-amber-50 text-amber-700',
  'Дискуссия':      'bg-violet-50 text-violet-700',
  'Мастер-класс':   'bg-nb-red/8 text-nb-red',
  'Презентация':    'bg-sky-50 text-sky-700',
  'Конференция':    'bg-emerald-50 text-emerald-700',
  'Тема дня':       'bg-nb-green/10 text-nb-green-dark',
  'Конкурс':        'bg-rose-50 text-rose-700',
  'B2B':            'bg-gray-100 text-gray-700',
  'Лекция':         'bg-teal-50 text-teal-700',
  'Нетворкинг':     'bg-nb-dark/8 text-nb-dark',
  'Пресс-конференция': 'bg-gray-100 text-gray-700',
  'Финал':          'bg-nb-red/8 text-nb-red',
}

export default function ProgramPage() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="bg-nb-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 60% 40%, #0E9355, transparent)' }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="font-mulish text-white/40 text-sm hover:text-white/70 transition-colors">Главная</Link>
            <span className="text-white/25">/</span>
            <span className="font-mulish text-white/60 text-sm">Деловая программа</span>
          </div>
          <span className="font-manrope font-bold text-[11px] text-nb-green uppercase tracking-[3px] mb-4 block">
            Деловая программа
          </span>
          <h1 className="font-manrope font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}>
            200+ событий<br />
            <span className="text-nb-green">за 4 дня</span>
          </h1>
          <p className="font-mulish text-white/55 text-[17px] leading-relaxed max-w-[560px]">
            Форумы, конференции, мастер-классы, B2B-сессии и нетворкинг. Все мероприятия для специалистов строительной, дизайнерской и инженерной отраслей.
          </p>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 bg-nb-bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

          {/* Day tabs */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-1">
            {days.map(({ label, date }, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`flex-none font-manrope font-bold text-[14px] px-5 py-3 rounded-xl transition-all duration-200 ${
                  activeDay === i
                    ? 'bg-nb-red text-white shadow-lg shadow-nb-red/25'
                    : 'bg-white text-nb-dark border border-nb-border hover:border-nb-lime hover:text-nb-lime-dark'
                }`}
              >
                <span className="block">{label}</span>
                <span className={`block text-[11px] mt-0.5 ${activeDay === i ? 'text-white/70' : 'text-nb-muted'}`}>{date}</span>
              </button>
            ))}
          </div>

          {/* Events */}
          <div className="flex flex-col gap-3">
            {events[activeDay].map((ev, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border p-5 sm:p-6 flex gap-5 transition-all duration-200 hover:shadow-md group ${
                  ev.highlight ? 'border-nb-green/40 shadow-sm shadow-nb-green/5' : 'border-nb-border hover:border-nb-lime/40'
                }`}
              >
                <div className="flex-none w-16 text-right pt-0.5">
                  <span className="font-manrope font-extrabold text-[17px] text-nb-dark">{ev.time}</span>
                </div>
                <div className="w-px bg-nb-border flex-none" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 mb-2.5">
                    <span className={`font-manrope font-bold text-[11px] px-2.5 py-1 rounded-md ${typeColors[ev.type] ?? 'bg-gray-100 text-gray-600'}`}>
                      {ev.type}
                    </span>
                    {ev.highlight && (
                      <span className="font-manrope font-bold text-[11px] px-2.5 py-1 rounded-md bg-nb-green/12 text-nb-green-dark">
                        Ключевое событие
                      </span>
                    )}
                  </div>
                  <h3 className="font-manrope font-bold text-[16px] text-nb-dark leading-snug mb-3 group-hover:text-nb-lime-dark transition-colors">
                    {ev.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {ev.location && (
                      <div className="flex items-center gap-1.5 text-nb-muted">
                        <MapPin size={13} weight="fill" />
                        <span className="font-mulish text-[13px]">{ev.location}</span>
                      </div>
                    )}
                    {ev.speakers && (
                      <div className="flex items-center gap-1.5 text-nb-muted">
                        <Users size={13} weight="fill" />
                        <span className="font-mulish text-[13px]">{ev.speakers}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-none hidden sm:flex items-center">
                  <button className="font-manrope font-bold text-[12px] text-nb-green border border-nb-green/30 px-4 py-2 rounded-xl hover:bg-nb-lime hover:text-white hover:border-nb-lime transition-all duration-200">
                    + Добавить
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-between bg-white rounded-2xl border border-nb-border p-6">
            <div className="flex items-center gap-3">
              <MicrophoneStage size={24} className="text-nb-green" />
              <div>
                <div className="font-manrope font-bold text-nb-dark text-[16px]">Хотите выступить?</div>
                <div className="font-mulish text-nb-muted text-[13px]">Принимаем заявки спикеров до 1 февраля 2026</div>
              </div>
            </div>
            <Link href="/contacts"
              className="inline-flex items-center gap-2 font-manrope font-bold text-[14px] bg-nb-dark text-white px-6 py-3 rounded-xl hover:bg-nb-dark-card transition-all flex-none">
              Стать спикером <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
