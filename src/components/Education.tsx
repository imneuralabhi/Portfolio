import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Jagannath University',
    duration: '2023 – 2026',
    details: 'Key areas: Programming, Data Structures, Software Development',
    status: 'Current'
  },
  {
    degree: 'HSC (12th) & SSC (10th)',
    institution: 'LBST Inter College',
    duration: '2019 – 2022',
    details: 'Achieved top performance in Computer Science',
    status: 'Completed'
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
            <span className="text-accent-cyan mr-2">04.</span>Education_History
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
        </div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent-cyan before:via-accent-purple before:to-transparent">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent-cyan bg-bg-dark text-accent-cyan shadow-[0_0_10px_rgba(0,245,255,0.5)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-white/5 border border-white/10 hover:neon-border-purple transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-accent-purple font-mono text-xs">
                    <Calendar className="w-3 h-3" />
                    {item.duration}
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${item.status === 'Current' ? 'border-matrix-green text-matrix-green bg-matrix-green/5' : 'border-gray-500 text-gray-500'}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.degree}</h3>
                <p className="text-accent-cyan font-mono text-sm mb-3">{item.institution}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
