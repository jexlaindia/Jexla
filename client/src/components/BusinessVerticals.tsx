import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Factory, Settings as SettingsIcon, Recycle, Package, Settings } from 'lucide-react';

const businesses = [
  {
    icon: Factory,
    title: 'Manufacturing Industry',
    color: 'text-primary',
    borderColor: 'border-l-primary',
    description: 'JEXLA Group\'s Manufacturing Division is established to pioneer the production of high-quality, sustainable materials. We are initiating operations with the manufacturing of Natural Latex Foam and rebound PU foam, prioritizing eco-friendly processes in line with our commitment to Ecosystem Excellence. Our premium materials are specifically designed for high-demand sectors, including the Furniture, Hospitality, and Automobile industries. We are continually exploring opportunities to diversify our portfolio within the broader manufacturing landscape, always focusing on innovation, efficiency, and quality that exceeds industry benchmarks.',
  },
  {
    icon: SettingsIcon,
    title: 'JEXLA Service',
    color: 'text-blue-600 dark:text-blue-500',
    borderColor: 'border-l-blue-600',
    description: 'The JEXLA Service vertical is dedicated to providing specialized, high-reliability support to organizations. We collaborate with leading companies to offer comprehensive services, including expert installation, proactive maintenance, robust customer support, and sophisticated networking solutions. Our scope covers the end-to-end lifecycle of technical assets, from the deployment of electronic devices to ongoing infrastructure upkeep, ensuring maximum operational uptime and client satisfaction.',
  },
  {
    icon: Recycle,
    title: 'Sustainable Solutions',
    color: 'text-green-600 dark:text-green-500',
    borderColor: 'border-l-green-600',
    description: 'Our commitment to sustainability is realized through driving eco-friendly and impactful technologies. This vertical focuses on researching, implementing, and promoting solutions that minimize environmental impact while maximizing efficiency and societal benefit. From materials sourcing in manufacturing to energy-efficient practices in services, we are pioneering processes that align economic success with planetary well-being.',
  },
  {
    icon: Package,
    title: 'JEXLA Export-Import Services',
    color: 'text-orange-600 dark:text-orange-500',
    borderColor: 'border-l-orange-600',
    description: 'JEXLA Export-Import Services is the gateway for global trade, dedicated to facilitating international commerce with unparalleled efficiency and excellence. We manage complex logistics, ensure regulatory compliance, and provide strategic trade consultancy, allowing our partners to navigate the global marketplace seamlessly. Our goal is to connect domestic products with international demand, supporting global economic flow through reliable and transparent operations.',
  },
];

export default function BusinessVerticals() {
  return (
    <section id="business" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div className="absolute top-20 left-5 text-primary/10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-24 h-24" />
        </motion.div>
      </motion.div>

      <motion.div className="absolute bottom-20 right-10 text-primary/10">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        >
          <Settings className="w-20 h-20" />
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          data-testid="text-business-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Our Diverse Business Sectors
        </motion.h2>

        <div className="space-y-12">
          {businesses.map((business, index) => {
            const Icon = business.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card 
                  className={`p-6 md:p-8 border-l-4 ${business.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  data-testid={`card-business-${index}`}
                >
                  <div className="flex items-start space-x-6">
                    <motion.div 
                      className={`flex-shrink-0 ${business.color}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    >
                      <Icon className="w-12 h-12 md:w-16 md:h-16" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground" data-testid={`text-business-title-${index}`}>
                        {business.title}
                      </h3>
                      <p className="text-base leading-relaxed text-foreground" data-testid={`text-business-description-${index}`}>
                        {business.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
