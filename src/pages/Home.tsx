
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const Home = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Welcome toast
    toast({
      title: "Welcome to my Portfolio",
      description: "Click around to explore and enjoy the interactive elements!",
      duration: 5000,
    });
  }, [toast]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Enhanced background elements with more interesting patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-impression-yellow opacity-20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-impression-purple opacity-20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-impression-blue opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-impression-pink opacity-20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      {/* Paint brush strokes */}
      <div className="absolute inset-0 pointer-events-none -z-5 overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-32 h-24 opacity-20 rotate-12 bg-impression-cream rounded-full blur-md animate-brush-rotate"></div>
        <div className="absolute bottom-[25%] right-[8%] w-40 h-16 opacity-30 -rotate-6 bg-impression-orange rounded-full blur-md animate-paint-pulse"></div>
      </div>
      
      <motion.div 
        className="max-w-4xl w-full mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="paint-card">
          <div className="flex flex-col items-center justify-center space-y-8 py-8">
            {/* Main title */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-center leading-tight animate-paint-float"
              variants={itemVariants}
            >
              <span className="brush-stroke">Spill the</span> <br />
              <span className="brush-stroke brush-stroke-purple">Canvas Dreams</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-mono text-black text-center leading-relaxed"
              variants={itemVariants}
            >
              Oceana Viktoria S. Nebre
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-center text-muted-foreground max-w-2xl font-source-sans"
              variants={itemVariants}
            >
              Welcome to a world where impressionism meets digital art. An artistic journey showcasing my portfolio and passions.
            </motion.p>
            
            <motion.div 
              className="relative w-56 h-56 sm:w-80 sm:h-80 rounded-full overflow-hidden animate-paint-pulse"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-canvas opacity-30 mix-blend-overlay"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-impression-blue via-impression-purple to-impression-pink opacity-40"></div>
                <img 
                  src="/lovable-uploads/0a546865-b23b-4350-851e-35cdf210549d.png" 
                  alt="Oceana Viktoria" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="max-w-2xl text-center space-y-4"
              variants={itemVariants}
            >
              <p className="text-lg text-gray-700 font-source-sans leading-relaxed">
                I'm a student, digital artist, and web developer with a love for thoughtful design and creative expression. This space is a collection of the work I'm building, the art I'm making, and the ideas I'm exploring.
              </p>
              <p className="text-lg text-gray-700 font-source-sans leading-relaxed">
                This is a space where I share my work, ideas, and interests — from student leadership projects to creative explorations in drawing, painting, and storytelling.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-3 gap-4 mt-8 w-full max-w-lg"
              variants={itemVariants}
            >
              <Link 
                to="/profile" 
                className="paint-border hover:scale-105 transition-transform"
              >
                <div className="bg-white py-4 px-8 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-playfair font-bold text-impression-purple">Profile</span>
                </div>
              </Link>
              
              <Link 
                to="/hobbies" 
                className="paint-border hover:scale-105 transition-transform"
              >
                <div className="bg-white py-4 px-8 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-playfair font-bold text-impression-yellow">Hobbies</span>
                </div>
              </Link>
              
              <Link 
                to="/contact" 
                className="paint-border hover:scale-105 transition-transform"
              >
                <div className="bg-white py-4 px-8 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-playfair font-bold text-impression-pink">Contact</span>
                </div>
              </Link>
            </motion.div>
            
            <motion.div 
              className="text-center mt-8"
              variants={itemVariants}
            >
              <p className="text-muted-foreground animate-brush-rotate font-dancing">
                ✨ Move your mouse to create paint trails! ✨
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
