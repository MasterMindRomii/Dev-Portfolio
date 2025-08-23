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
          I&apos;m Romi Gupta, a recent graduate from Maharaja Surajmal Institute
        </motion.span>
        <motion.span
          className="block"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          with a Bachelor&apos;s in Computer Applications and currently pursuing MCA in AI from IGNOU.
        </motion.span>
        <motion.span
          className="block"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Specializing in Data Science & Analytics, seeking impactful opportunities in the field.
        </motion.span>
      </motion.p>
    </div>
  );
}