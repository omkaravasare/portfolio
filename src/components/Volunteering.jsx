import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import acd5Image from '../assets/acd5.jpeg';
import acd2Image from '../assets/acd2.jpeg';

const slides = [
  {
    caption: 'Volunteer @ AWS Community Day 2026',
    image: acd5Image, // Fixed: imported from src/assets
    gradient: 'from-accent/30 to-cyan/30',
  },
  {
    caption: 'Volunteer @ AWS Community Day 2026',
    image: acd2Image, // Fixed: imported from src/assets
    gradient: 'from-cyan/30 to-emerald-500/30',
  },
];

export default function Volunteering() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <SectionWrapper id="volunteering">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Volunteering</span>
          </h2>
          <p className="section-subtitle">
            Community service and social impact activities.
          </p>
        </div>

        <div className="relative glass-card p-4 md:p-6 overflow-hidden">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-end"
              >
                {slides[current].image ? (
                  <img
                    src={slides[current].image}
                    alt={slides[current].caption}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${slides[current].gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="grid grid-cols-4 gap-4">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-white/20"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                <div className="relative w-full p-4 md:p-6 bg-gradient-to-t from-dark-950/95 to-transparent">
                  <p className="text-white text-sm md:text-base font-medium">
                    {slides[current].caption}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {current + 1} / {slides.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/30 transition-all"
            >
              <FiChevronLeft />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-gradient-to-r from-accent to-cyan'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/30 transition-all"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
