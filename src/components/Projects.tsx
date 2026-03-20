import { motion } from 'motion/react';
import { ExternalLink, Github, Server, Cloud, Database } from 'lucide-react';

const projects = [
  {
    title: 'Laboratory Management System',
    description: 'A console-based application to manage laboratory test records including sample tracking and report generation. Implemented file handling and menu-driven operations.',
    tech: ['C++', 'File Handling', 'Data Structures'],
    icon: <Database className="w-6 h-6" />,
    link: '#',
    type: 'Software'
  },
  {
    title: 'Hosting Web App on AWS',
    description: 'Deployed a web application using AWS services including EC2, Route 53, Load Balancer, and Auto Scaling. Configured for high availability and fault tolerance.',
    tech: ['AWS', 'EC2', 'Route 53', 'Auto Scaling'],
    icon: <Cloud className="w-6 h-6" />,
    link: '#',
    type: 'Cloud'
  },
  {
    title: 'Migration: Local Red Hat to AWS',
    description: 'Migrated a local Red Hat Linux environment to an AWS EC2 instance. Configured and optimized the cloud-based system for application deployment.',
    tech: ['Linux', 'AWS EC2', 'Cloud Migration'],
    icon: <Server className="w-6 h-6" />,
    link: '#',
    type: 'DevOps'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
            <span className="text-accent-cyan mr-2">02.</span>Featured_Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card-bg border border-white/5 hover:neon-border-cyan transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="flex gap-4 text-gray-500">
                  <Github className="w-5 h-5 hover:text-accent-cyan cursor-pointer transition-colors" />
                  <ExternalLink className="w-5 h-5 hover:text-accent-cyan cursor-pointer transition-colors" />
                </div>
              </div>

              <span className="text-xs font-mono text-accent-purple mb-2 block uppercase tracking-widest">{project.type}</span>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
