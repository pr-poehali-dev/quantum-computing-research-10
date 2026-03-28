import { useState } from "react";

export default function Press() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    media: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-16">
          Пресса
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-light leading-snug mb-8 text-neutral-900">
              Для журналистов
              <br />
              и кинокритиков
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-10">
              Мы открыты для интервью, рецензий и специальных показов для прессы.
              Оставьте заявку — пресс-служба свяжется с вами в течение двух рабочих дней.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
                  Пресс-служба
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between border-b border-neutral-100 py-2">
                    <span className="text-neutral-400 text-sm">Контакт</span>
                    <span className="text-neutral-900 text-sm">Елена Соколова</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 py-2">
                    <span className="text-neutral-400 text-sm">Email</span>
                    <a
                      href="mailto:press@trikeys.ru"
                      className="text-neutral-900 text-sm hover:text-neutral-500 transition-colors"
                    >
                      press@trikeys.ru
                    </a>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 py-2">
                    <span className="text-neutral-400 text-sm">Телефон</span>
                    <a
                      href="tel:+74951234567"
                      className="text-neutral-900 text-sm hover:text-neutral-500 transition-colors"
                    >
                      +7 (495) 123-45-67
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
                  Материалы
                </p>
                <div className="flex flex-col gap-2">
                  {["Пресс-кит (PDF)", "Фото со съёмок (ZIP)", "Постер в высоком разрешении"].map((item) => (
                    <button
                      key={item}
                      className="flex items-center justify-between border border-neutral-200 px-4 py-3 text-sm text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-200 w-full text-left"
                    >
                      <span>{item}</span>
                      <span className="text-neutral-400 text-xs uppercase tracking-wide">Скачать</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="h-full flex flex-col items-start justify-center">
                <div className="w-12 h-px bg-neutral-900 mb-8" />
                <p className="text-2xl font-light text-neutral-900 mb-4">
                  Заявка отправлена
                </p>
                <p className="text-neutral-500 leading-relaxed">
                  Мы получили ваше сообщение и свяжемся с вами в течение двух рабочих дней.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                  Заявка на аккредитацию
                </p>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-neutral-400 uppercase tracking-wide">
                    Имя и фамилия
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="Иван Петров"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-neutral-400 uppercase tracking-wide">
                    Издание
                  </label>
                  <input
                    type="text"
                    required
                    value={form.media}
                    onChange={(e) => setForm({ ...form, media: e.target.value })}
                    className="border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="Название издания или канала"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-neutral-400 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="ivan@media.ru"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-neutral-400 uppercase tracking-wide">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                    placeholder="Тип материала, предполагаемая дата публикации..."
                  />
                </div>
                <button
                  type="submit"
                  className="border border-neutral-900 text-neutral-900 px-8 py-3 text-xs uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all duration-300 w-fit mt-2"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
