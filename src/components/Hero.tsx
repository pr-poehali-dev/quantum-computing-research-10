import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/ff2aee54-78d0-4fe9-a279-b16af5a3fc45/files/300348cf-4b6f-4cf3-b3e0-06f93a046601.jpg"
          alt="Постер фильма Три ключа"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 opacity-70">
          Камерный политический триллер · 1968
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight mb-6 leading-none">
          ТРИ КЛЮЧА
        </h1>
        <p className="text-base md:text-xl max-w-xl mx-auto opacity-80 leading-relaxed">
          Одна комната. Трое. Одни сутки. Цена выбора — вся жизнь.
        </p>
        <div className="mt-10">
          <button className="border border-white/60 text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Смотреть трейлер
          </button>
        </div>
      </div>
    </div>
  );
}
