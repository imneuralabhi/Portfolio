import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    title: 'Python Programming',
    issuer: 'SWAYAM',
    date: '2024',
    id: 'SW-PY-2024'
  },
  {
    title: 'Fundamentals of Computers (FOC)',
    issuer: 'SWAYAM',
    date: '2023',
    id: 'SW-FOC-2023'
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
              <span className="text-accent-cyan mr-2">03.</span>Certifications
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-purple/30 transition-all group"
              >
                <div className="p-4 rounded-full bg-accent-purple/10 text-accent-purple group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-matrix-green" />
                    <span className="text-xs font-mono text-accent-cyan">{cert.issuer}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500 font-mono">ID: {cert.id}</span>
                    <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
