import { motion } from 'motion/react';
import { ReactTyped } from 'react-typed';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-bg-dark flex flex-col items-center justify-center font-mono"
    >
      <div className="w-full max-w-md px-8">
        <div className="text-matrix-green mb-4 text-lg">
          <ReactTyped
            strings={['Initializing Abhi.exe...', 'Loading system modules...', 'Establishing secure connection...', 'Access granted. Welcome.']}
            typeSpeed={40}
            backSpeed={20}
            onComplete={() => setTimeout(onComplete, 1000)}
          />
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-full bg-accent-cyan shadow-[0_0_10px_#00f5ff]"
          />
        </div>
      </div>
    </motion.div>
  );
};
