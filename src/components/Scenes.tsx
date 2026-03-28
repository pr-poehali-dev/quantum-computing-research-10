const scenes = [
  {
    time: "18:00",
    title: "Встреча трёх",
    description:
      "Анна ищет тайник в квартире Волкова. Вместо хозяина входит Туманов. Напряжение, шок, взаимное узнавание.",
    index: "01",
  },
  {
    time: "22:00",
    title: "Радио",
    description:
      "Диктор сообщает о вводе войск в Чехословакию. Реакция героев: обречённость, цинизм, ярость. Фоном — плач соседки-чешки.",
    index: "02",
  },
  {
    time: "03:00",
    title: "Исповедь Туманова",
    description:
      "Туманов сознаётся, что сдал Анну из зависти и мести её матери, а не по убеждениям. Момент обнажения подлинных механизмов зла.",
    index: "03",
  },
];

export default function Scenes() {
  return (
    <section className="bg-neutral-950 py-24 px-6 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-16">
          Ключевые сцены
        </h3>

        <div className="flex flex-col gap-0">
          {scenes.map((scene, i) => (
            <div
              key={scene.index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 py-12 ${
                i < scenes.length - 1 ? "border-b border-neutral-800" : ""
              }`}
            >
              <div className="lg:col-span-2 flex flex-row lg:flex-col gap-4 lg:gap-2 items-start">
                <span className="text-neutral-700 text-xs uppercase tracking-widest font-mono">
                  {scene.index}
                </span>
                <span className="text-white font-mono text-lg tracking-wider">
                  {scene.time}
                </span>
              </div>

              <div className="lg:col-span-10 lg:pl-8 border-l border-neutral-800 flex flex-col gap-4">
                <h4 className="text-white text-xl font-light">{scene.title}</h4>
                <p className="text-neutral-400 leading-relaxed text-base max-w-2xl">
                  {scene.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
