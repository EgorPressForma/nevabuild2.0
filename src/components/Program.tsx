'use client'
import { useState } from 'react'
import { Users, MapPin, ArrowRight } from '@phosphor-icons/react'

const ZONES = [
  { id: 'all',         label: 'Все зоны',     color: '#16221C' },
  { id: 'decorium',    label: 'Декориум',      color: '#E11B22' },
  { id: 'archlector',  label: 'АрхЛекторий',  color: '#12B669' },
  { id: 'digital',     label: 'Digital-зона',  color: '#0066cc' },
  { id: 'congress',    label: 'Конгресс-центр',color: '#7c3aed' },
]

const DAYS = [
  { label: 'День 1', date: '18 марта' },
  { label: 'День 2', date: '19 марта' },
  { label: 'День 3', date: '20 марта' },
  { label: 'День 4', date: '21 марта' },
]

type Event = {
  time: string
  title: string
  type: string
  location: string
  zone: string
  speakers?: string
}

const ALL_EVENTS: Record<number, Event[]> = {
  0: [
    { time: '10:00', title: 'Торжественное открытие NevaBuild 2027', type: 'Церемония', zone: 'congress', location: 'Конгресс-центр, зал A', speakers: 'Оргкомитет выставки' },
    { time: '11:30', title: 'Тренды интерьера 2027: цвет, фактура, свет', type: 'Лекция', zone: 'decorium', location: 'Декориум, сцена 1', speakers: 'Ведущие дизайнеры России' },
    { time: '12:00', title: 'BIM как стандарт проектирования', type: 'Мастер-класс', zone: 'digital', location: 'Digital-зона, сцена 2', speakers: 'Архитектурное бюро CITYMAKERS' },
    { time: '13:00', title: 'Пленарное заседание: архитектура Северо-Запада', type: 'Форум', zone: 'archlector', location: 'АрхЛекторий, зал B', speakers: 'Ведущие архитекторы СПб' },
    { time: '15:00', title: 'Отделочные материалы нового поколения', type: 'Презентация', zone: 'decorium', location: 'Декориум, стенд 12', speakers: 'KNAUF, CERESIT' },
    { time: '16:00', title: 'Умный дом: от проекта до реализации', type: 'Демо', zone: 'digital', location: 'Digital-зона, сцена 1', speakers: 'Яндекс Дом, HDL Automation' },
  ],
  1: [
    { time: '10:00', title: 'День архитектора: фасадные решения 2027', type: 'Форум', zone: 'archlector', location: 'АрхЛекторий, зал A', speakers: 'Архитекторы СПб и Москвы' },
    { time: '11:00', title: 'Конкурс «Интерьер года»: отборочный тур', type: 'Конкурс', zone: 'decorium', location: 'Декориум, главная сцена', speakers: 'Топ-дизайнеры России' },
    { time: '12:30', title: 'Деревянное строительство: CLT в России', type: 'Конференция', zone: 'congress', location: 'Конгресс-центр, зал C', speakers: 'SEGEZHA GROUP' },
    { time: '14:00', title: 'Визуализация и VR в дизайне интерьеров', type: 'Мастер-класс', zone: 'digital', location: 'Digital-зона, сцена 2', speakers: 'Специалисты Unreal Engine' },
    { time: '15:30', title: 'Ландшафт в контексте архитектуры', type: 'Лекция', zone: 'archlector', location: 'АрхЛекторий, зал B', speakers: 'Победители GreenCity 2026' },
    { time: '17:00', title: 'Нетворкинг-сессия для дизайнеров', type: 'Нетворкинг', zone: 'decorium', location: 'Декориум, лаундж-зона', speakers: '' },
  ],
  2: [
    { time: '10:00', title: 'Энергоэффективность в жилом строительстве', type: 'Форум', zone: 'congress', location: 'Конгресс-центр, зал A', speakers: 'ROCKWOOL, ТЕХНОНИКОЛЬ, Knauf' },
    { time: '11:00', title: 'Конкурс «Интерьер года»: финальный тур', type: 'Конкурс', zone: 'decorium', location: 'Декориум, главная сцена', speakers: 'Члены жюри — топ-дизайнеры' },
    { time: '12:00', title: 'Городская среда и публичные пространства', type: 'Дискуссия', zone: 'archlector', location: 'АрхЛекторий, зал A', speakers: 'КБ Стрелка, Megabudka' },
    { time: '14:00', title: 'AR/VR технологии в строительстве', type: 'Демо', zone: 'digital', location: 'Digital-зона, сцена 1', speakers: 'Стартапы PropTech' },
    { time: '15:30', title: 'Закупочная сессия: ритейлеры и поставщики', type: 'B2B', location: 'Деловой центр, зал 3', zone: 'congress', speakers: '' },
    { time: '16:30', title: 'Цвет в архитектуре: теория и практика', type: 'Лекция', zone: 'archlector', location: 'АрхЛекторий, зал B', speakers: 'Дизайн-бюро Planeta Design' },
  ],
  3: [
    { time: '10:00', title: 'Инвестиции в строительные проекты СЗФО', type: 'Форум', zone: 'congress', location: 'Конгресс-центр, зал A', speakers: 'Банки, фонды, девелоперы' },
    { time: '11:30', title: 'Итоговая панель: тренды 2027–2028', type: 'Конференция', zone: 'archlector', location: 'АрхЛекторий, зал A', speakers: 'Ведущие эксперты отрасли' },
    { time: '13:00', title: 'Награждение победителей «Интерьер года»', type: 'Церемония', zone: 'decorium', location: 'Декориум, главная сцена', speakers: '' },
    { time: '14:30', title: 'Финальная презентация Digital-проектов', type: 'Презентация', zone: 'digital', location: 'Digital-зона, сцена 1', speakers: 'Финалисты конкурса' },
    { time: '16:00', title: 'Торжественная церемония закрытия', type: 'Церемония', zone: 'congress', location: 'Конгресс-центр, атриум', speakers: '' },
  ],
}

const TYPE_COLORS: Record<string, string> = {
  'Церемония':    'bg-emerald-50 text-emerald-700',
  'Форум':        'bg-blue-50 text-blue-700',
  'Лекция':       'bg-teal-50 text-teal-700',
  'Мастер-класс': 'bg-orange-50 text-orange-700',
  'Конференция':  'bg-violet-50 text-violet-700',
  'Конкурс':      'bg-rose-50 text-rose-700',
  'Дискуссия':    'bg-purple-50 text-purple-700',
  'Презентация':  'bg-sky-50 text-sky-700',
  'Демо':         'bg-indigo-50 text-indigo-700',
  'Нетворкинг':   'bg-pink-50 text-pink-700',
  'B2B':          'bg-gray-100 text-gray-700',
}

const ZONE_BADGE: Record<string, string> = {
  decorium:   'bg-red-50 text-nb-red',
  archlector: 'bg-green-50 text-nb-green-dark',
  digital:    'bg-blue-50 text-blue-700',
  congress:   'bg-violet-50 text-violet-700',
}

export default function Program() {
  const [activeZone, setActiveZone] = useState('all')
  const [activeDay, setActiveDay]   = useState(0)

  const filtered = ALL_EVENTS[activeDay].filter(
    ev => activeZone === 'all' || ev.zone === activeZone
  )

  const activeZoneData = ZONES.find(z => z.id === activeZone)!

  return (
    <section id="program" className="py-20 bg-nb-bg-light">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-manrope font-700 text-[13px] text-nb-teal uppercase tracking-[3px] mb-3 block">
              Деловая программа
            </span>
            <h2 className="font-manrope font-800 text-[clamp(30px,4vw,50px)] text-nb-dark leading-tight">
              200+ событий<br/>за 4 дня
            </h2>
          </div>
          <a
            href="#program-full"
            className="inline-flex items-center gap-2 font-manrope font-700 text-[14px] text-nb-green-dark hover:text-nb-lime border-b border-nb-green/40 hover:border-nb-lime pb-0.5 transition-all duration-200 self-start sm:self-auto"
          >
            Полная программа <ArrowRight size={14} weight="bold"/>
          </a>
        </div>

        {/* Zone selector */}
        <div className="mb-6">
          <p className="font-mulish text-[11px] text-nb-muted uppercase tracking-[0.14em] mb-3">Выберите зону</p>
          <div className="flex flex-wrap gap-2">
            {ZONES.map(zone => {
              const active = activeZone === zone.id
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  className="flex items-center gap-2 font-manrope font-700 text-[13.5px] px-4 py-2 rounded-xl border transition-all duration-200"
                  style={{
                    background: active ? zone.color : 'white',
                    color:      active ? 'white' : '#16221C',
                    borderColor: active ? zone.color : '#e5e7eb',
                    boxShadow: active ? `0 4px 14px ${zone.color}33` : 'none',
                  }}
                >
                  {zone.id !== 'all' && (
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: active ? 'rgba(255,255,255,0.7)' : zone.color }}
                    />
                  )}
                  {zone.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {DAYS.map(({ label, date }, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={`flex-shrink-0 font-manrope font-700 text-[14px] px-5 py-2.5 rounded-xl transition-all duration-200 ${
                activeDay === i
                  ? 'bg-nb-dark text-white shadow-lg shadow-nb-dark/20'
                  : 'bg-white text-nb-dark border border-nb-border hover:border-nb-dark/40'
              }`}
            >
              <span>{label}</span>
              <span className={`ml-2 text-[12px] ${activeDay === i ? 'text-white/60' : 'text-nb-muted'}`}>{date}</span>
            </button>
          ))}
        </div>

        {/* Events */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-nb-muted font-mulish text-[15px]">
            В этот день в зоне «{activeZoneData.label}» событий нет
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((ev, i) => (
              <div
                key={i}
                className="bg-white border border-nb-border hover:border-nb-lime/40 rounded-2xl p-5 sm:p-6 flex gap-5 transition-all duration-200 hover:shadow-md hover:shadow-nb-green/5 group"
              >
                {/* Time */}
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-manrope font-800 text-[18px] text-nb-dark">{ev.time}</span>
                </div>

                <div className="w-px bg-nb-border flex-shrink-0"/>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`font-manrope font-700 text-[11px] px-2.5 py-1 rounded-md ${TYPE_COLORS[ev.type] ?? 'bg-gray-100 text-gray-600'}`}>
                      {ev.type}
                    </span>
                    {activeZone === 'all' && (
                      <span className={`font-manrope font-700 text-[11px] px-2.5 py-1 rounded-md ${ZONE_BADGE[ev.zone] ?? 'bg-gray-100 text-gray-600'}`}>
                        {ZONES.find(z => z.id === ev.zone)?.label}
                      </span>
                    )}
                  </div>
                  <h3 className="font-manrope font-700 text-[16px] text-nb-dark leading-snug mb-3 group-hover:text-nb-lime-dark transition-colors duration-200">
                    {ev.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {ev.location && (
                      <div className="flex items-center gap-1.5 text-nb-muted">
                        <MapPin size={13} weight="fill"/>
                        <span className="font-mulish text-[13px]">{ev.location}</span>
                      </div>
                    )}
                    {ev.speakers && (
                      <div className="flex items-center gap-1.5 text-nb-muted">
                        <Users size={13} weight="fill"/>
                        <span className="font-mulish text-[13px]">{ev.speakers}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
