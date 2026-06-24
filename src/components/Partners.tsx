const partners = [
  { name: 'ТЕХНОНИКОЛЬ',     src: '/images/partners/tehnonikol.svg' },
  { name: 'ROCKWOOL',        src: '/images/partners/rockwool.svg' },
  { name: 'KNAUF',           src: '/images/partners/knauf.svg' },
  { name: 'SAINT-GOBAIN',    src: '/images/partners/saint-gobain.svg' },
  { name: 'VELUX',           src: '/images/partners/velux.svg' },
  { name: 'REHAU',           src: '/images/partners/rehau.svg' },
  { name: 'GRUNDFOS',        src: '/images/partners/grundfos.svg' },
  { name: 'BOSCH',           src: '/images/partners/bosch.svg' },
  { name: 'SCHNEIDER',       src: '/images/partners/schneider.svg' },
  { name: 'ПИК',             src: '/images/partners/pik.svg' },
  { name: 'ЛСР',             src: '/images/partners/lsr.svg' },
  { name: 'SETL GROUP',      src: '/images/partners/setl.svg' },
  { name: 'ЭТАЛОН',          src: '/images/partners/etalon.svg' },
]

const doubled = [...partners, ...partners]

export default function Partners() {
  return (
    <section className="py-16 bg-nb-bg-light border-y border-nb-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="font-manrope font-700 text-[11px] text-nb-muted uppercase tracking-[3px]">
            Генеральные партнёры и спонсоры
          </span>
          <a
            href="#partners"
            className="font-manrope font-700 text-[13px] text-nb-green-dark hover:text-nb-green border-b border-nb-green/30 pb-0.5 transition-colors duration-200 self-start sm:self-auto"
          >
            Стать партнёром
          </a>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-nb-bg-light to-transparent z-10 pointer-events-none"/>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-nb-bg-light to-transparent z-10 pointer-events-none"/>
        <div className="flex animate-scroll-x" style={{ width: 'max-content' }}>
          {doubled.map(({ name, src }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 mx-4 flex items-center justify-center h-16 bg-white border border-nb-border rounded-xl hover:border-nb-lime hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
              style={{ width: '160px' }}
            >
              <img
                src={src}
                alt={name}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
