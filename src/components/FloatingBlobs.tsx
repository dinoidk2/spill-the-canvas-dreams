
import React from 'react';

const FloatingBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large central impressionist blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-impression-cream via-impression-pink to-impression-blue rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      {/* Paint splatter effect - top right */}
      <div className="absolute top-[10%] right-[15%] w-64 h-64 opacity-20">
        <div className="absolute w-full h-full bg-impression-yellow rounded-[70%_30%_70%_30%/30%_30%_70%_70%] blur-xl animate-float-slow"></div>
      </div>
      
      {/* Paint splatter effect - bottom left */}
      <div className="absolute bottom-[15%] left-[10%] w-52 h-52 opacity-20">
        <div className="absolute w-full h-full bg-impression-purple rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-xl animate-float-reverse"></div>
      </div>
      
      {/* Small paint drop - middle right */}
      <div className="absolute top-[45%] right-[5%] w-28 h-28 opacity-30">
        <div className="absolute w-full h-full bg-impression-green rounded-[40%_60%_70%_30%/40%_50%_50%_60%] blur-md animate-pulse-slow"></div>
      </div>
      
      {/* Small paint drop - middle left */}
      <div className="absolute top-[30%] left-[8%] w-32 h-32 opacity-30">
        <div className="absolute w-full h-full bg-impression-blue rounded-[50%_50%_30%_70%/60%_40%_60%_40%] blur-md animate-float-slow"></div>
      </div>
      
      {/* Small paint drop - bottom right */}
      <div className="absolute bottom-[10%] right-[20%] w-40 h-40 opacity-25">
        <div className="absolute w-full h-full bg-impression-pink rounded-[60%_40%_50%_50%/30%_60%_40%_70%] blur-lg animate-float-reverse"></div>
      </div>
    </div>
  );
};

export default FloatingBlobs;
