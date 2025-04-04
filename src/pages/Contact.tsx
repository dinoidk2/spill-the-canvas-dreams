
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [hasCopiedSocial, setHasCopiedSocial] = useState(false);
  const { toast } = useToast();
  
  const copyEmail = () => {
    navigator.clipboard.writeText('oceanaviktorial@gmail.com');
    setHasCopied(true);
    
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
      duration: 2000,
    });
    
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  
  const copySocial = () => {
    navigator.clipboard.writeText('@oceanaviktoria.nebre');
    setHasCopiedSocial(true);
    
    toast({
      title: "Username copied!",
      description: "Social media handle has been copied to clipboard.",
      duration: 2000,
    });
    
    setTimeout(() => {
      setHasCopiedSocial(false);
    }, 2000);
  };
  
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-impression-pink opacity-20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-impression-blue opacity-20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-impression-yellow opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <motion.div 
        className="max-w-4xl w-full mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="paint-card">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-8 text-center font-playfair"
            variants={itemVariants}
          >
            <span className="brush-stroke brush-stroke-pink">Contact Me</span>
          </motion.h1>
          
          <div className="flex flex-col items-center justify-center space-y-8">
            <motion.div 
              className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden animate-paint-pulse"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-sunset opacity-30 mix-blend-overlay"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-impression-blue via-impression-purple to-impression-pink opacity-40"></div>
                <img 
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                  alt="Contact" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-6 w-full max-w-xl"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="relative p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={copyEmail}
                >
                  <h2 className="text-2xl font-dancing text-impression-purple mb-2 border-b border-impression-purple/20 pb-1">Email</h2>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-impression-purple">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <p className="text-lg font-source-sans break-all text-center mt-2">oceanaviktorial@gmail.com</p>
                  </div>
                  <span className="text-sm text-impression-purple mt-2 block text-center">
                    {hasCopied ? 'Copied to clipboard!' : 'Click to copy'}
                  </span>
                  <div className="absolute top-0 right-0 m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                </div>
                
                <div 
                  className="relative p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={copySocial}
                >
                  <h2 className="text-2xl font-dancing text-impression-blue mb-2 border-b border-impression-blue/20 pb-1">Social Media</h2>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-impression-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <p className="text-lg font-source-sans break-all text-center mt-2">@oceanaviktoria.nebre</p>
                  </div>
                  <span className="text-sm text-impression-blue mt-2 block text-center">
                    {hasCopiedSocial ? 'Copied to clipboard!' : 'Click to copy'}
                  </span>
                  <div className="absolute top-0 right-0 m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-8 rounded-xl bg-gradient-to-br from-white/90 via-[#f9fafc] to-[#e6f0ff]/80 shadow-lg border border-white/60 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-impression-pink/30 via-impression-purple/30 to-impression-blue/30"></div>
                <h2 className="text-2xl font-dancing text-impression-purple mb-3">Let's Connect!</h2>
                <p className="text-lg font-source-sans text-gray-700">
                  I'm always interested in new opportunities, collaborations, or just chatting about art and web development!
                  Feel free to reach out through any of the channels above.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
