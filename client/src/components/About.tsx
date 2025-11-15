import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div className="absolute top-5 right-10 text-primary/10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-16 h-16" />
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-10 left-10 text-primary/10">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-20 h-20" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          data-testid="text-about-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About The Company
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="p-8 md:p-12 border-t-4 border-t-primary">
            <p className="text-lg leading-relaxed text-foreground" data-testid="text-about-content">
              JEXLA Group stands at the intersection of technological advancement and global responsibility. Our mission is to integrate <strong>Ecosystem Excellence</strong> and <strong>Lives Automation</strong> across diverse sectors, fostering growth that is both impactful and sustainable. We operate with a core belief that superior engineering can, and must, lead to a better quality of life for all stakeholders, from our customers to the environment. Our multi-faceted approach allows us to deliver high-quality products and strategic services globally, driven by a commitment to ethical excellence and pioneering solutions.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
