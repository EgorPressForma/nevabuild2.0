'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CaretLeft, CaretRight, MapPin, Calendar, ArrowRight } from '@phosphor-icons/react'

/* ── Дата события — обновите под реальную ── */
const EVENT_DATE = new Date('2027-03-18T10:00:00')

const SLIDES = [
  {
    id: 0,
    image: '/images/hero-1.jpg',
    overlay: 'linear-gradient(90deg, rgba(10,18,12,0.62) 0%, rgba(10,18,12,0.38) 60%, rgba(10,18,12,0.08) 100%)',
    accentGlow: 'radial-gradient(ellipse 50% 70% at 5% 50%, rgba(18,182,105,0.22) 0%, transparent 60%)',
    label: 'САНКТ-ПЕТЕРБУРГ · ЭКСПОФОРУМ',
    title: ['NEVA', 'BUILD', '2027'],
    titleAccent: 1,
    subtitle: 'Международная строительно-интерьерная выставка Северо-Западного региона',
    cta1: { text: 'Зарегистрироваться', href: '/visitors' },
    cta2: { text: 'Стать экспонентом', href: '/exhibitors' },
  },
  {
    id: 1,
    image: '/images/hero-2.jpg',
    overlay: 'linear-gradient(90deg, rgba(8,12,20,0.65) 0%, rgba(8,12,20,0.40) 55%, rgba(8,12,20,0.08) 100%)',
    accentGlow: 'radial-gradient(ellipse 40% 60% at 5% 60%, rgba(18,182,105,0.15) 0%, transparent 55%)',
    label: '500+ КОМПАНИЙ · 25 000 м² · 35 СТРАН',
    title: ['ГЛАВНАЯ', 'ПЛОЩАДКА', 'ОТРАСЛИ'],
    titleAccent: -1,
    subtitle: 'Застройщики, дизайнеры, инженеры и поставщики материалов — все под одной крышей',
    cta1: { text: 'Посетить выставку', href: '/visitors' },
    cta2: { text: 'Деловая программа', href: '/program' },
  },
  {
    id: 2,
    image: '/images/hero-3.jpg',
    overlay: 'linear-gradient(90deg, rgba(12,8,10,0.68) 0%, rgba(12,8,10,0.42) 55%, rgba(12,8,10,0.08) 100%)',
    accentGlow: 'radial-gradient(ellipse 45% 65% at 5% 50%, rgba(225,27,34,0.12) 0%, transparent 55%)',
    label: '40+ КОНФЕРЕНЦИЙ И МАСТЕР-КЛАССОВ',
    title: ['ТЕХНОЛОГИИ', 'БУДУЩЕГО', 'СЕГОДНЯ'],
    titleAccent: -1,
    subtitle: 'Практические конференции, воркшопы и живые демонстрации инновационных решений',
    cta1: { text: 'Программа мероприятий', href: '/program' },
    cta2: { text: 'Стать спикером', href: '/about' },
  },
]

function pad(n: number) { return String(n).padStart(2, '0') }

function Countdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    function calc() {
      const diff = EVENT_DATE.getTime() - Date.now()
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      return {
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      }
    }
    setT(calc())
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  const items = [
    { val: t.days,    label: 'дней' },
    { val: t.hours,   label: 'часов' },
    { val: t.minutes, label: 'минут' },
    { val: t.seconds, label: 'сек' },
  ]

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {items.map(({ val, label }, i) => (
        <div key={label} className="flex items-center gap-2 md:gap-4">
          <div className="text-center min-w-[52px]">
            <div
              className="font-manrope font-extrabold text-white tabular-nums leading-none"
              style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
            >
              {pad(val)}
            </div>
            <div className="font-mulish text-white text-[10px] mt-1 uppercase tracking-wider">{label}</div>
          </div>
          {i < items.length - 1 && (
            <span className="font-manrope font-bold text-white text-xl mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((idx: number) => {
    if (fading) return
    setFading(true)
    setTimeout(() => { setCurrent(idx); setFading(false) }, 400)
  }, [fading])

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo])

  useEffect(() => {
    const id = setInterval(next, 6500)
    return () => clearInterval(id)
  }, [next])

  const slide = SLIDES[current]
  const opacity = fading ? 0 : 1

  return (
    <section
      className="relative flex flex-col overflow-hidden bg-nb-dark -mt-[72px]"
      style={{ minHeight: '100dvh' }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <Image
          src={slide.image}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay — текст читаем */}
      <div className="absolute inset-0 transition-all duration-700" style={{ background: slide.overlay }} />

      {/* Accent glow */}
      <div className="absolute inset-0 transition-all duration-700" style={{ background: slide.accentGlow }} />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #12B669 35%, #12B669 65%, transparent 100%)' }} />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 w-full pt-[88px] pb-6">
          <div className="max-w-[680px]">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full transition-opacity duration-400"
              style={{
                background: 'rgba(18,182,105,0.12)',
                border: '1px solid rgba(18,182,105,0.28)',
                opacity,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-nb-green animate-pulse" />
              <span className="font-manrope font-bold text-nb-green-muted text-[11px] tracking-[0.14em] uppercase">
                {slide.label}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-manrope font-extrabold leading-[0.88] tracking-tighter text-white mb-4 transition-all duration-400"
              style={{
                fontSize: 'clamp(38px, 5.5vw, 80px)',
                opacity,
                transform: fading ? 'translateY(16px)' : 'translateY(0)',
              }}
            >
              {slide.title.map((word, i) => (
                <span key={i} className="block" style={{ color: i === slide.titleAccent ? '#12B669' : '#fff' }}>
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className="font-mulish text-white mb-5 leading-relaxed transition-opacity duration-400"
              style={{ fontSize: 'clamp(13px, 1.4vw, 16px)', maxWidth: '520px', opacity }}
            >
              {slide.subtitle}
            </p>

            {/* Date + location */}
            <div className="flex flex-wrap gap-2 mb-5" style={{ opacity }}>
              {[
                { icon: <Calendar size={13} weight="fill" className="text-nb-green" />, text: '18–21 марта 2027' },
                { icon: <MapPin size={13} weight="fill" className="text-nb-green" />, text: 'ЭкспоФорум, Санкт-Петербург' },
              ].map(({ icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 font-mulish font-semibold text-[13px] text-white px-3 py-2 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {icon} {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={{ opacity }}>
              <Link href={slide.cta1.href}
                className="inline-flex items-center gap-2 font-manrope font-extrabold text-[14px] bg-white text-nb-red px-5 py-3 rounded-xl hover:-translate-y-0.5 transition-all duration-200"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.22)' }}>
                {slide.cta1.text} <ArrowRight size={15} weight="bold" />
              </Link>
              <Link href={slide.cta2.href}
                className="inline-flex items-center gap-2 font-manrope font-extrabold text-[14px] text-white px-5 py-3 rounded-xl border hover:bg-white/10 transition-all duration-200"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                {slide.cta2.text}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── COUNTDOWN — внутри hero, над Stats ── */}
      <div className="relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.2)' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-5 flex items-center gap-8 flex-wrap">
          <span className="font-mulish font-semibold text-white text-[11px] uppercase tracking-[0.18em] flex-none">
            До открытия выставки:
          </span>
          <Countdown />

          {/* Dots — внутри countdown strip */}
          <div className="flex items-center gap-2 ml-auto">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Слайд ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width:  i === current ? '24px' : '8px',
                  height: '8px',
                  background: i === current ? '#E11B22' : 'rgba(255,255,255,0.35)',
                }}
              />
            ))}
            {/* Arrows */}
            <button onClick={prev} aria-label="Назад"
              className="ml-3 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <CaretLeft size={14} weight="bold" />
            </button>
            <button onClick={next} aria-label="Вперёд"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-all"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <CaretRight size={14} weight="bold" />
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}
