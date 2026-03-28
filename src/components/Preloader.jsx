import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if already shown this session
    if (sessionStorage.getItem('preloaderShown')) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem('preloaderShown', 'true');
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-dark-950 flex flex-col items-center justify-center"
        >
          {/* Animated rings */}
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-2 border-accent/30 rounded-full animate-spin-slow" />
            <div className="absolute inset-3 border border-cyan/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
            <div className="absolute inset-6 border border-violet/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-heading font-bold gradient-text">P</span>
            </div>
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-heading font-bold text-white mb-6"
          >
            Portfolio
          </motion.h1>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-dark-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-cyan to-violet rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <p className="text-gray-600 text-xs font-mono mt-3">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
