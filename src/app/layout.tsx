import type { Metadata } from 'next'
import { Manrope, Mulish } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-mulish',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NevaBuild 2026 — Международная строительная выставка',
  description: 'NevaBuild 2026 — ведущая строительно-интерьерная выставка Северо-Запада. 18–21 марта, ЭкспоФорум, Санкт-Петербург.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${mulish.variable}`}>
      <body className="font-mulish text-nb-dark bg-white">
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
