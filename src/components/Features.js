import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { 
    title: 'EXOSKELETON', 
    description: "Ultra-Hard 30X Cold-Rolled stainless steel. If there was something better, we'd use it.",
    image: '/cybertruck-exoskeleton.jpg'
  },
  { 
    title: 'TESLA ARMOR GLASS', 
    description: "Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.",
    image: '/cybertruck-glass.jpg'
  },
  { 
    title: 'ADAPTIVE AIR SUSPENSION', 
    description: "Raise and lower suspension four inches in either direction for easy access to Cybertruck or the vault, while self-leveling capabilities adapt to any occasion and assist with every job.",
    image: '/cybertruck-suspension.jpg'
  },
  { 
    title: 'FLEXIBLE INTERIOR', 
    description: 'Seat six comfortably with additional storage under the second-row seats. Complete with an advanced 17" touchscreen with an all-new customized user interface.',
    image: '/cybertruck-interior.jpg'
  },
];

function Features() {
  return (
    <section className="py-16 bg-black" id="design">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">DESIGNED FOR UTILITY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={feature.image} alt={feature.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;