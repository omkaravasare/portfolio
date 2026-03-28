import { motion } from 'framer-motion';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient blob - top right */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      {/* Medium blob - bottom left */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan/8 rounded-full blur-3xl"
      />
      {/* Small floating dot */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/40"
      />
      <motion.div
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-cyan/30"
      />
      <motion.div
        animate={{ y: [-10, 20, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-violet/40"
      />
      {/* Gradient line accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
    </div>
  );
}
