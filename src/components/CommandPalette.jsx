import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiGithub, FiMail, FiFileText, FiX, FiUser, FiFolder, FiZap, FiBriefcase, FiBookOpen, FiHeart, FiSend, FiLinkedin } from 'react-icons/fi';

const commands = [
  { name: 'About Me', section: '#about', icon: <FiUser /> },
  { name: 'Projects', section: '#projects', icon: <FiFolder /> },
  { name: 'Skills', section: '#skills', icon: <FiZap /> },
  { name: 'Experience', section: '#experience', icon: <FiBriefcase /> },
  { name: 'Education', section: '#education', icon: <FiBookOpen /> },
  { name: 'Volunteering', section: '#volunteering', icon: <FiHeart /> },
  { name: 'Contact', section: '#contact', icon: <FiSend /> },
  { name: 'GitHub', url: 'https://github.com', icon: <FiGithub /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FiLinkedin /> },
  { name: 'Email', url: 'mailto:hello@example.com', icon: <FiMail /> },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => commands.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  const handleSelect = useCallback((cmd) => {
    setOpen(false);
    setQuery('');
    if (cmd.section) {
      document.querySelector(cmd.section)?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd.url) {
      window.open(cmd.url, '_blank');
    }
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-start justify-center pt-[15vh]"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg glass rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
              <FiSearch className="text-gray-500 text-lg" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, links..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-gray-600"
              />
              <kbd className="px-2 py-0.5 text-xs text-gray-500 bg-white/5 rounded border border-white/10">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="text-center text-gray-600 text-sm py-8">No results found</p>
              ) : (
                filtered.map((cmd, i) => (
                  <button
                    key={cmd.name}
                    onClick={() => handleSelect(cmd)}
                    className="w-full flex items-center gap-3 px-5 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <span className="text-lg">{cmd.icon}</span>
                    <span>{cmd.name}</span>
                    {cmd.url && (
                      <span className="ml-auto text-xs text-gray-600">↗ External</span>
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between text-xs text-gray-600">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
