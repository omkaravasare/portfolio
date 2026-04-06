import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[100]">
        <motion.div
          className="h-full bg-gradient-to-r from-accent via-cyan to-violet"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: 'linear' }}
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass shadow-glass'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-heading font-bold gradient-text">
            Omkar's Portfolio
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent-light'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {/* Hover underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-accent to-cyan transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'w-3/4'
                      : 'w-0 group-hover:w-3/4'
                  }`}
                />
              </a>
            ))}

            {/* Download Resume Button */}
            <a
              href="/Omkar Avasare Resume.pdf"
              download
              className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-dark-950 bg-gradient-to-r from-accent to-cyan rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <FiDownload className="text-base" />
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass mx-4 mt-2 rounded-2xl overflow-hidden"
            >
              <div className="py-4 px-6 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'text-accent-light bg-accent/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* Mobile Download Resume Button */}
                <a
                  href="/Omkar Avasare Resume.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-dark-950 bg-gradient-to-r from-accent to-cyan rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  <FiDownload className="text-base" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
