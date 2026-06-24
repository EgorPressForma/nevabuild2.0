'use client'
import { MapPin, Phone, EnvelopeSimple } from '@phosphor-icons/react'

const cols = [
  {
    title: 'Посетителям',
    links: ['Регистрация', 'Как добраться', 'Деловая программа', 'Разделы выставки', 'FAQ'],
  },
  {
    title: 'Экспонентам',
    links: ['Условия участия', 'Прайс-лист на стенды', 'Маркетинговые пакеты', 'Онлайн-каталог', 'Логистика'],
  },
  {
    title: 'О выставке',
    links: ['История NevaBuild', 'Команда', 'Медиапартнёры', 'Пресс-материалы', 'Контакты'],
  },
]

export default function Footer() {
  return (
    <footer id="contacts" className="bg-nb-dark-deep">

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-[1fr_2fr_1fr] gap-12">

        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-8 h-8 rounded-lg bg-nb-green flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="9" width="5" height="7" rx="1" fill="#fff"/>
                <rect x="9" y="5" width="5" height="11" rx="1" fill="#fff"/>
                <rect x="2" y="2" width="5" height="5" rx="1" fill="rgba(255,255,255,0.5)"/>
              </svg>
            </span>
            <span className="font-manrope font-800 text-[20px] text-white tracking-tight">
              Neva<span className="text-nb-green">Build</span>
            </span>
          </div>
          <p className="font-mulish text-[14px] text-nb-muted leading-relaxed mb-8 max-w-[260px]">
            Крупнейшая строительно-интерьерная выставка Северо-Западного федерального округа. С 2009 года.
          </p>

          {/* Contacts */}
          <div className="flex flex-col gap-3 mb-8">
            <a href="tel:+78123334455" className="flex items-center gap-2.5 text-white font-manrope font-700 text-[16px] hover:text-nb-lime-muted transition-colors duration-200">
              <Phone size={15} className="text-nb-muted flex-shrink-0"/>
              +7 (812) 333-44-55
            </a>
            <a href="mailto:info@nevabuild.ru" className="flex items-center gap-2.5 text-nb-muted hover:text-nb-lime-muted font-mulish text-[14px] transition-colors duration-200">
              <EnvelopeSimple size={15} className="flex-shrink-0"/>
              info@nevabuild.ru
            </a>
            <div className="flex items-start gap-2.5 text-nb-muted font-mulish text-[14px]">
              <MapPin size={15} className="flex-shrink-0 mt-0.5"/>
              <span>Санкт-Петербург, пос. Шушары,<br/>Петербургское ш., 64/1, Экспофорум</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-2">
            {['ВК', 'TG', 'YT', 'ОК'].map(s => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-nb-lime flex items-center justify-center font-manrope font-700 text-[11px] text-nb-muted hover:text-white transition-all duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid sm:grid-cols-3 gap-8">
          {cols.map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-manrope font-700 text-[13px] text-white uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-mulish text-[14px] text-nb-muted hover:text-nb-lime-muted transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-manrope font-700 text-[13px] text-white uppercase tracking-wider mb-4">
            Следите за новостями
          </h4>
          <p className="font-mulish text-[13px] text-nb-muted mb-5 leading-relaxed">
            Анонсы мероприятий, акции ранней регистрации и новости рынка — на вашу почту.
          </p>
          <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="ваш@email.ru"
              className="font-mulish text-[14px] bg-white/8 border border-white/12 focus:border-nb-lime text-white placeholder-nb-muted/50 px-4 py-3 rounded-xl outline-none transition-colors duration-200 w-full"
            />
            <button
              type="submit"
              className="font-manrope font-800 text-[14px] bg-nb-red hover:bg-nb-red-dark text-white py-3 px-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Подписаться
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mulish text-[13px] text-nb-muted/60">
            © 2009–2026 NevaBuild. Все права защищены.
          </span>
          <div className="flex gap-5">
            {['Политика конфиденциальности', 'Условия использования', 'Карта сайта'].map(l => (
              <a key={l} href="#" className="font-mulish text-[12px] text-nb-muted/50 hover:text-nb-muted transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
