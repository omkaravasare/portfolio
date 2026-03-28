import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    role: 'Java Full Stack Intern',
    company: 'Infosys Springboard',
    duration: 'Dec 2025 — Mar 2026',
    description: 'Developed BudgetWise — an AI-driven personal finance manager using Java, Spring Boot, React, and MongoDB with intelligent budgeting insights and analytics.',
    current: true,
  },
  {
    role: 'Technical Secretary',
    company: 'IT Students Association, AISSMS IOIT — Pune, India',
    duration: 'Aug 2025 — Present',
    description: 'Leading technical initiatives and coordinating events for the IT Students Association. Actively contributing to college-level technical and cultural initiatives, serving in event management and technical team roles across various student organizations.',
    current: true,
  },
  {
    role: 'Data Analytics Intern',
    company: 'VI Foundation & AICTE (Virtual Internship)',
    duration: 'Oct 2024 — Dec 2024',
    description: 'Completed a virtual data analytics internship, working on data-driven projects involving predictive analytics, data visualization, and statistical modeling. Gained hands-on experience with data pipelines and business intelligence tools.',
    current: false,
  },
  {
    role: 'Open Source Contributor',
    company: 'GirlScript Summer of Code (GSSoC)',
    duration: 'May 2024 — Aug 2024',
    description: 'Contributed to open source projects during GSSoC, collaborating with the developer community on code reviews, feature development, and bug fixes. Enhanced skills in version control, collaborative coding, and open-source best practices.',
    current: false,
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and the roles that shaped my career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-cyan to-violet" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative mb-12 md:mb-16 ${
                i % 2 === 0
                  ? 'md:pr-[calc(50%+2rem)] md:text-right'
                  : 'md:pl-[calc(50%+2rem)]'
              } pl-16 md:pl-0`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 -translate-x-1/2 z-10 transition-all ${
                  exp.current
                    ? 'bg-accent border-accent shadow-glow animate-glow-pulse'
                    : 'bg-dark-900 border-accent/50'
                }`}
              />

              {/* Card */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-2 justify-start md:justify-inherit">
                  <FiBriefcase className={`text-accent-light ${i % 2 === 0 ? 'md:order-last' : ''}`} />
                  <span className="text-xs font-mono text-cyan">{exp.duration}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-1">{exp.role}</h3>
                <p className="text-accent-light text-sm mb-3">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                {exp.current && (
                  <span className="inline-flex items-center gap-1 mt-3 px-3 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full border border-green-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Current
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
