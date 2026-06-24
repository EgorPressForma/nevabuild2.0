import Link from 'next/link'
import { MapPin, Phone, EnvelopeSimple, Clock, ArrowRight, Car, Train } from '@phosphor-icons/react/dist/ssr'

export const metadata = { title: 'Контакты — NevaBuild 2026' }

const contacts = [
  {
    dept: 'Для посетителей',
    email: 'visitors@nevabuild.ru',
    phone: '+7 (812) 333-44-55',
    desc: 'Регистрация, билеты, навигация по выставке',
  },
  {
    dept: 'Для экспонентов',
    email: 'exhibit@nevabuild.ru',
    phone: '+7 (812) 333-44-66',
    desc: 'Аренда стендов, маркетинговые пакеты, условия участия',
  },
  {
    dept: 'Пресс-служба',
    email: 'press@nevabuild.ru',
    phone: '+7 (812) 333-44-77',
    desc: 'Аккредитация СМИ, пресс-релизы, фото- и видеоматериалы',
  },
  {
    dept: 'Деловая программа',
    email: 'program@nevabuild.ru',
    phone: '+7 (812) 333-44-88',
    desc: 'Заявки спикеров, партнёрство, организация форумов',
  },
]

const howToGet = [
  {
    icon: <Car size={22} weight="fill" className="text-nb-green" />,
    title: 'На автомобиле',
    desc: 'КАД → выезд Петербургское шоссе, направление Пушкин. Экспофорум — 23 км от центра города. Бесплатный паркинг на 10 000 мест.',
  },
  {
    icon: <Train size={22} weight="fill" className="text-nb-green" />,
    title: 'На общественном транспорте',
    desc: 'Метро «Московская» → автобус 187 или 461. Время в пути — 35 минут. Также фирменные шаттлы от м. Купчино в дни выставки.',
  },
]

export default function ContactsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-nb-dark relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="font-mulish text-white/40 text-sm hover:text-white/70 transition-colors">Главная</Link>
            <span className="text-white/25">/</span>
            <span className="font-mulish text-white/60 text-sm">Контакты</span>
          </div>
          <span className="font-manrope font-bold text-[11px] text-nb-green uppercase tracking-[3px] mb-4 block">
            Контакты
          </span>
          <h1 className="font-manrope font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}>
            Свяжитесь с нами
          </h1>
          <p className="font-mulish text-white/55 text-[17px] leading-relaxed max-w-[500px]">
            Выберите нужный отдел — ответим в течение рабочего дня.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 bg-nb-bg-light">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contacts.map(({ dept, email, phone, desc }) => (
              <div key={dept} className="bg-white rounded-2xl border border-nb-border p-7 hover:border-nb-lime/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-nb-green/8 transition-all duration-300">
                <h3 className="font-manrope font-bold text-nb-dark text-[15px] mb-2">{dept}</h3>
                <p className="font-mulish text-nb-muted text-[13px] leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-col gap-2.5">
                  <a href={`tel:${phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-2 font-manrope font-bold text-nb-dark text-[15px] hover:text-nb-lime transition-colors">
                    <Phone size={15} className="text-nb-green flex-none" />
                    {phone}
                  </a>
                  <a href={`mailto:${email}`}
                    className="flex items-center gap-2 font-mulish text-nb-muted text-[13px] hover:text-nb-lime-dark transition-colors">
                    <EnvelopeSimple size={14} className="flex-none" />
                    {email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Address + hours */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-nb-dark rounded-2xl p-10 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} weight="fill" className="text-nb-green" />
                  <span className="font-manrope font-bold text-white text-[16px]">Адрес</span>
                </div>
                <p className="font-mulish text-white/60 text-[15px] leading-relaxed">
                  Санкт-Петербург, пос. Шушары,<br />
                  Петербургское шоссе, 64/1<br />
                  <span className="text-white/40">МВЦ «Экспофорум», павильоны E, F, G</span>
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={18} weight="fill" className="text-nb-green" />
                  <span className="font-manrope font-bold text-white text-[16px]">Время работы</span>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { day: '18–21 марта 2026', time: '10:00 – 18:00' },
                    { day: 'Офис организаторов', time: 'Пн–Пт, 9:00 – 18:00' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between gap-4">
                      <span className="font-mulish text-white/50 text-[14px]">{day}</span>
                      <span className="font-manrope font-bold text-white text-[14px]">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {howToGet.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl border border-nb-border p-7 flex gap-5">
                  <div className="flex-none pt-0.5">{icon}</div>
                  <div>
                    <h3 className="font-manrope font-bold text-nb-dark text-[16px] mb-2">{title}</h3>
                    <p className="font-mulish text-nb-muted text-[14px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-[720px] mx-auto px-6 lg:px-10">
          <span className="font-manrope font-bold text-[11px] text-nb-green uppercase tracking-[3px] mb-3 block">Напишите нам</span>
          <h2 className="font-manrope font-extrabold text-nb-dark mb-10" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
            Форма обратной связи
          </h2>
          <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-manrope font-bold text-nb-dark text-[13px] block mb-2">Имя *</label>
                <input type="text" placeholder="Иван Иванов"
                  className="w-full font-mulish text-[15px] bg-nb-bg-light border border-nb-border focus:border-nb-lime text-nb-dark placeholder-nb-muted/50 px-4 py-3 rounded-xl outline-none transition-colors" />
              </div>
              <div>
                <label className="font-manrope font-bold text-nb-dark text-[13px] block mb-2">Компания</label>
                <input type="text" placeholder="ООО «Стройпроект»"
                  className="w-full font-mulish text-[15px] bg-nb-bg-light border border-nb-border focus:border-nb-lime text-nb-dark placeholder-nb-muted/50 px-4 py-3 rounded-xl outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="font-manrope font-bold text-nb-dark text-[13px] block mb-2">E-mail *</label>
              <input type="email" placeholder="ivan@company.ru"
                className="w-full font-mulish text-[15px] bg-nb-bg-light border border-nb-border focus:border-nb-lime text-nb-dark placeholder-nb-muted/50 px-4 py-3 rounded-xl outline-none transition-colors" />
            </div>
            <div>
              <label className="font-manrope font-bold text-nb-dark text-[13px] block mb-2">Сообщение *</label>
              <textarea rows={5} placeholder="Опишите ваш вопрос..."
                className="w-full font-mulish text-[15px] bg-nb-bg-light border border-nb-border focus:border-nb-lime text-nb-dark placeholder-nb-muted/50 px-4 py-3 rounded-xl outline-none transition-colors resize-none" />
            </div>
            <button type="submit"
              className="inline-flex items-center justify-center gap-2.5 font-manrope font-extrabold text-[15px] bg-nb-red text-white px-8 py-4 rounded-xl shadow-lg shadow-nb-red/25 hover:bg-nb-red-dark hover:-translate-y-0.5 transition-all self-start">
              Отправить сообщение
              <ArrowRight size={16} weight="bold" />
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
