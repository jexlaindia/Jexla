import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Wrench } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Business Inquiry',
    value: 'Jexla.group@gmail.com',
    type: 'email' as const,
  },
  {
    icon: Phone,
    title: 'Direct Contact',
    value: '+91 9552388141',
    type: 'phone' as const,
  },
  {
    icon: Wrench,
    title: 'Service Division',
    value: 'Jexla.service@gmail.com',
    type: 'email' as const,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-white">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-primary"
          data-testid="text-contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-lg mb-10 text-gray-300" 
          data-testid="text-contact-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We look forward to partnering with you on your next venture.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card 
                  className="bg-gray-800 border-gray-700 p-6 transition-all duration-300 hover:bg-gray-700 hover:scale-105"
                  data-testid={`card-contact-${index}`}
                >
                  <Icon className="w-8 h-8 text-primary mb-2 mx-auto" />
                  <h4 className="font-semibold mb-1 text-white" data-testid={`text-contact-title-${index}`}>
                    {contact.title}
                  </h4>
                  {contact.type === 'email' ? (
                    <a 
                      href={`mailto:${contact.value}`} 
                      className="text-white hover:text-primary text-lg transition-colors"
                      data-testid={`link-contact-${index}`}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="text-white text-lg" data-testid={`text-contact-value-${index}`}>
                      {contact.value}
                    </span>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
