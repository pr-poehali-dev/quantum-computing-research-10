import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/icon";

const stills = [
  {
    src: "https://cdn.poehali.dev/projects/ff2aee54-78d0-4fe9-a279-b16af5a3fc45/files/eb62f8cc-7521-469e-9d51-10b9eb981d3a.jpg",
    caption: "Ночь переговоров. Трое за одним столом.",
  },
  {
    src: "https://cdn.poehali.dev/projects/ff2aee54-78d0-4fe9-a279-b16af5a3fc45/files/4ffe9fbd-ee3e-4770-a6ce-9bb215ea4de2.jpg",
    caption: "Москва, август 1968. Патруль уже на улице.",
  },
  {
    src: "https://cdn.poehali.dev/projects/ff2aee54-78d0-4fe9-a279-b16af5a3fc45/files/cb3a9750-8ec7-4eb2-84d4-66153b6413b6.jpg",
    caption: "Три ключа. Три судьбы. Один выбор.",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () =>
    setLightbox((i) => (i === null ? null : (i - 1 + stills.length) % stills.length));
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % stills.length));

  return (
    <section id="scenes" className="bg-neutral-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-widest text-neutral-500 mb-10">
          Кадры
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stills.map((still, i) => (
            <button
              key={i}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <img
                src={still.src}
                alt={still.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left leading-snug">
                  {still.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <Icon name="X" size={28} />
            </button>
            <button
              className="absolute left-4 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <Icon name="ChevronLeft" size={40} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={stills[lightbox].src}
                alt={stills[lightbox].caption}
                className="w-full object-contain max-h-[80vh]"
              />
              <p className="text-white/60 text-sm mt-4 text-center">
                {stills[lightbox].caption}
              </p>
            </motion.div>
            <button
              className="absolute right-4 text-white/70 hover:text-white"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <Icon name="ChevronRight" size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
