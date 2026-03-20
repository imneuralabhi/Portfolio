import { motion } from 'motion/react';
import { Github, Linkedin, Send, Terminal, Twitter } from 'lucide-react';
import { useState, type FormEvent, type ReactNode } from 'react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const profileLinks = {
    github: 'https://github.com/imneuralabhi',
    linkedin: 'https://www.linkedin.com/in/neuralabhi/',
    x: 'https://x.com/neuralabhi',
    email: 'abhimishra8622@gmail.com',
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact | ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    window.location.href = `mailto:${profileLinks.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white">
            <span className="text-accent-cyan mr-2">05.</span>Contact_Me
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="terminal-window h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs font-mono text-gray-400">contact_info.txt</span>
              </div>
              <div className="p-8 font-mono flex flex-col items-center justify-center text-center h-[calc(100%-40px)]">
                <p className="text-matrix-green mb-12 text-lg">Ready to collaborate on futuristic projects?</p>
                
                <div className="space-y-8 w-full">
                  <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-6">Transmission Channels</p>
                  <div className="flex justify-center gap-8">
                    <SocialLink icon={<Github className="w-6 h-6" />} href={profileLinks.github} />
                    <SocialLink icon={<Linkedin className="w-6 h-6" />} href={profileLinks.linkedin} />
                    <SocialLink icon={<Twitter className="w-6 h-6" />} href={profileLinks.x} />
                  </div>
                </div>

                <div className="mt-16 p-4 border border-accent-cyan/20 rounded bg-accent-cyan/5 w-full">
                  <p className="text-[10px] text-accent-cyan/60 uppercase tracking-widest">Encryption Status</p>
                  <p className="text-white text-xs mt-1">End-to-End Secure Protocol Active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="space-y-2">
                <label className="text-xs font-mono text-accent-cyan uppercase tracking-widest">Name</label>
                <input 
                  type="text"
                  value={formState.name}
                  onChange={(event) => setFormState((previous) => ({ ...previous, name: event.target.value }))}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-accent-cyan uppercase tracking-widest">Email</label>
                <input 
                  type="email"
                  value={formState.email}
                  onChange={(event) => setFormState((previous) => ({ ...previous, email: event.target.value }))}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-accent-cyan uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  value={formState.message}
                  onChange={(event) => setFormState((previous) => ({ ...previous, message: event.target.value }))}
                  placeholder="Type your message..."
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-cyan transition-colors font-mono resize-none"
                />
              </div>
              <button type="submit" className="w-full glow-button py-4 bg-accent-cyan text-bg-dark font-bold rounded-lg flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                SEND MESSAGE
              </button>
              
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 mt-4">
                <Terminal className="w-3 h-3" />
                <span>System ready for transmission...</span>
                <span className="animate-pulse">_</span>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ icon, href }: { icon: ReactNode, href: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full border border-white/10 text-gray-400 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-all"
  >
    {icon}
  </a>
);
