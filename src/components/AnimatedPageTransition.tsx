
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AnimatedPageTransitionProps {
  children: React.ReactNode;
}

const AnimatedPageTransition: React.FC<AnimatedPageTransitionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div 
      className={`page-container transition-all duration-700 ease-in-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedPageTransition;
