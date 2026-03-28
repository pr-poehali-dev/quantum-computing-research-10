const facts = [
  { label: "Год", value: "1968" },
  { label: "Страна", value: "СССР" },
  { label: "Жанр", value: "Камерный политический триллер / Психологическая драма" },
  { label: "Хронометраж", value: "1 ч 50 мин" },
  { label: "Язык", value: "Русский" },
  { label: "Рейтинг", value: "16+" },
];

const plotLines = [
  {
    label: "Завязка",
    text: "Анна приходит в квартиру Волкова за архивом отца, но сталкивается с Тумановым. Появляется Волков. Выясняется, что все трое связаны с одним тайником.",
  },
  {
    label: "Развитие",
    text: "Торг и давление. На фоне — ввод войск в Чехословакию, нагнетающий страх. Раскрываются прошлые связи: любовь, предательство.",
  },
  {
    label: "Кульминация",
    text: "Туманов угрожает Анне пистолетом. Волков ставит ультиматум: если они пострадают, компромат утром попадёт к начальству.",
  },
  {
    label: "Развязка",
    text: "Ночная исповедь. На рассвете тайник открывают. Туманов уходит ни с чем. Анна уезжает навсегда. Волков остаётся, но отказывается от бутылки и пишет рапорт.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">

        {/* Основное описание */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-16">
              О фильме
            </h3>
            <h2 className="text-3xl md:text-4xl font-light leading-snug mb-8 text-white">
              Август 1968-го.
              <br />
              Москва не спит.
              <br />
              Трое знают почему.
            </h2>
            <div className="flex flex-col gap-5 text-neutral-400 leading-relaxed text-base">
              <p>
                В ночь с 20 на 21 августа советские войска входят в Чехословакию.
                Пока страна замерла у радиоприёмников, в коммунальной квартире
                на Арбате встречаются трое: офицер госбезопасности, вернувшаяся
                из эмиграции переводчица и чиновник высшего эшелона власти.
              </p>
              <p>
                Каждый пришёл за своим. Волков — за архивом, который даёт ему
                власть. Анна — за дневниками отца, расстрелянного в 37-м.
                Туманов — за компроматом, способным уничтожить конкурента.
              </p>
              <p>
                Но за одну ночь выяснится: тайник пуст. А ключ от него —
                у каждого из троих. Чтобы открыть замок, нужны все три.
                Чтобы уйти живым — нужно решить, кому доверять.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-2 gap-px bg-neutral-800">
              {facts.map((f) => (
                <div key={f.label} className={`bg-neutral-950 p-5 ${f.label === "Жанр" ? "col-span-2" : ""}`}>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                    {f.label}
                  </p>
                  <p className="text-white font-medium">{f.value}</p>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-neutral-700 pl-6">
              <p className="text-neutral-300 italic text-lg leading-relaxed">
                «Камерная драма высочайшего напряжения. Три актёра, одна
                комната — и ни единой лишней реплики.»
              </p>
              <p className="text-neutral-600 text-sm mt-3 uppercase tracking-wide">
                — Советский экран, 1968
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
                Создатели
              </p>
              {[
                { role: "Режиссёр", name: "Тихон Горбунов" },
                { role: "Сценарий", name: "Тихон Горбунов" },
                { role: "Оператор", name: "Влад Ермаков" },
                { role: "Музыка", name: "Эдисон Денисов" },
              ].map((c) => (
                <div key={c.role} className="flex justify-between border-b border-neutral-800 py-2">
                  <span className="text-neutral-500 text-sm">{c.role}</span>
                  <span className="text-white text-sm">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Актуальность */}
        <div className="border-t border-neutral-800 pt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-6">
              Почему сейчас
            </h3>
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6 text-neutral-400 leading-relaxed">
            <p>
              Фильм о травме, наносимой системой, и о внутренней свободе,
              которая не зависит от места жительства.
            </p>
            <p>
              Камерный формат — одна комната, трое героев, одни сутки —
              позволяет сосредоточиться на психологии и диалогах, создавая
              напряжение без внешнего экшена.
            </p>
          </div>
        </div>

        {/* Сюжетные линии */}
        <div className="border-t border-neutral-800 pt-16">
          <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-12">
            Сюжетные линии
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800">
            {plotLines.map((line) => (
              <div key={line.label} className="bg-neutral-950 p-8">
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
                  {line.label}
                </p>
                <p className="text-neutral-300 leading-relaxed text-sm">
                  {line.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
