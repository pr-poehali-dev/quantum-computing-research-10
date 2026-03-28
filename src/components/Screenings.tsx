const screenings = [
  {
    date: "12 апреля",
    day: "Сб",
    time: "19:00",
    venue: "Дом кино",
    city: "Москва",
    note: "С обсуждением",
  },
  {
    date: "18 апреля",
    day: "Пт",
    time: "20:30",
    venue: "Синема Парк",
    city: "Санкт-Петербург",
    note: "",
  },
  {
    date: "25 апреля",
    day: "Пт",
    time: "18:00",
    venue: "Кинотеатр «Победа»",
    city: "Новосибирск",
    note: "",
  },
  {
    date: "3 мая",
    day: "Сб",
    time: "17:00",
    venue: "Арт-кино «Смена»",
    city: "Казань",
    note: "Открытый показ",
  },
  {
    date: "10 мая",
    day: "Сб",
    time: "20:00",
    venue: "Одеон",
    city: "Екатеринбург",
    note: "",
  },
];

export default function Screenings() {
  return (
    <section id="screenings" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-10">
          Показы
        </h3>
        <div className="flex flex-col divide-y divide-neutral-200">
          {screenings.map((s, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-5 gap-4 group"
            >
              <div className="flex items-baseline gap-3 w-36 shrink-0">
                <span className="text-xl font-semibold text-neutral-900">
                  {s.date}
                </span>
                <span className="text-xs text-neutral-400 uppercase">{s.day}</span>
              </div>
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <span className="font-medium text-neutral-800">{s.venue}</span>
                <span className="text-neutral-400 text-sm">{s.city}</span>
                {s.note && (
                  <span className="text-xs border border-neutral-300 text-neutral-500 px-2 py-0.5 rounded-full w-fit">
                    {s.note}
                  </span>
                )}
              </div>
              <div className="text-neutral-500 font-mono text-sm shrink-0">
                {s.time}
              </div>
              <button className="shrink-0 ml-2 border border-neutral-300 text-neutral-700 px-4 py-1.5 text-xs uppercase tracking-widest hover:border-neutral-900 hover:text-neutral-900 transition-all duration-200">
                Билеты
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
