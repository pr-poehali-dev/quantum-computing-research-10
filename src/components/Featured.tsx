export default function Featured() {
  const characters = [
    {
      name: "Дмитрий Волков",
      age: "40 лет",
      role: "Подполковник КГБ",
      description:
        "Аналитик. Сломлен, разочарован, пьёт. Хранит архив Анны. В финале выбирает попытку измениться.",
      image: "https://cdn.poehali.dev/projects/ff2aee54-78d0-4fe9-a279-b16af5a3fc45/files/0953d575-ad4b-4693-945e-94e0daba323a.jpg",
    },
    {
      name: "Анна Раевская",
      age: "41 год",
      role: "Эмигрантка, переводчица",
      description:
        "Вернулась нелегально, чтобы забрать дневники отца. Гордая, сильная, но ранимая. Ненавидит систему.",
      image: "https://cdn.poehali.dev/projects/ff2aee54-78d0-4fe9-a279-b16af5a3fc45/files/d6f283e6-9a4f-46ee-a7a5-d7c7e2814d9c.jpg",
    },
    {
      name: "Ираклий Туманов",
      age: "61 год",
      role: "«Серый кардинал» Госплана",
      description:
        "Циничен, хладнокровен. Пришёл за компроматом. Оказался предателем из зависти, а не идеологии.",
      image: "https://cdn.poehali.dev/projects/ff2aee54-78d0-4fe9-a279-b16af5a3fc45/files/78d93316-53b1-46dd-888f-b928a4a36214.jpg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/ff2aee54-78d0-4fe9-a279-b16af5a3fc45/files/0835d447-7e43-4fd3-a52c-155fe03d1374.jpg"
          alt="Волков и Туманов за столом"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">
          Герои
        </h3>
        <p className="text-2xl lg:text-3xl mb-10 text-neutral-900 leading-tight font-light">
          Трое людей, связанных одним тайником.
          <br />
          Любовь, предательство, выбор —
          <br />
          за одну ночь.
        </p>
        <div className="flex flex-col gap-6">
          {characters.map((c) => (
            <div key={c.name} className="border-t border-neutral-200 pt-4 flex gap-4 items-start">
              {c.image && (
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-14 h-14 object-cover grayscale shrink-0"
                />
              )}
              <div className={c.image ? "" : "pl-[4.5rem]"}>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-semibold text-neutral-900">{c.name}</span>
                  <span className="text-xs text-neutral-400 uppercase tracking-wide">
                    {c.age} · {c.role}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}