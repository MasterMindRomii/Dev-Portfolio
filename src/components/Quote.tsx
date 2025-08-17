'use client';

import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-16 text-center overflow-hidden">
      <motion.p 
        className="text-lg md:text-xl text-gray-300 leading-relaxed font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.span
          className="block"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Aspiring data engineer dedicated to building scalable solutions that impact everyday life
        </motion.span>
        <motion.span
          className="block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Looking to contribute and work in analytics and machine learning field.
        </motion.span>
        <motion.span
          className="block"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          
        </motion.span>
      </motion.p>
    </div>
  );
}