const facts = [
  { label: "Год", value: "1968" },
  { label: "Страна", value: "СССР" },
  { label: "Жанр", value: "Политический триллер" },
  { label: "Хронометраж", value: "1 ч 50 мин" },
  { label: "Язык", value: "Русский" },
  { label: "Рейтинг", value: "16+" },
];

export default function About() {
  return (
    <section id="about" className="bg-neutral-950 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-16">
          О фильме
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
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
                <div key={f.label} className="bg-neutral-950 p-5">
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
                { role: "Режиссёр", name: "Алексей Смирнов" },
                { role: "Сценарий", name: "Виктор Некрасов" },
                { role: "Оператор", name: "Сергей Урусевский" },
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
      </div>
    </section>
  );
}
