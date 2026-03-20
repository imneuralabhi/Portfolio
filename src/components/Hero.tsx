import { motion } from 'motion/react';
import { ReactTyped } from 'react-typed';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 inline-block px-4 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-sm font-mono tracking-wider"
        >
          SYSTEM STATUS: ONLINE
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-4 font-mono tracking-tighter text-white neon-text-cyan">
          ABHI MISHRA
        </h1>
        
        <div className="text-xl md:text-3xl font-mono text-accent-purple mb-8 h-12">
          <ReactTyped
            strings={[
              "AI Intern @ Workfloww.ai",
              "AI Enthusiast",
              "Problem Solver",
              "Cloud Explorer"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        <p className="max-w-xl mx-auto text-gray-400 mb-10 text-lg leading-relaxed">
          Aspiring tech enthusiast currently exploring the realms of Artificial Intelligence, 
          Cloud Computing, and Software Development.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="#projects"
            className="glow-button px-8 py-3 bg-accent-cyan text-bg-dark font-bold rounded-lg flex items-center gap-2 group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            VIEW PROJECTS
          </a>
          <a 
            href="#contact"
            className="glow-button px-8 py-3 border border-accent-cyan/50 text-accent-cyan font-bold rounded-lg hover:bg-accent-cyan/10 transition-colors"
          >
            CONTACT ME
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1 h-8 bg-gradient-to-b from-accent-cyan to-transparent rounded-full"
        />
      </motion.div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20" />
    </section>
  );
};
