
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-impression-yellow opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-impression-purple opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-impression-blue opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl w-full mx-auto">
        <div className="paint-card">
          <div className="flex flex-col items-center justify-center space-y-8 py-8">
            {/* Main title */}
            <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight animate-paint-float">
              <span className="brush-stroke">Spill the</span> <br />
              <span className="brush-stroke brush-stroke-purple">Canvas Dreams</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-center text-muted-foreground max-w-2xl">
              Welcome to a world where impressionism meets digital art. An artistic journey showcasing my portfolio and passions.
            </p>
            
            <div className="relative w-56 h-56 sm:w-80 sm:h-80 rounded-full overflow-hidden animate-paint-pulse">
              <div className="absolute inset-0 bg-gradient-canvas opacity-30 mix-blend-overlay"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-impression-blue via-impression-purple to-impression-pink opacity-40"></div>
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                  alt="Artistic impression" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              <Link 
                to="/profile" 
                className="paint-border hover:scale-105 transition-transform"
              >
                <div className="bg-white py-4 px-8 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-dancing font-bold text-impression-purple">Profile</span>
                </div>
              </Link>
              
              <Link 
                to="/hobbies" 
                className="paint-border hover:scale-105 transition-transform"
              >
                <div className="bg-white py-4 px-8 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-dancing font-bold text-impression-yellow">Hobbies</span>
                </div>
              </Link>
              
              <Link 
                to="/gallery" 
                className="paint-border hover:scale-105 transition-transform"
              >
                <div className="bg-white py-4 px-8 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-dancing font-bold text-impression-blue">Gallery</span>
                </div>
              </Link>
              
              <Link 
                to="/contact" 
                className="paint-border hover:scale-105 transition-transform"
              >
                <div className="bg-white py-4 px-8 rounded-xl flex flex-col items-center justify-center">
                  <span className="text-2xl font-dancing font-bold text-impression-pink">Contact</span>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground animate-brush-rotate">
                ✨ Click and drag your mouse to create paint splatters! ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
