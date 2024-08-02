import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  { name: 'Peak Power', value: '845 hp' },
  { name: 'Range (EPA est.)', value: '500+ miles' },
  { name: '0-60 mph', value: '< 2.9 seconds' },
  { name: 'Top Speed', value: 'Up to 130 mph' },
  { name: 'Towing Capacity', value: '14,000+ lbs' },
  { name: 'Payload', value: '3,500 lbs' },
  { name: 'Drag Coefficient', value: '0.30 Cd' },
  { name: 'Vault Length', value: '6.5 feet' },
];

function Specs() {
  return (
    <section className="py-16 bg-gray-900" id="specs">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">CYBERTRUCK SPECS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => (
            <motion.div 
              key={spec.name}
              className="bg-black p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-400">{spec.name}</h3>
              <p className="text-3xl font-bold">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specs;