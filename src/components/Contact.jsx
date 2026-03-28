import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

const socials = [
  { icon: <FiGithub />, label: 'GitHub', url: 'https://github.com/omkaravasare', color: 'hover:text-white' },
  { icon: <FiLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/in/omkar-avasare', color: 'hover:text-blue-400' },
  { icon: <FiMail />, label: 'Email', url: 'mailto:omkaravasare2@gmail.com', color: 'hover:text-cyan' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto URL with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:omkaravasare2@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's talk and build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-lg font-heading font-semibold mb-4">Let's Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
              </p>

              <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
                <FiMapPin className="text-accent-light" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm mb-6">
                <FiMail className="text-accent-light" />
                <a href="mailto:omkaravasare2@gmail.com" className="hover:text-accent-light transition-colors">
                  omkaravasare2@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 ${s.color} transition-all duration-300 hover:shadow-glow hover:scale-110`}
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 focus:shadow-glow transition-all placeholder:text-gray-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 focus:shadow-glow transition-all placeholder:text-gray-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-accent/50 focus:shadow-glow transition-all resize-none placeholder:text-gray-600"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
