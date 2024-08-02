// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/cybertruck-hero.jpg')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="z-10 text-center">
        <motion.h2 
          className="text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          CYBERTRUCK
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Better utility than a truck with more performance than a sports car
        </motion.p>
        <motion.button 
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ORDER NOW
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;