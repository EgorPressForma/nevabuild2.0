'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, X } from '@phosphor-icons/react'

const NAV = [
  { label: 'О выставке',        href: '/about' },
  { label: 'Посетителям',       href: '/visitors' },
  { label: 'Экспонентам',       href: '/exhibitors' },
  { label: 'Деловая программа', href: '/program' },
  { label: 'Контакты',          href: '/contacts' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [lang, setLang]         = useState<'ru' | 'en'>('ru')
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  /* Режимы: прозрачный (поверх hero) и белый (при скролле / на внутренних страницах) */
  const transparent = isHome && !scrolled

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      transparent
        ? 'bg-transparent'
        : 'bg-white shadow-[0_2px_24px_rgba(22,34,28,0.10)] border-b border-nb-border/60'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center gap-8">

        {/* Logo */}
        <Link href="/" className="flex-none group transition-opacity duration-200 hover:opacity-80">
          <img
            src="/images/logo.svg"
            alt="NevaBuild"
            height={44}
            style={{
              height: '44px',
              width: 'auto',
              filter: transparent ? 'brightness(0) invert(1)' : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`font-mulish font-semibold text-[14.5px] whitespace-nowrap px-3.5 py-2 rounded-lg transition-all duration-200 ${
                transparent
                  ? pathname === href
                    ? 'text-white bg-white/15'
                    : 'text-white/85 hover:text-white hover:bg-white/15'
                  : pathname === href
                    ? 'text-nb-green bg-nb-bg-light'
                    : 'text-nb-dark hover:text-nb-lime hover:bg-nb-bg-light'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden xl:flex items-center gap-3 flex-none">
          {/* Lang switcher */}
          <div className={`flex items-center rounded-full p-[3px] transition-colors duration-300 ${
            transparent ? 'bg-white/15' : 'bg-nb-bg-light'
          }`}>
            {(['ru', 'en'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`font-manrope font-bold text-[12.5px] px-3 py-1.5 rounded-full uppercase transition-all duration-200 ${
                  lang === l
                    ? transparent
                      ? 'bg-white text-nb-dark shadow-sm'
                      : 'bg-white text-nb-dark shadow-sm'
                    : transparent
                      ? 'text-white/70 hover:text-white'
                      : 'text-nb-muted-dark hover:text-nb-dark'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Кнопка "Забронировать стенд" */}
          <Link
            href="/exhibitors"
            className={`font-manrope font-bold text-[14px] px-6 py-3 rounded-xl transition-all duration-200 ${
              transparent
                ? 'text-white border border-white/40 hover:border-white hover:bg-white/10'
                : 'text-nb-dark border border-nb-border hover:border-nb-lime hover:text-nb-lime-dark hover:bg-nb-bg-light'
            }`}
          >
            Забронировать стенд
          </Link>

          {/* Кнопка "Получить билет" */}
          <Link
            href="/visitors"
            className={`font-manrope font-bold text-[14px] px-6 py-3 rounded-xl transition-all duration-200 ${
              transparent
                ? 'bg-nb-red text-white hover:bg-nb-red-dark shadow-[0_6px_20px_rgba(225,27,34,0.40)] hover:-translate-y-0.5'
                : 'bg-nb-red text-white hover:bg-nb-red-dark shadow-[0_6px_18px_rgba(225,27,34,0.28)] hover:-translate-y-0.5'
            }`}
          >
            Получить билет
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className={`xl:hidden ml-auto p-2 rounded-lg transition-colors ${
            transparent ? 'text-white hover:bg-white/15' : 'text-nb-dark hover:bg-nb-bg-light'
          }`}
          onClick={() => setOpen(v => !v)}
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-white border-t border-nb-border px-6 pb-6 pt-4 flex flex-col gap-1">
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`font-mulish font-semibold text-[15px] py-3 border-b border-nb-border/60 ${
                pathname === href ? 'text-nb-green' : 'text-nb-dark'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-3 pt-4">
            <Link href="/visitors" className="flex-1 text-center font-manrope font-bold text-[14px] bg-nb-red text-white py-3.5 rounded-xl">
              Получить билет
            </Link>
            <Link href="/exhibitors" className="flex-1 text-center font-manrope font-bold text-[14px] border border-nb-border text-nb-dark py-3.5 rounded-xl">
              Стенд
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
