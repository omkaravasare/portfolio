import { motion } from 'framer-motion';
import { Suspense } from 'react';
import TechSphere from './TechSphere';
import FloatingShapes from './FloatingShapes';
import TextScramble from '../TextScramble';
import MagneticButton from '../MagneticButton';
import { FiArrowDown, FiMail } from 'react-icons/fi';

const roles = [
  'Full Stack Developer',
  'ML Engineer',
  'Cloud Enthusiast',
  'Open Source Contributor',
  'Tech Enthusiast',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingShapes />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* Left: Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="z-10"
        >
          <motion.div variants={item} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-accent-light">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">
              Omkar Avasare
            </span>
          </motion.h1>

          <motion.div variants={item} className="text-xl sm:text-2xl text-gray-400 mb-6 h-8">
            <TextScramble texts={roles} className="text-cyan" />
          </motion.div>

          <motion.p variants={item} className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
            A driven IT undergraduate passionate about AI, Full-Stack Development, and Cloud Computing — building innovative, user-focused solutions.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <MagneticButton className="btn-primary flex items-center gap-2">
              <a href="#projects" className="flex items-center gap-2">
                <FiArrowDown className="text-lg" />
                View Projects
              </a>
            </MagneticButton>
            <MagneticButton className="btn-outline flex items-center gap-2">
              <a href="#contact" className="flex items-center gap-2">
                <FiMail className="text-lg" />
                Contact Me
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right: 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="hidden md:block"
        >
          <Suspense fallback={<div className="w-full h-[400px]" />}>
            <TechSphere />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-accent/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-accent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
