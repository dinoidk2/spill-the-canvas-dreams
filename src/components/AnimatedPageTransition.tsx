
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedPageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.5
    }
  }
};

const AnimatedPageTransition: React.FC<AnimatedPageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  
  useEffect(() => {
    setDisplayLocation(location);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="page-container min-h-screen w-full pt-24"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedPageTransition;
