import React from 'react';
import { motion } from 'framer-motion';

export default function BuyAnimation() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
        <motion.path
          d="M20 6L9 17L4 12"
          stroke="#4CAF50"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </motion.div>
  );
}