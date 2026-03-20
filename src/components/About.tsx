import { motion } from 'motion/react';
import { Terminal, MapPin, GraduationCap, Languages, Heart } from 'lucide-react';
import type { ReactNode } from 'react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
            <span className="text-accent-cyan mr-2">$</span>whoami
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs font-mono text-gray-400">abhi_bio.sh</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex gap-2 mb-4">
                <span className="text-matrix-green">$</span>
                <span className="text-white">cat bio.txt</span>
              </div>
              <p className="text-gray-300 mb-6">
                Motivated and detail-oriented BCA student with a solid foundation in computer science and programming. 
                Proficient in multiple programming languages with hands-on experience in software development and project implementation. 
                Eager to contribute to team success through hard work, attention to detail, and excellent organizational skills.
              </p>
              <div className="flex gap-2 mb-2">
                <span className="text-matrix-green">$</span>
                <span className="text-white">ls ./interests</span>
              </div>
              <div className="flex flex-wrap gap-3 text-accent-cyan">
                <span>AI</span>
                <span>Cloud Computing</span>
                <span>Software Development</span>
                <span>Cybersecurity</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard 
                icon={<MapPin className="w-5 h-5 text-accent-cyan" />}
                label="Location"
                value="Delhi, India"
              />
              <InfoCard 
                icon={<GraduationCap className="w-5 h-5 text-accent-cyan" />}
                label="Education"
                value="BCA, Jagannath University"
              />
              <InfoCard 
                icon={<Languages className="w-5 h-5 text-accent-cyan" />}
                label="Languages"
                value="Hindi, English, French"
              />
              <InfoCard 
                icon={<Heart className="w-5 h-5 text-accent-cyan" />}
                label="Interests"
                value="Tech, AI, Cloud"
              />
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent-purple" />
                Current Status
              </h3>
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">
                  Currently in the 2023–2026 batch of BCA at Jagannath University. 
                </p>
                <div className="p-3 rounded-lg bg-accent-cyan/5 border border-accent-cyan/20">
                  <p className="text-accent-cyan text-xs font-mono mb-1 uppercase tracking-tighter">Active Internship</p>
                  <p className="text-white text-sm font-medium">AI Intern @ workfloww.ai</p>
                  <p className="text-gray-500 text-xs mt-1">Working on cutting-edge AI technology-based projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const InfoCard = ({ icon, label, value }: { icon: ReactNode, label: string, value: string }) => (
  <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-accent-cyan/30 transition-colors group">
    <div className="flex items-center gap-3 mb-2">
      {icon}
      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{label}</span>
    </div>
    <p className="text-white font-medium">{value}</p>
  </div>
);
