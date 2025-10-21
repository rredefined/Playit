'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Loading Design */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-16"
            >
              {/* Outer Container for Animation */}
              <div className="relative w-[160px] h-[160px] flex items-center justify-center">
                {/* Glow Effect */}
                <div className="absolute inset-[-30px] blur-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 via-white/10 to-purple-500/20" />
                </div>
                
                {/* Rotating Elements */}
                <div className="absolute inset-0">
                  {/* Outer Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 0 20px rgba(255,255,255,0.05)'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Middle Ring */}
                  <motion.div
                    className="absolute inset-[-15px] rounded-full"
                    style={{
                      border: '1px solid rgba(255,255,255,0.05)',
                      boxShadow: '0 0 20px rgba(255,255,255,0.03)'
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Animated Dots */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-purple-500/50"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 45}deg) translateY(-40px)`,
                        transformOrigin: '50% 50%'
                      }}
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Center Element */}
                <motion.div
                  className="relative w-[12px] h-[12px] rounded-full bg-purple-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-purple-400 blur-sm" />
                </motion.div>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "15rem", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-60 mb-6"
            >
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500/40 via-white/60 to-purple-500/40"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative flex flex-col items-center"
            >
              <div className="text-sm font-medium tracking-widest text-white/30">
                LOADING EXPERIENCE
              </div>
              <motion.div
                className="mt-2 text-white/50 text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {progress}%
              </motion.div>
            </motion.div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,90,213,0.05)_0%,transparent_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader; 