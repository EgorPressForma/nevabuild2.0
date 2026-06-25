import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

const sectors = [
  {
    id: '01', name: 'Строительство',
    desc: 'Стройматериалы, конструкции, фасадные системы, кровля и изоляция',
    color: 'bg-nb-green/10 text-nb-green-dark border-nb-green/20',
    accent: 'text-nb-green',
  },
  {
    id: '02', name: 'Интерьер и дизайн',
    desc: 'Мебель, отделочные материалы, декор, освещение, текстиль',
    color: 'bg-nb-red/8 text-nb-red border-nb-red/15',
    accent: 'text-nb-red',
  },
  {
    id: '03', name: 'Инженерные системы',
    desc: 'Отопление, вентиляция, кондиционирование, электрика, сантехника',
    color: 'bg-blue-500/8 text-blue-600 border-blue-200',
    accent: 'text-blue-500',
  },
  {
    id: '04', name: 'Ландшафт и благоустройство',
    desc: 'Озеленение, малые архитектурные формы, уличное освещение',
    color: 'bg-emerald-500/8 text-emerald-700 border-emerald-200',
    accent: 'text-emerald-500',
  },
  {
    id: '05', name: 'Умный дом',
    desc: 'Автоматизация, системы безопасности, IoT-решения для жилья',
    color: 'bg-violet-500/8 text-violet-700 border-violet-200',
    accent: 'text-violet-500',
  },
  {
    id: '06', name: 'Деревянное строительство',
    desc: 'Деревянные дома, CLT-панели, срубы, каркасные технологии',
    color: 'bg-amber-500/8 text-amber-700 border-amber-200',
    accent: 'text-amber-500',
  },
  {
    id: '07', name: 'Окна и двери',
    desc: 'Профильные системы, остекление, противопожарные конструкции',
    color: 'bg-sky-500/8 text-sky-700 border-sky-200',
    accent: 'text-sky-500',
  },
  {
    id: '08', name: 'Недвижимость',
    desc: 'Застройщики, девелоперы, новые жилые проекты и коммерческая недвижимость',
    color: 'bg-nb-dark-card/5 text-nb-dark border-nb-border',
    accent: 'text-nb-dark',
  },
]

export default function Sectors() {
  return (
    <section id="sectors" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-manrope font-700 text-[13px] text-nb-teal uppercase tracking-[3px] mb-3 block">
              Разделы выставки
            </span>
            <h2 className="font-manrope font-800 text-[clamp(30px,4vw,50px)] text-nb-dark leading-tight">
              8 тематических<br/>разделов
            </h2>
          </div>
          <a
            href="#catalog"
            className="inline-flex items-center gap-2 font-manrope font-700 text-[14px] text-nb-green-dark hover:text-nb-lime border-b border-nb-green/40 hover:border-nb-lime pb-0.5 transition-all duration-200 self-start sm:self-auto"
          >
            Полный каталог участников
            <ArrowUpRight size={15} weight="bold"/>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map(({ id, name, desc, color, accent }) => (
            <a
              key={id}
              href="#sectors"
              className="group relative bg-white border border-nb-border hover:border-nb-lime/50 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-nb-green/8"
            >
              <div className="flex items-start justify-between">
                <span className={`inline-flex items-center font-manrope font-800 text-[11px] px-2.5 py-1 rounded-lg border ${color}`}>
                  {id}
                </span>
                <ArrowUpRight
                  size={16}
                  className={`${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                />
              </div>
              <div>
                <h3 className="font-manrope font-700 text-[16px] text-nb-dark mb-2 leading-snug">
                  {name}
                </h3>
                <p className="font-mulish text-[13px] text-nb-muted leading-relaxed">
                  {desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
