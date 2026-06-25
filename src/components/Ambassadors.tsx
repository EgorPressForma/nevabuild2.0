'use client'

const ROW1 = [
  { name: 'Александра Федорова',   role: 'LINES Design',         initials: 'АФ', bio: 'Основатель и арт-директор LINES Design. 15 лет в индустрии интерьерного дизайна, лауреат премии AD100.' },
  { name: 'Борис Уборевич',        role: 'Архитектурное бюро',   initials: 'БУ', bio: 'Главный архитектор. Реализовал более 200 проектов жилой и коммерческой недвижимости по всей России.' },
  { name: 'Михаил Шапошников',     role: 'MLA+',                 initials: 'МШ', bio: 'Партнёр международного бюро MLA+. Специализируется на урбанистике и мастер-планировании городских кварталов.' },
  { name: 'Диана Балашова',        role: 'DB Studio',            initials: 'ДБ', bio: 'Дизайнер интерьеров с мировым именем. Её проекты публикуются в Architectural Digest и Elle Decoration.' },
  { name: 'Артемий Лебедев',       role: 'Студия Лебедева',      initials: 'АЛ', bio: 'Основатель крупнейшей дизайн-студии России. Автор знаковых брендов, навигации и объектов городской среды.' },
  { name: 'Алексей Дорожкин',      role: 'Генеральный директор', initials: 'АД', bio: 'Генеральный директор девелоперской группы. Реализовал жилые проекты общей площадью более 1 млн м².' },
  { name: 'Line Design Studio',    role: 'Дизайн-студия',        initials: 'LD', bio: 'Команда архитекторов и дизайнеров из Санкт-Петербурга. Работают в стиле северного минимализма.' },
]

const ROW2 = [
  { name: 'Валерий Лизунов',       role: 'ZROBIM Architects',    initials: 'ВЛ', bio: 'Руководитель ZROBIM Architects. Эксперт в области параметрического проектирования и BIM-технологий.' },
  { name: 'Виктор Дембовский',     role: 'KAZI Architects',      initials: 'ВД', bio: 'Сооснователь бюро KAZI. Проекты реализованы в 12 странах, победитель международных архитектурных конкурсов.' },
  { name: 'Сергей Трегубов',       role: 'Архитектор',           initials: 'СТ', bio: 'Независимый архитектор и преподаватель. Член Союза архитекторов России, спикер профессиональных конференций.' },
  { name: 'Елена Паунич',          role: 'Дизайн-студия',        initials: 'ЕП', bio: 'Основатель студии жилого дизайна. Специализация — luxury-интерьеры и объекты гостиничной недвижимости.' },
  { name: 'Анастасия Панибратова', role: 'Line Design Studio',   initials: 'АП', bio: 'Со-основатель Line Design Studio. Куратор образовательных программ по дизайну интерьера в Северной столице.' },
  { name: 'Олег Клодт',            role: 'Oleg Kladt Design',    initials: 'ОК', bio: 'Один из самых известных дизайнеров России. Создаёт интерьеры для резиденций, яхт и частных самолётов.' },
  { name: 'Бюро А4',               role: 'Архитектурное бюро',   initials: 'А4', bio: 'Молодое архитектурное бюро с нестандартным взглядом на городскую среду. Резиденты Стрелки-2023.' },
]

function AmbCard({ name, role, initials, bio }: typeof ROW1[0]) {
  return (
    <div
      className="flex-shrink-0 w-[200px] group"
      style={{ perspective: '900px' }}
    >
      {/* Flip container */}
      <div
        className="relative w-full mb-3"
        style={{
          height: '260px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-nb-border"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'linear-gradient(160deg, #666 0%, #2a2a2a 100%)',
            filter: 'grayscale(1)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-manrope font-900 text-white/20 select-none" style={{ fontSize: '52px' }}>
              {initials}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="font-manrope font-800 text-white text-[13px] leading-snug">{name}</p>
            <p className="font-mulish text-white/60 text-[11px] mt-0.5">{role}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col justify-center p-5"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #16221C 0%, #0d1810 100%)',
          }}
        >
          <div className="w-8 h-[2px] bg-nb-lime mb-4" />
          <p className="font-manrope font-900 text-white text-[15px] leading-snug mb-1">{name}</p>
          <p className="font-mulish text-nb-lime text-[11px] mb-4 uppercase tracking-wide">{role}</p>
          <p className="font-mulish text-white/65 text-[12px] leading-relaxed">{bio}</p>
        </div>

        {/* CSS flip on hover via sibling trick — applied via group */}
        <style>{`
          .amb-card:hover .amb-inner { transform: rotateY(180deg); }
        `}</style>
      </div>

      <p className="font-manrope font-800 text-nb-dark text-[13px] leading-snug mb-0.5 truncate">{name}</p>
      <p className="font-mulish text-nb-muted text-[11px]">{role}</p>
    </div>
  )
}

function ScrollRow({ items, speed }: { items: typeof ROW1; speed: string }) {
  const doubled = [...items, ...items]
  return (
    <div
      className="flex gap-4 amb-row"
      style={{
        animation: `scrollX ${speed} linear infinite`,
        width: 'max-content',
      }}
    >
      {doubled.map((a, i) => (
        <div
          key={`${a.name}-${i}`}
          className="flex-shrink-0 w-[200px] cursor-pointer amb-card"
          style={{ perspective: '900px' }}
          onMouseEnter={e => {
            const row = (e.currentTarget.closest('.amb-row') as HTMLElement)
            if (row) row.style.animationPlayState = 'paused'
            const inner = e.currentTarget.querySelector('.amb-inner') as HTMLElement
            if (inner) inner.style.transform = 'rotateY(180deg)'
          }}
          onMouseLeave={e => {
            const row = (e.currentTarget.closest('.amb-row') as HTMLElement)
            if (row) row.style.animationPlayState = 'running'
            const inner = e.currentTarget.querySelector('.amb-inner') as HTMLElement
            if (inner) inner.style.transform = 'rotateY(0deg)'
          }}
        >
          {/* Flip inner */}
          <div
            className="amb-inner relative w-full mb-3"
            style={{
              height: '260px',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)',
            }}
          >
            {/* FRONT */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden border border-nb-border"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                background: 'linear-gradient(160deg, #777 0%, #333 100%)',
                filter: 'grayscale(1)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-manrope font-900 text-white/20 select-none" style={{ fontSize: '52px' }}>
                  {a.initials}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/50 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-manrope font-800 text-white text-[13px] leading-snug">{a.name}</p>
                <p className="font-mulish text-white/60 text-[11px] mt-0.5">{a.role}</p>
              </div>
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0 rounded-2xl flex flex-col justify-center p-5"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                background: 'linear-gradient(135deg, #16221C 0%, #0d1810 100%)',
              }}
            >
              <div className="w-8 h-[2px] bg-nb-lime mb-3 flex-shrink-0" />
              <p className="font-manrope font-900 text-white text-[14px] leading-snug mb-1 flex-shrink-0">{a.name}</p>
              <p className="font-mulish text-nb-lime text-[10px] mb-3 uppercase tracking-wide flex-shrink-0">{a.role}</p>
              <p className="font-mulish text-white/65 text-[12px] leading-relaxed">{a.bio}</p>
            </div>
          </div>

          {/* Below card */}
          <p className="font-manrope font-800 text-nb-dark text-[13px] leading-snug mb-0.5 truncate">{a.name}</p>
          <p className="font-mulish text-nb-muted text-[11px]">{a.role}</p>
        </div>
      ))}
    </div>
  )
}

export default function Ambassadors() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Dot texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #16221C 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Title */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="font-manrope font-700 text-[13px] text-nb-teal uppercase tracking-[3px] mb-3 block">
              NevaBuild 2027
            </span>
            <h2
              className="font-manrope font-900 text-nb-dark leading-tight"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              Амбассадоры
            </h2>
          </div>
          <a
            href="/about"
            className="inline-flex items-center gap-2 font-manrope font-800 text-[14px] px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 self-start sm:self-auto flex-shrink-0"
            style={{ background: '#a9ec46', color: '#0d2d06', boxShadow: '0 8px 24px rgba(169,236,70,0.25)' }}
          >
            Стать амбассадором
          </a>
        </div>
      </div>

      {/* Two rows — no side fades */}
      <div className="flex flex-col gap-5 overflow-hidden">
        <div className="overflow-hidden px-6 lg:px-10">
          <ScrollRow items={ROW1} speed="55s" />
        </div>
        <div className="overflow-hidden px-6 lg:px-10">
          <ScrollRow items={ROW2} speed="70s" />
        </div>
      </div>
    </section>
  )
}
