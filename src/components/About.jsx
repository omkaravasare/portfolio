import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FiMapPin, FiCalendar, FiCode, FiHeart } from 'react-icons/fi';

const highlights = [
  { icon: <FiCode />, label: 'Projects', value: '10+' },
  { icon: <FiCalendar />, label: 'Years Coding', value: '3+' },
  { icon: <FiHeart />, label: 'Open Source', value: '5+' },
  { icon: <FiMapPin />, label: 'Location', value: 'Pune, India' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know me, my journey, and what drives me as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="glass-card p-6 text-center">
              {/* Avatar */}
              <div className="relative w-32 h-32 mx-auto mb-5">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-cyan p-[2px]">
                  <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold gradient-text">OA</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-dark-900" />
              </div>

              <h3 className="text-xl font-heading font-semibold mb-1">Omkar Avasare</h3>
              <p className="text-accent-light text-sm mb-4">B.Tech IT | Full Stack Developer</p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {highlights.map((h, i) => (
                  <div key={i} className="glass p-3 rounded-xl text-center">
                    <div className="text-accent-light text-lg mb-1 flex justify-center">{h.icon}</div>
                    <div className="text-white font-semibold text-sm">{h.value}</div>
                    <div className="text-gray-500 text-xs">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-accent to-cyan" />
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a driven Information Technology undergraduate passionate about Artificial Intelligence,
                Full-Stack Development, and Cloud Computing. I've designed and developed many collaborative
                full-stack web applications, engineered AI-driven assistants, and implemented ML-based projects
                to deliver innovative, user-focused solutions.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Eager to expand problem-solving capabilities, deepen technical expertise, and contribute
                to impactful advancements in technology. I believe in writing clean, maintainable code
                and staying on the cutting edge of technology.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-cyan to-violet" />
                What I Focus On
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Full Stack Development', desc: 'React, Node.js, Spring Boot, Full-Stack Apps, MongoDB,etc' },
                  { title: 'Cloud Computing & DevOps', desc: 'AWS, GCP, Scalable Deployments' },
                  { title: 'Open Source', desc: 'GSSoC Contributor, Community Projects Builder' },
                  { title: 'Data Science & Machine Learning', desc: 'Python, XGBoost, LightGBM, NLP' },
                ].map((focus, i) => (
                  <div key={i} className="glass p-4 rounded-xl hover:border-accent/30 transition-colors">
                    <h4 className="text-accent-light font-medium text-sm mb-1">{focus.title}</h4>
                    <p className="text-gray-500 text-xs">{focus.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
