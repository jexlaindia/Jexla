import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import ceoImage from '@assets/IMG-20251115-WA0005_1763195040544.jpg';

export default function Promoters() {
  return (
    <section id="promoters" className="bg-muted py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          data-testid="text-promoters-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Our Promoters
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="flex flex-col md:flex-row items-center p-8 md:p-10 space-y-8 md:space-y-0 md:space-x-10">
            <motion.div 
              className="flex-shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-32 h-40 md:w-40 md:h-52 bg-muted rounded-lg overflow-hidden shadow-lg border-2 border-primary">
                <img 
                  src={ceoImage}
                  alt="Photo of Mr. Mayur J" 
                  className="w-full h-full object-cover"
                  data-testid="img-ceo-photo"
                />
              </div>
            </motion.div>

            <motion.div 
              className="flex-grow text-center md:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-ceo-name">
                Mr. Mayur J's
              </h3>
              <p className="text-xl text-primary mb-4" data-testid="text-ceo-title">
                Founder & CEO
              </p>
              <p className="text-base leading-relaxed text-foreground" data-testid="text-ceo-bio">
                JEXLA Group is promoted by <strong>Mr. Mayur J's</strong>, a distinguished <strong>Bachelor of Engineering graduate</strong>. Mr. Mayur J's brings a wealth of cross-industry experience, having successfully managed and scaled operations in multiple business domains. His expertise spans the intricate dynamics of the <strong>manufacturing industry</strong>, the client-focused demands of the <strong>services sector</strong>, and the high standards of the <strong>hospitality industry</strong>. His vision is the driving force behind the Group's dedication to integrated excellence and automation across all ventures.
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
