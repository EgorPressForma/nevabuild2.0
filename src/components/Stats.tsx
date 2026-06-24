const stats = [
  { value: '40 000+', label: 'посетителей',        sub: 'за 4 дня' },
  { value: '800+',    label: 'экспонентов',         sub: 'из 35 стран' },
  { value: '60 000',  label: 'м² экспозиции',       sub: 'в 3 павильонах' },
  { value: '70+',     label: 'стран-участниц',      sub: 'в этом году' },
  { value: '200+',    label: 'деловых событий',     sub: 'форумы и мастер-классы' },
]

export default function Stats() {
  return (
    <section className="bg-nb-dark">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-white/8">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="py-10 px-6 lg:px-8 flex flex-col group cursor-default">
              <span className="font-manrope font-extrabold text-[clamp(28px,3.5vw,44px)] text-white leading-none mb-1.5 group-hover:text-nb-lime transition-colors duration-300">
                {value}
              </span>
              <span className="font-mulish font-semibold text-[14px] text-white/60 mb-0.5">{label}</span>
              <span className="font-mulish text-[12px] text-white/28">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
