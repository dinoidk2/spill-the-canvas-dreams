
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type ArtworkItem = {
  id: string;
  title: string;
  image: string;
  technique: string;
  year: string;
};

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);
  
  const artworks: ArtworkItem[] = [
    {
      id: '1',
      title: 'Impressionist Sunset',
      image: 'https://images.unsplash.com/photo-1579541591969-96baa433f545?w=800&auto=format&fit=crop',
      technique: 'Digital Painting',
      year: '2023'
    },
    {
      id: '2',
      title: 'Abstract Emotions',
      image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&auto=format&fit=crop',
      technique: 'Mixed Media',
      year: '2024'
    },
    {
      id: '3',
      title: 'Nature\'s Whisper',
      image: 'https://images.unsplash.com/photo-1552160793-cbae0e200ce9?w=800&auto=format&fit=crop',
      technique: 'Watercolor',
      year: '2022'
    },
    {
      id: '4',
      title: 'Vibrant Dreams',
      image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&auto=format&fit=crop',
      technique: 'Acrylic on Canvas',
      year: '2023'
    },
    {
      id: '5',
      title: 'Urban Symphony',
      image: 'https://images.unsplash.com/photo-1574610664346-311a39e1a179?w=800&auto=format&fit=crop',
      technique: 'Digital Art',
      year: '2024'
    },
    {
      id: '6',
      title: 'Peaceful Solitude',
      image: 'https://images.unsplash.com/photo-1598839949930-48e9e039f8eb?w=800&auto=format&fit=crop',
      technique: 'Oil on Canvas',
      year: '2022'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col items-center py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-impression-pink opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-impression-blue opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl w-full mx-auto">
        <div className="paint-card">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center font-playfair">
            <span className="brush-stroke brush-stroke-blue">My Gallery</span>
          </h1>
          
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8 font-source-sans">
            A collection of my artistic works and creative expressions.
            Click on any image to view details!
          </p>
          
          {/* Gallery grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {artworks.map((artwork) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={artwork.id}
                className="gallery-item rounded-xl overflow-hidden shadow-lg border border-white/50"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="gallery-overlay bg-gradient-to-t from-impression-purple/80 via-impression-blue/60 to-transparent">
                    <h3 className="gallery-title font-playfair text-2xl text-white drop-shadow-md">{artwork.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Artwork detail modal */}
          {selectedArtwork && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={() => setSelectedArtwork(null)}>
              <div 
                className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 relative shadow-2xl" 
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-impression-purple text-white"
                  onClick={() => setSelectedArtwork(null)}
                >
                  ✕
                </button>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/2">
                    <img 
                      src={selectedArtwork.image} 
                      alt={selectedArtwork.title} 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="sm:w-1/2">
                    <h3 className="text-3xl font-playfair text-impression-purple mb-3">{selectedArtwork.title}</h3>
                    
                    <div className="mt-4 space-y-4">
                      <div className="p-4 bg-gradient-to-br from-white/90 via-[#f9fafc] to-[#e6f0ff]/80 rounded-lg shadow-md border border-white/60">
                        <h4 className="text-xl font-playfair text-impression-blue mb-2">Technique</h4>
                        <p className="font-source-sans text-gray-700">{selectedArtwork.technique}</p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-br from-white/90 via-[#f9fafc] to-[#e6f0ff]/80 rounded-lg shadow-md border border-white/60">
                        <h4 className="text-xl font-playfair text-impression-blue mb-2">Year</h4>
                        <p className="font-source-sans text-gray-700">{selectedArtwork.year}</p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-br from-white/90 via-[#f9fafc] to-[#e6f0ff]/80 rounded-lg shadow-md border border-white/60">
                        <h4 className="text-xl font-playfair text-impression-blue mb-2">Artist's Note</h4>
                        <p className="font-source-sans text-gray-700">
                          This piece represents my exploration of colors and emotions, 
                          inspired by the impressionist techniques of Monet and Van Gogh.
                        </p>
                      </div>
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

export default Gallery;
