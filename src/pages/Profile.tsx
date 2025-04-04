
import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
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
    <div className="min-h-screen flex flex-col items-center justify-center py-24 px-4 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-impression-blue opacity-10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-impression-purple opacity-10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-impression-pink opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-impression-cream/5 via-impression-green/5 to-impression-blue/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      <motion.div 
        className="max-w-4xl w-full mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="paint-card">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 text-center"
            variants={itemVariants}
          >
            <span className="brush-stroke brush-stroke-blue">Profile</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              className="w-full md:w-1/3 flex justify-center"
              variants={itemVariants}
            >
              <div className="relative w-56 h-56 rounded-full overflow-hidden animate-paint-pulse">
                <div className="absolute inset-0 bg-gradient-purple opacity-30 mix-blend-overlay"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-impression-cream via-impression-pink to-impression-orange opacity-40"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-2/3"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all border border-white/80">
                  <h2 className="text-2xl font-playfair text-impression-purple mb-2 border-b border-impression-purple/20 pb-1">Name</h2>
                  <p className="text-lg font-source-sans">Oceana Viktoria S. Nebre</p>
                </div>
                
                <div className="p-5 rounded-xl bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all border border-white/80">
                  <h2 className="text-2xl font-playfair text-impression-yellow mb-2 border-b border-impression-yellow/20 pb-1">Age</h2>
                  <p className="text-lg font-source-sans">15</p>
                </div>
                
                <div className="p-5 rounded-xl bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all border border-white/80">
                  <h2 className="text-2xl font-playfair text-impression-blue mb-2 border-b border-impression-blue/20 pb-1">Occupation</h2>
                  <p className="text-lg font-source-sans">Student / Digital Artist / Web Developer</p>
                </div>
                
                <div className="p-5 rounded-xl bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all border border-white/80">
                  <h2 className="text-2xl font-playfair text-impression-orange mb-2 border-b border-impression-orange/20 pb-1">Education</h2>
                  <p className="text-lg font-source-sans">San Beda College Alabang</p>
                </div>
              </div>
              
              <div className="mt-8 p-8 rounded-xl bg-gradient-to-br from-white/90 via-[#f9fafc] to-[#e6f0ff]/80 shadow-lg border border-white/60 relative overflow-hidden shadow-impression-purple/10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-impression-blue/30 via-impression-purple/30 to-impression-pink/30"></div>
                <h3 className="text-2xl font-playfair text-impression-purple mb-3">About Me</h3>
                
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed font-source-sans text-gray-700">
                    I'm a student leader with a focus on practical solutions, creative thinking, and student well-being. I'm passionate about improving academic systems, creating meaningful initiatives, and building spaces where people feel supported and heard.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-source-sans text-gray-700">
                    Outside of leadership, I'm deeply interested in the arts. Drawing is my main creative outlet, and I also enjoy painting, reading manga, manhwa, manhua, and classic literature. Art plays a central role in how I understand and engage with the world.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
