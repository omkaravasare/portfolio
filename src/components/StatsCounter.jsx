import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiCode, FiAward, FiClock, FiGitPullRequest } from 'react-icons/fi';

const stats = [
  { icon: <FiCode />, value: 10, suffix: '+', label: 'Projects Built' },
  { icon: <FiAward />, value: 5, suffix: '+', label: 'Certifications' },
  { icon: <FiClock />, value: 3, suffix: '+', label: 'Years Coding' },
  { icon: <FiGitPullRequest />, value: 200, suffix: '+', label: 'Contributions' },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-heading font-bold gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <div className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass-card p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-accent-light text-xl mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
