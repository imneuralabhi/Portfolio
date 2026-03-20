import { motion } from 'motion/react';
import { Code2, Database, Terminal, ShieldCheck } from 'lucide-react';

const skills = [
  { name: 'C / C++', level: 90, category: 'Languages', icon: <Code2 /> },
  { name: 'Python', level: 85, category: 'Languages', icon: <Code2 /> },
  { name: 'Java', level: 75, category: 'Languages', icon: <Code2 /> },
  { name: 'MySQL', level: 80, category: 'Tools', icon: <Database /> },
  { name: 'Linux', level: 85, category: 'Tools', icon: <Terminal /> },
  { name: 'Git', level: 80, category: 'Tools', icon: <ShieldCheck /> },
];

const coreCompetencies = [
  'OOPs', 'Problem Solving', 'Debugging', 'Version Control', 'Cloud Migration'
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
              <span className="text-accent-cyan mr-2">01.</span>Technical_Skills
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 text-white font-mono">
                      <span className="text-accent-cyan">{skill.icon}</span>
                      {skill.name}
                    </div>
                    <span className="text-accent-cyan font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-mono text-white mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent-purple" />
                Core_Competencies
              </h3>
              <div className="flex flex-wrap gap-4">
                {coreCompetencies.map((comp, index) => (
                  <motion.div
                    key={comp}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono hover:border-accent-purple/50 hover:text-accent-purple transition-all cursor-default"
                  >
                    {comp}
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Code2 className="w-24 h-24" />
                </div>
                <h4 className="text-white font-bold mb-2">Continuous Learning</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Always expanding my tech stack and staying updated with the latest trends in AI and Cloud Computing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
