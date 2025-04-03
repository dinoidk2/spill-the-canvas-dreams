
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define hobby types for our gallery
type Hobby = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: 'art' | 'reading' | 'other';
};

const Hobbies = () => {
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  // Hobbies data
  const hobbies: Hobby[] = [
    {
      id: '1',
      name: 'Drawing',
      description: 'Creating artwork with pencils, charcoal, and digital tools.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop',
      category: 'art'
    },
    {
      id: '2',
      name: 'Painting',
      description: 'Expressing myself through colors, brushstrokes, and canvas.',
      image: 'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?w=800&auto=format&fit=crop',
      category: 'art'
    },
    {
      id: '3',
      name: 'Reading Manga',
      description: 'Exploring Japanese comic books and graphic novels.',
      image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&auto=format&fit=crop',
      category: 'reading'
    },
    {
      id: '4',
      name: 'Reading Manhwa',
      description: 'Diving into Korean comics and their unique storytelling style.',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop',
      category: 'reading'
    },
    {
      id: '5',
      name: 'Reading Manhua',
      description: 'Enjoying Chinese comics with their distinctive artistic approach.',
      image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&auto=format&fit=crop',
      category: 'reading'
    }
  ];
  
  // Filter hobbies based on category
  const filteredHobbies = filter === 'all' 
    ? hobbies 
    : hobbies.filter(hobby => hobby.category === filter);
  
  return (
    <div className="min-h-screen flex flex-col items-center py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-impression-yellow opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-impression-green opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl w-full mx-auto">
        <div className="paint-card">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            <span className="brush-stroke brush-stroke-purple">My Hobbies</span>
          </h1>
          
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore my creative passions and interests through this interactive gallery.
            Click on any image to learn more!
          </p>
          
          {/* Filter buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-impression-purple text-white' 
                  : 'bg-white hover:bg-impression-purple/10'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('art')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'art' 
                  ? 'bg-impression-blue text-white' 
                  : 'bg-white hover:bg-impression-blue/10'
              }`}
            >
              Art
            </button>
            <button 
              onClick={() => setFilter('reading')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'reading' 
                  ? 'bg-impression-yellow text-white' 
                  : 'bg-white hover:bg-impression-yellow/10'
              }`}
            >
              Reading
            </button>
          </div>
          
          {/* Gallery grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredHobbies.map((hobby) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={hobby.id}
                className="gallery-item"
                onClick={() => setSelectedHobby(hobby)}
              >
                <img 
                  src={hobby.image} 
                  alt={hobby.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{hobby.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Hobby detail modal */}
          {selectedHobby && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedHobby(null)}>
              <div 
                className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 relative" 
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-impression-purple text-white"
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
                    <h3 className="text-3xl font-dancing text-impression-purple mb-3">{selectedHobby.name}</h3>
                    <p className="text-lg text-gray-700">{selectedHobby.description}</p>
                    
                    <div className="mt-6 p-4 bg-impression-cream/30 rounded-lg">
                      <h4 className="text-xl font-dancing text-impression-blue mb-2">Why I love it</h4>
                      <p className="text-gray-700">
                        This hobby allows me to express my creativity and provides a wonderful
                        escape into imagination. It's both challenging and relaxing!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
