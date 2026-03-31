import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-heading font-bold gradient-text">
              Omkar Avasare
            </a>
            <p className="text-gray-600 text-sm mt-1">
              Built with <FiHeart className="inline text-accent text-xs" /> and modern web tech 👨‍💻
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { icon: <FiGithub />, url: 'https://github.com/omkaravasare', label: 'GitHub' },
              { icon: <FiLinkedin />, url: 'https://linkedin.com/in/omkar-avasare', label: 'LinkedIn' },
              { icon: <FiMail />, url: 'mailto:omkaravasare2@gmail.com', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-500 hover:text-accent-light hover:shadow-glow transition-all duration-300"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Right */}
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Omkar Avasare. All rights reserved.
          </p>
        </div>

        {/* Hint */}
        <div className="text-center mt-8">
          <p className="text-gray-700 text-xs">
            Press <kbd className="px-1.5 py-0.5 bg-white/5 rounded text-gray-500 border border-white/10">Ctrl+K</kbd> to open command palette
          </p>
        </div>
      </div>
    </footer>
  );
}
