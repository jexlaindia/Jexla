import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm" 
        data-testid="text-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        &copy; 2024 JEXLA Group. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
