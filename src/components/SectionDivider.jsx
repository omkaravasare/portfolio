export default function SectionDivider({ variant = 'wave' }) {
  if (variant === 'wave') {
    return (
      <div className="relative h-16 md:h-24 overflow-hidden -my-1">
        <svg
          viewBox="0 0 1440 80"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="divider-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99,102,241,0.1)" />
              <stop offset="50%" stopColor="rgba(34,211,238,0.1)" />
              <stop offset="100%" stopColor="rgba(167,139,250,0.1)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#divider-gradient)"
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center gap-2 py-8">
        <span className="w-1 h-1 rounded-full bg-accent/40" />
        <span className="w-2 h-2 rounded-full bg-accent/30" />
        <span className="w-8 h-[2px] bg-gradient-to-r from-accent/40 to-cyan/40 rounded" />
        <span className="w-2 h-2 rounded-full bg-cyan/30" />
        <span className="w-1 h-1 rounded-full bg-cyan/40" />
      </div>
    );
  }

  // Gradient line
  return (
    <div className="py-4">
      <div className="max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </div>
  );
}
