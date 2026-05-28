import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface StartupScreenProps {
  onComplete: () => void;
}

export function StartupScreen({ onComplete }: StartupScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0033 0%, #330066 50%, #660099 100%)",
      }}
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -10,
              opacity: 0.5
            }}
            animate={{
              y: window.innerHeight + 10,
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Welcome message */}
      <div className="mb-12 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
            Welcome to
          </h1>
          <h2 className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-2xl">
            Emma Luo's Portfolio
          </h2>
        </motion.div>
      </div>

      {/* Loading bar */}
      <div className="w-96 relative z-10">
        <div className="h-3 bg-purple-900/50 rounded-full overflow-hidden border-2 border-pink-500/50 shadow-lg shadow-pink-500/50">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            style={{
              boxShadow: "0 0 20px rgba(236, 72, 153, 0.8)",
            }}
          />
        </div>
        <motion.p
          className="text-pink-300 text-center mt-4 text-sm font-bold"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading... {progress}%
        </motion.p>
      </div>

      {/* Glitch effect text */}
      <div className="absolute bottom-8 text-center z-10">
        <p className="text-purple-300 text-xs font-mono">
          &gt;&gt; INITIALIZING SYSTEM...
        </p>
      </div>
    </motion.div>
  );
}
