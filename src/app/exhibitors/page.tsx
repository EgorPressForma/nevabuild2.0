import Link from 'next/link'
import { CheckCircle, ArrowRight, ChartBar, Handshake, MegaphoneSimple, Buildings } from '@phosphor-icons/react/dist/ssr'

export const metadata = { title: 'Экспонентам — NevaBuild 2026' }

const packages = [
  {
    name: 'Стартовый',
    area: 'от 9 м²',
    price: 'от 85 000 ₽',
    features: ['Застроенный стенд', 'Включено в каталог', '2 пропуска экспонента', 'Базовое освещение'],
    accent: 'border-nb-border',
    btn: 'border border-nb-border text-nb-dark hover:border-nb-lime hover:text-nb-lime',
  },
  {
    name: 'Бизнес',
    area: '18–36 м²',
    price: 'от 210 000 ₽',
    features: ['Индивидуальный дизайн стенда', 'Маркетинговый пакет', '5 пропусков экспонента', 'Участие в 1 панели', 'Страница в онлайн-каталоге', 'Баннер в e-mail рассылке'],
    accent: 'border-nb-green ring-1 ring-nb-green/25',
    btn: 'bg-nb-green text-white hover:bg-nb-lime-dark',
    badge: 'Рекомендуем',
  },
  {
    name: 'Премиум / Генеральный партнёр',
    area: 'от 72 м²',
    price: 'Индивидуально',
    features: ['VIP-расположение у входа', 'Логотип на всех материалах', 'Неограниченные пропуска', 'Организация собственного форума', 'Пресс-конференция на площадке', 'Matchmaking VIP-сессии'],
    accent: 'border-nb-red ring-1 ring-nb-red/20',
    btn: 'bg-nb-red text-white hover:bg-nb-red-dark',
  },
]

const benefits = [
  { icon: <ChartBar size={28} weight="fill" className="text-nb-green" />, title: 'Прямой выход на ЛПР', desc: '80% посетителей — лица, принимающие решения о закупках.' },
  { icon: <Handshake size={28} weight="fill" className="text-nb-green" />, title: 'Matchmaking-платформа', desc: 'Договоритесь о встречах до открытия выставки.' },
  { icon: <MegaphoneSimple size={28} weight="fill" className="text-nb-green" />, title: 'Медиаохват', desc: 'Рекламная кампания охватывает 500 000+ специалистов отрасли.' },
  { icon: <Buildings size={28} weight="fill" className="text-nb-green" />, title: '60 000 м² экспозиции', desc: 'Три павильона, тематические кластеры, высокий трафик.' },
]

export default function ExhibitorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-nb-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 20% 50%, #E11B22, transparent)' }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="font-mulish text-white/40 text-sm hover:text-white/70 transition-colors">Главная</Link>
            <span className="text-white/25">/</span>
            <span className="font-mulish text-white/60 text-sm">Экспонентам</span>
          </div>
          <span className="font-manrope font-bold text-[13px] text-nb-teal uppercase tracking-[3px] mb-4 block">
            Экспонентам
          </span>
          <h1 className="font-manrope font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}>
            Представьте бренд<br />
            <span className="text-nb-red">40 000 профессионалам</span>
          </h1>
          <p className="font-mulish text-white/55 text-[17px] leading-relaxed max-w-[560px] mb-10">
            NevaBuild — главная B2B-площадка строительной отрасли Северо-Запада. Стенды любого формата. Заявки, партнёрства и продажи прямо на выставке.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#packages"
              className="inline-flex items-center gap-2.5 font-manrope font-extrabold text-[15px] bg-nb-red text-white px-7 py-4 rounded-2xl shadow-lg shadow-nb-red/30 hover:bg-nb-red-dark hover:-translate-y-0.5 transition-all">
              Забронировать стенд
              <ArrowRight size={16} weight="bold" />
            </a>
            <a href="#benefits"
              className="inline-flex items-center gap-2.5 font-manrope font-extrabold text-[15px] text-white border border-white/30 px-7 py-4 rounded-2xl hover:bg-white/8 transition-all">
              Почему NevaBuild?
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="font-manrope font-bold text-[13px] text-nb-teal uppercase tracking-[3px] mb-3 block">Преимущества</span>
          <h2 className="font-manrope font-extrabold text-nb-dark mb-14" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Зачем участвовать
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon, title, desc }) => (
              <div key={title} className="p-8 rounded-2xl border border-nb-border hover:border-nb-lime/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-nb-green/8 transition-all duration-300">
                <div className="mb-5">{icon}</div>
                <h3 className="font-manrope font-bold text-[17px] text-nb-dark mb-3">{title}</h3>
                <p className="font-mulish text-[14px] text-nb-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 bg-nb-bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <span className="font-manrope font-bold text-[13px] text-nb-teal uppercase tracking-[3px] mb-3 block">Пакеты участия</span>
          <h2 className="font-manrope font-extrabold text-nb-dark mb-14" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Выберите формат стенда
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map(({ name, area, price, features, accent, btn, badge }) => (
              <div key={name} className={`relative rounded-2xl border-2 bg-white p-8 flex flex-col ${accent}`}>
                {badge && (
                  <span className="absolute -top-3 left-6 font-manrope font-bold text-[11px] bg-nb-green text-white px-3 py-1 rounded-full">
                    {badge}
                  </span>
                )}
                <div className="mb-2">
                  <span className="font-manrope font-bold text-nb-muted text-[12px] uppercase tracking-wider">{area}</span>
                </div>
                <h3 className="font-manrope font-extrabold text-nb-dark text-[22px] mb-1">{name}</h3>
                <div className="font-manrope font-extrabold text-nb-dark mb-7" style={{ fontSize: 'clamp(22px,2.5vw,28px)' }}>
                  {price}
                </div>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle size={16} weight="fill" className="text-nb-green flex-none mt-0.5" />
                      <span className="font-mulish text-[14px] text-nb-dark/70">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`font-manrope font-extrabold text-[14.5px] py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${btn}`}>
                  Подать заявку
                </button>
              </div>
            ))}
          </div>
          <p className="text-center font-mulish text-nb-muted text-[14px] mt-8">
            Нужен нестандартный формат? <a href="/contacts" className="text-nb-green-dark underline hover:text-nb-lime">Свяжитесь с нами</a> — найдём решение.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-nb-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, #E11B22, transparent)' }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <h2 className="font-manrope font-extrabold text-white mb-6" style={{ fontSize: 'clamp(32px,5vw,60px)' }}>
            Осталось <span className="text-nb-red">ограниченное</span><br />количество стендов
          </h2>
          <p className="font-mulish text-white/50 text-[17px] max-w-[520px] mx-auto mb-10 leading-relaxed">
            Лучшие места в проходных зонах бронируются первыми. Отправьте заявку сейчас — менеджер свяжется в течение часа.
          </p>
          <a href="mailto:exhibit@nevabuild.ru"
            className="inline-flex items-center gap-3 font-manrope font-extrabold text-[16px] bg-nb-red text-white px-9 py-4 rounded-2xl shadow-xl shadow-nb-red/35 hover:bg-nb-red-dark hover:-translate-y-1 transition-all">
            Отправить заявку
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>
      </section>
    </>
  )
}
