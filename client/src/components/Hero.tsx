import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-purple-950 to-slate-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.svg 
        className="absolute top-0 right-0 w-1/2 h-full opacity-20" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#059669', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.8 }} />
          </linearGradient>
        </defs>
        <circle cx="80%" cy="20%" r="200" fill="url(#hero-gradient)" />
        <circle cx="90%" cy="60%" r="150" fill="url(#hero-gradient)" opacity="0.5" />
      </motion.svg>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          className="inline-block mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]" xmlns="http://www.w3.org/2000/svg">
              <motion.rect
                x="5%"
                y="10%"
                width="90%"
                height="80%"
                rx="20"
                fill="none"
                stroke="#059669"
                strokeWidth="2"
                className="opacity-60"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </svg>
            <h1 
              className="text-4xl sm:text-6xl font-extrabold mb-2 relative"
              data-testid="text-hero-title"
            >
              JEXLA Group
            </h1>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-lg sm:text-2xl font-light mb-8 text-primary tracking-wide" 
          data-testid="text-hero-tagline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Jagtap Ecosystem Excellence And Lives Automation
        </motion.p>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-base md:text-xl opacity-90 leading-relaxed" data-testid="text-hero-description">
            We are a dynamic and future-focused enterprise dedicated to <span className="text-primary font-semibold">Engineering for a Better Life and Sustainable Future</span>. Where innovation meets purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
