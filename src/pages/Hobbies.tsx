
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define hobby types for our gallery
type HobbyType = 'drawing' | 'painting' | 'reading' | 'watching';

type Hobby = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: HobbyType;
  details?: {
    // For reading hobby
    genres?: string[];
    favorites?: string[];
    // For watching hobby
    examples?: string[];
  };
};

const Hobbies = () => {
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  // Hobbies data
  const hobbies: Hobby[] = [
    {
      id: '1',
      name: 'Drawing',
      description: 'Creating artwork with pencils, charcoal, and digital tools. Drawing allows me to express my thoughts and emotions in visual form, capturing moments and ideas with simple lines and shapes.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop',
      category: 'drawing'
    },
    {
      id: '2',
      name: 'Painting',
      description: 'I dabble in gouache, watercolor, and digital painting. Each medium offers its own unique qualities that allow me to explore color, texture, and emotion in different ways.',
      image: 'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?w=800&auto=format&fit=crop',
      category: 'painting'
    },
    {
      id: '3',
      name: 'Reading',
      description: 'Reading transports me to different worlds and perspectives. I enjoy diving into stories that challenge my thinking and expand my understanding of human experience and emotion.',
      image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&auto=format&fit=crop',
      category: 'reading',
      details: {
        genres: ['Manga', 'Manhwa', 'Manhua', 'Web Novel', 'Novel'],
        favorites: ['Schoolgirl by Osamu Dazai', 'No Longer Human by Osamu Dazai', 'Omniscient Reader\'s Viewpoint', 'The Guy She Was Interested in Was Not A Guy At All']
      }
    },
    {
      id: '4',
      name: 'Watching',
      description: 'I love immersing myself in animated series and shows that combine beautiful visuals with compelling storytelling. These media inspire my own artistic journey and creative thinking.',
      image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=800&auto=format&fit=crop',
      category: 'watching',
      details: {
        examples: ['Arcane', 'Haikyuu!!', 'Alien Stage']
      }
    }
  ];
  
  // Filter hobbies based on category
  const filteredHobbies = filter === 'all' 
    ? hobbies 
    : hobbies.filter(hobby => hobby.category === filter);
  
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
    <div className="min-h-screen flex flex-col items-center py-24 px-4 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-impression-yellow opacity-10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-impression-green opacity-10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-impression-pink opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-impression-blue opacity-10 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <motion.div 
        className="max-w-6xl w-full mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="paint-card">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-center"
            variants={itemVariants}
          >
            <span className="brush-stroke brush-stroke-purple">My Hobbies</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Explore my creative passions and interests through this interactive gallery.
            Click on any image to learn more!
          </motion.p>
          
          {/* Filter buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-impression-purple text-white shadow-md' 
                  : 'bg-white hover:bg-impression-purple/10'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('drawing')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'drawing' 
                  ? 'bg-impression-blue text-white shadow-md' 
                  : 'bg-white hover:bg-impression-blue/10'
              }`}
            >
              Drawing
            </button>
            <button 
              onClick={() => setFilter('painting')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'painting' 
                  ? 'bg-impression-yellow text-white shadow-md' 
                  : 'bg-white hover:bg-impression-yellow/10'
              }`}
            >
              Painting
            </button>
            <button 
              onClick={() => setFilter('reading')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'reading' 
                  ? 'bg-impression-green text-white shadow-md' 
                  : 'bg-white hover:bg-impression-green/10'
              }`}
            >
              Reading
            </button>
            <button 
              onClick={() => setFilter('watching')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'watching' 
                  ? 'bg-impression-pink text-white shadow-md' 
                  : 'bg-white hover:bg-impression-pink/10'
              }`}
            >
              Watching
            </button>
          </motion.div>
          
          {/* Gallery grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
            variants={containerVariants}
          >
            {filteredHobbies.map((hobby) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={hobby.id}
                className="gallery-item rounded-xl overflow-hidden shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => setSelectedHobby(hobby)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={hobby.image} 
                    alt={hobby.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-impression-purple/80 via-impression-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="gallery-title font-playfair text-2xl text-white drop-shadow-md absolute bottom-4 left-4 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {hobby.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Hobby detail modal */}
          {selectedHobby && (
            <div 
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" 
              onClick={() => setSelectedHobby(null)}
            >
              <motion.div 
                className="bg-white rounded-xl p-6 max-w-3xl w-full mx-4 relative shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-impression-purple text-white hover:bg-impression-purple/80 transition-colors"
                  onClick={() => setSelectedHobby(null)}
                >
                  ✕
                </button>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/2">
                    <img 
                      src={selectedHobby.image} 
                      alt={selectedHobby.name} 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="sm:w-1/2">
                    <h3 className="text-3xl font-playfair text-impression-purple mb-3">{selectedHobby.name}</h3>
                    <p className="text-lg font-source-sans text-gray-700">{selectedHobby.description}</p>
                    
                    {selectedHobby.category === 'reading' && selectedHobby.details && (
                      <div className="mt-6 space-y-4">
                        <div className="p-4 bg-gradient-to-br from-white/90 via-[#f9fafc] to-[#e6f0ff]/80 rounded-lg shadow-md border border-white/60">
                          <h4 className="text-xl font-playfair text-impression-blue mb-2">Genres</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedHobby.details.genres?.map((genre, index) => (
                              <span key={index} className="px-3 py-1 bg-impression-blue/10 text-impression-blue rounded-full text-sm">
                                {genre}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gradient-to-br from-white/90 via-[#f9fafc] to-[#e6f0ff]/80 rounded-lg shadow-md border border-white/60">
                          <h4 className="text-xl font-playfair text-impression-purple mb-2">Favorite Books</h4>
                          <ul className="list-disc list-inside text-gray-700">
                            {selectedHobby.details.favorites?.map((book, index) => (
                              <li key={index}>{book}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {selectedHobby.category === 'watching' && selectedHobby.details && (
                      <div className="mt-6 p-4 bg-gradient-to-br from-white/90 via-[#f9fafc] to-[#e6f0ff]/80 rounded-lg shadow-md border border-white/60">
                        <h4 className="text-xl font-playfair text-impression-pink mb-2">Favorite Shows</h4>
                        <ul className="list-disc list-inside text-gray-700">
                          {selectedHobby.details.examples?.map((show, index) => (
                            <li key={index}>{show}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Hobbies;
