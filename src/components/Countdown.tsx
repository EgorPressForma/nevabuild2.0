'use client'
import { useEffect, useState } from 'react'

const EVENT_DATE = new Date('2026-03-17T10:00:00')

function pad(n: number) { return String(n).padStart(2, '0') }

export default function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, EVENT_DATE.getTime() - Date.now())
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff % 86400000) / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTime({ d, h, m, s })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: pad(time.d),  label: 'дней' },
    { value: pad(time.h),  label: 'часов' },
    { value: pad(time.m),  label: 'минут' },
    { value: pad(time.s),  label: 'секунд' },
  ]

  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {units.map(({ value, label }, i) => (
        <div key={label} className="flex items-center gap-3 sm:gap-5">
          <div className="text-center">
            <div className="font-manrope font-800 text-[38px] sm:text-[52px] leading-none text-white tabular-nums">
              {value}
            </div>
            <div className="font-mulish text-[11px] sm:text-[13px] text-white/50 mt-1 uppercase tracking-widest">
              {label}
            </div>
          </div>
          {i < 3 && (
            <span className="font-manrope font-800 text-[32px] sm:text-[44px] text-nb-green leading-none mb-3">:</span>
          )}
        </div>
      ))}
    </div>
  )
}
