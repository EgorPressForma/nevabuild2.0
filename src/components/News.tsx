import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

const news = [
  {
    tag: 'Анонс',
    date: '12 января 2026',
    title: 'NevaBuild 2026 откроется в обновлённых павильонах Экспофорума',
    desc: 'В этом году организаторы расширяют площадь экспозиции на 15% и запускают новую интерактивную зону цифровых технологий в строительстве.',
    tagColor: 'bg-nb-green/12 text-nb-green-dark',
  },
  {
    tag: 'Участники',
    date: '5 января 2026',
    title: 'Более 800 компаний подтвердили участие в выставке',
    desc: 'Рекордное число экспонентов: впервые в истории NevaBuild участие подтвердили национальные экспозиции 12 европейских стран.',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    tag: 'Деловая программа',
    date: '28 декабря 2025',
    title: 'Стал известен состав спикеров пленарного заседания 2026',
    desc: 'Форум «Строительство России: вызовы и возможности» объединит министра строительства РФ, ведущих девелоперов и инвесторов.',
    tagColor: 'bg-nb-red/8 text-nb-red',
  },
]

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-manrope font-700 text-[13px] text-nb-teal uppercase tracking-[3px] mb-3 block">
              Новости
            </span>
            <h2 className="font-manrope font-800 text-[clamp(30px,4vw,50px)] text-nb-dark leading-tight">
              Последние обновления
            </h2>
          </div>
          <a
            href="#news"
            className="inline-flex items-center gap-2 font-manrope font-700 text-[14px] text-nb-green-dark hover:text-nb-lime border-b border-nb-green/40 hover:border-nb-lime pb-0.5 transition-all duration-200 self-start sm:self-auto"
          >
            Все новости
            <ArrowRight size={14} weight="bold"/>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map(({ tag, date, title, desc, tagColor }, i) => (
            <a
              key={i}
              href="#news"
              className="group flex flex-col border border-nb-border hover:border-nb-lime/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-nb-green/8"
            >
              {/* Image placeholder */}
              <div className="h-[200px] bg-gradient-to-br from-nb-bg-light to-nb-bg-lighter flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-nb-green/5 to-transparent"/>
                <span className="font-manrope font-800 text-[80px] text-nb-green/8 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight
                  size={20}
                  className="absolute top-4 right-4 text-nb-green opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-manrope font-700 text-[11px] px-2.5 py-1 rounded-md ${tagColor}`}>
                    {tag}
                  </span>
                  <span className="font-mulish text-[12px] text-nb-muted">{date}</span>
                </div>
                <h3 className="font-manrope font-700 text-[17px] text-nb-dark leading-snug mb-3 group-hover:text-nb-lime-dark transition-colors duration-200">
                  {title}
                </h3>
                <p className="font-mulish text-[14px] text-nb-muted leading-relaxed flex-1">
                  {desc}
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-nb-green font-manrope font-700 text-[13px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Читать далее <ArrowRight size={13} weight="bold"/>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
