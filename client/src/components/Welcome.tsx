import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

export default function Welcome() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <motion.div className="absolute top-10 right-10 text-primary/20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-24 h-24 md:w-32 md:h-32" />
        </motion.div>
      </motion.div>

      <motion.div className="absolute top-1/4 left-5 text-primary/15">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-16 h-16 md:w-20 md:h-20" />
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-32 right-1/4 text-primary/10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-20 h-20 md:w-28 md:h-28" />
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-20 left-1/3 text-primary/15">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-12 h-12 md:w-16 md:h-16" />
        </motion.div>
      </motion.div>

      <motion.div className="absolute top-1/2 right-1/3 text-primary/10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-14 h-14 md:w-18 md:h-18" />
        </motion.div>
      </motion.div>

      <motion.svg 
        className="absolute inset-0 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M 0 150 Q 150 100, 300 150 T 600 150"
          fill="none"
          stroke="url(#primary-gradient)"
          strokeWidth="4"
          className="opacity-80"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        <motion.ellipse
          cx="150"
          cy="450"
          rx="280"
          ry="140"
          fill="none"
          stroke="url(#primary-gradient)"
          strokeWidth="4"
          className="opacity-70"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 50 700 Q 250 650, 450 700"
          fill="none"
          stroke="url(#primary-gradient)"
          strokeWidth="4"
          className="opacity-60"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
        />
      </motion.svg>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center min-h-[80vh] space-y-16">
        <motion.div 
          className="text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary text-lg md:text-xl font-light tracking-widest" data-testid="text-tagline">
            ECOSYSTEM EXCELLENCE
          </p>
        </motion.div>

        <motion.div 
          className="relative inline-block self-start max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <svg className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)]" xmlns="http://www.w3.org/2000/svg">
            <motion.ellipse
              cx="50%"
              cy="50%"
              rx="48%"
              ry="48%"
              fill="none"
              stroke="url(#primary-gradient)"
              strokeWidth="3"
              className="opacity-80"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </svg>
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight" data-testid="text-hero-main">
            FROM VISION TO EXCELLENCE
          </h1>
        </motion.div>

        <motion.div 
          className="relative inline-block self-end max-w-xl ml-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <svg className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)]" xmlns="http://www.w3.org/2000/svg">
            <motion.rect
              x="5%"
              y="5%"
              width="90%"
              height="90%"
              rx="80"
              fill="rgba(59, 130, 246, 0.3)"
              stroke="url(#primary-gradient)"
              strokeWidth="3"
              className="opacity-90"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            />
          </svg>
          <div className="relative bg-blue-600/40 backdrop-blur-sm rounded-[60px] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" data-testid="text-welcome-title">
              Welcome to JEXLA Group
            </h2>
            <p className="text-base md:text-lg text-white/90 leading-relaxed" data-testid="text-welcome-content">
              India's leading name in innovative and integrated ecosystem solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
