import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <ParticlesBackground />
          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Education />
            <Contact />
          </main>

          <footer className="py-12 border-t border-white/5 text-center font-mono text-xs text-gray-600">
            <div className="max-w-6xl mx-auto px-4">
              <p>© {new Date().getFullYear()} ABHI MISHRA. ALL RIGHTS RESERVED.</p>
              <p className="mt-2 text-accent-cyan/40 tracking-widest">DESIGNED FOR THE FUTURE</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
