import React from 'react';
import { motion } from 'framer-motion';

const models = [
  { name: 'DUAL MOTOR', price: '$49,900', range: '300+ miles' },
  { name: 'TRI MOTOR', price: '$69,900', range: '500+ miles' },
];

function Orders() {
  return (
    <section className="py-16 bg-black" id="order">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">ORDER YOUR CYBERTRUCK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <motion.div 
              key={model.name}
              className="bg-gray-900 p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{model.name}</h3>
              <p className="text-4xl font-bold mb-2">{model.price}</p>
              <p className="text-xl mb-6">{model.range} of range</p>
              <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
                ORDER NOW
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Orders;