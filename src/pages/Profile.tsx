
import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-impression-blue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-impression-purple opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl w-full mx-auto">
        <div className="paint-card">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            <span className="brush-stroke brush-stroke-blue">Profile</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
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
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-dancing text-impression-purple mb-1">Name</h2>
                  <p className="text-xl font-source-sans">Oceana Viktoria S. Nebre</p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-dancing text-impression-yellow mb-1">Age</h2>
                  <p className="text-xl font-source-sans">15</p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-dancing text-impression-blue mb-1">Occupation</h2>
                  <p className="text-xl font-source-sans">Student / Digital Artist / Web Developer</p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-dancing text-impression-orange mb-1">Education</h2>
                  <p className="text-xl font-source-sans">San Beda College Alabang</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-white via-[#f0f4f8] to-[#e6f1ff] rounded-lg shadow-inner">
                <h3 className="text-2xl font-dancing text-impression-purple mb-2">About Me</h3>
                <p className="text-lg leading-relaxed font-source-sans text-gray-700">
                  I'm a passionate student with a love for digital art and web development. 
                  Drawing inspiration from impressionist masters like Monet and Van Gogh, 
                  I blend traditional artistic styles with modern digital techniques to create 
                  unique experiences that express my creative vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
