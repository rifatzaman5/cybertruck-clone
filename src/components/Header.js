import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-md text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          CYBERTRUCK
        </motion.h1>
        <nav className="hidden md:block">
          <motion.ul 
            className="flex space-x-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {['Design', 'Performance', 'Specs', 'Order'].map((item) => (
              <motion.li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300 transition duration-300">
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            {['Design', 'Performance', 'Specs', 'Order'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}

export default Header;