import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FiAward, FiCalendar } from 'react-icons/fi';

const education = [
  {
    degree: 'B.Tech — Information Technology (Honors: Cybersecurity)',
    institution: 'AISSMS Institute of Information Technology, Pune',
    duration: '2023 — 2027',
    highlights: ['CGPA: 7.8/10.0', 'Honors in Cybersecurity', 'IT Students Association'],
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science Stream',
    institution: 'Shri Shivaji Vidyamandir and Junior College',
    duration: '2021 — 2023',
    highlights: ['Science Stream', 'Grade: First Class'],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Mar Ivanios Convent School',
    duration: '2011 — 2021',
    highlights: ['Percentage: 90%'],
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background and achievements.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6 md:p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FiAward className="text-accent-light" />
                    <h3 className="text-lg font-heading font-semibold group-hover:text-accent-light transition-colors">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-accent-light/80 text-sm mb-3">{edu.institution}</p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-gray-500 whitespace-nowrap">
                  <FiCalendar className="text-xs" />
                  {edu.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
