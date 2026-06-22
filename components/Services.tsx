'use client';

const SERVICES = [
  {
    flag: '🇩🇪',
    title: 'Робота в Німеччині',
    salary: '1800–3000€',
    types: 'Збір / Склади / Заводи / Теплиці / Ресторани',
    desc: 'Одна з найкращих країн для заробітку в ЄС. Офіційний контракт + житло від роботодавця.',
  },
  {
    flag: '🇳🇱',
    title: 'Робота в Нідерландах',
    salary: '1600–2500€',
    types: 'Збір квітів, овочів та ягід',
    desc: 'Топ напрямок серед наших клієнтів. Робота на свіжому повітрі, житло та харчування часто включені.',
    highlight: true,
  },
  {
    flag: '🇫🇷',
    title: 'Робота у Франції',
    salary: '1400–2000€',
    types: 'Збір грибів, винограду та овочів',
    desc: 'Сезонна та постійна робота. Природа, клімат — і гідна зарплата.',
  },
  {
    flag: '🇵🇱🇨🇿',
    title: 'Польща / Чехія',
    salary: '1200–1800€',
    types: 'Склади / Виробництво / Готелі / Збір',
    desc: 'Найближчі країни — найшвидший виїзд. Можливий вже за 1–2 тижні.',
  },
  {
    flag: '🇮🇹🇬🇷',
    title: 'Італія / Греція',
    salary: '1300–2000€',
    types: 'Готелі / Ресторани / Збір / Теплиці',
    desc: 'Робота біля моря — це реально. Тепло, красиво і офіційно.',
  },
  {
    flag: '🇫🇮🇸🇪',
    title: 'Фінляндія / Швеція',
    salary: '1800–2800€',
    types: 'Збір ягід / Ферми / Виробництво',
    desc: 'Північ — це великі гроші. Чисто, безпечно, офіційно.',
  },
  {
    flag: '🇦🇹',
    title: 'Робота в Австрії',
    salary: '1600–2500€',
    types: 'Готелі / Ресторани / Збір / Виробництво',
    desc: 'Європейська якість умов праці. Альпи, стабільність і хороший роботодавець.',
  },
  {
    flag: '🇧🇪',
    title: 'Робота в Бельгії',
    salary: '1500–2200€',
    types: 'Збір фруктів та овочів / Склади / Виробництво',
    desc: 'Стабільна робота та добросовісні роботодавці. Офіційне оформлення + житло.',
  },
];

export default function Services() {
  const openModal = () => window.dispatchEvent(new CustomEvent('open-lead-modal'));

  return (
    <section id="vacancies" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3057]">
            <span className="bg-[#c9870a] text-white px-2 rounded mr-2">Наші</span>послуги
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                s.highlight
                  ? 'bg-[#1a3057] border-[#1a3057] text-white'
                  : 'bg-white border-gray-100 hover:shadow-md'
              } transition-all`}
            >
              <div className="text-5xl mb-4">{s.flag}</div>
              <h3 className={`text-xl font-bold mb-2 ${s.highlight ? 'text-white' : 'text-[#1a3057]'}`}>
                {s.title}
              </h3>
              <div
                className={`inline-flex items-center self-start gap-1 px-3 py-1 rounded-full text-sm font-bold mb-3 ${
                  s.highlight ? 'bg-white text-[#1a3057]' : 'bg-[#c9870a]/10 text-[#c9870a]'
                }`}
              >
                від {s.salary}/міс
              </div>
              <p className={`text-sm mb-3 ${s.highlight ? 'text-white/70' : 'text-gray-400'}`}>
                {s.types}
              </p>
              <p className={`text-sm leading-relaxed flex-1 ${s.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                {s.desc}
              </p>
              <button
                onClick={openModal}
                className={`mt-6 w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
                  s.highlight
                    ? 'bg-white text-[#1a3057] hover:bg-gray-100'
                    : 'bg-gray-100 text-[#1a3057] hover:bg-[#1a3057] hover:text-white'
                }`}
              >
                Отримати консультацію
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
