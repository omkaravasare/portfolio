import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import {
  SiPython, SiJavascript, SiCplusplus,
  SiReact, SiNodedotjs, SiSpringboot, SiFlask, SiOpencv,
  SiGit, SiGithub, SiPostman,
  SiMongodb, SiMysql,
  SiGooglecloud,
} from 'react-icons/si';
import { FaJava, FaAws, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'Java', icon: <FaJava />, color: 'text-orange-400' },
  { name: 'Python', icon: <SiPython />, color: 'text-yellow-400' },
  { name: 'C/C++', icon: <SiCplusplus />, color: 'text-blue-400' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-300' },
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'SQL', icon: <FaDatabase />, color: 'text-cyan' },
  { name: 'React', icon: <SiReact />, color: 'text-cyan' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-400' },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500' },
  { name: 'Flask', icon: <SiFlask />, color: 'text-gray-300' },
  { name: 'OpenCV', icon: <SiOpencv />, color: 'text-blue-300' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400' },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-400' },
  { name: 'Git', icon: <SiGit />, color: 'text-orange-500' },
  { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-300' },
  { name: 'Postman', icon: <SiPostman />, color: 'text-orange-400' },
  { name: 'AWS', icon: <FaAws />, color: 'text-amber-400' },
  { name: 'GCP', icon: <SiGooglecloud />, color: 'text-blue-400' },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4, scale: 1.08 }}
              className="glass-card p-3 flex flex-col items-center gap-1.5 cursor-default"
            >
              <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
              <span className="text-[11px] font-medium text-gray-300 text-center leading-tight">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
